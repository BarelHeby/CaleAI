from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer
from rest_framework.views import APIView
from users.models import User
from task_type.models import TaskType
from calendars.generator.main import generate
TOKEN_LENGTH = 256

class TaskView(APIView):

    def get(self, request, token=None):
        """
        Retrieve a task based on its token.
        """
        try:
            queryset = Task.objects.get(token=token)
            serializer = TaskSerializer(queryset)
            return Response(serializer.data)
        except Task.DoesNotExist:
            return Response({"error": "Task not found"}, status=404)

    def post(self, request):
        def convert_time_to_minutes(time_str):
            # Split the string into hours and minutes
            hours, minutes = map(int, time_str.split(':'))
            
            # Convert the time to total minutes
            total_minutes = hours * 60 + minutes
            
            return total_minutes
        """
        Create a new task with all fields supported.
        """
        data = request.data["tasks"]
        token = request.META.get('HTTP_AUTHORIZATION')
        user = User.objects.get(token=token)
        for task in data:
            task_type = TaskType.objects.get(name=task['category'])
            task_1 = Task.objects.create(
                user_id=user,
                type_id=task_type,
                name=task['name'] if 'name' in task else '',
                from_time=task['from_time'] if 'from_time' in task else None,
                to_time=task['to_time'] if 'to_time' in task else None,
                frequency=task['frequency'],
                duration=convert_time_to_minutes(task['duration']),
                is_morning= task["time"]=="Morning" ,
                is_noon= task["time"]=="Noon" ,
                is_evening= task["time"]=="Evening" ,
            )
            task_1.save()
        generate(user.id)
        return Response({"token": token}, status=201)