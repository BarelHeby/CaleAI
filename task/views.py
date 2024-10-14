from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer
from rest_framework.views import APIView
from django.utils import timezone
from datetime import datetime
from rest_framework.authtoken.models import Token
import secrets

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

    def post(self, request, token=None):
        """
        Create a new task with all fields supported.
        """
        data = request.data

        # Parse 'from_time' and 'to_time' if they are provided
        if 'from_time' in data:
            try:
                data["from_time"] = datetime.fromisoformat(data["from_time"].replace("Z", "")).time()
            except ValueError:
                return Response({"error": "Invalid from_time format"}, status=400)
        
        if 'to_time' in data:
            try:
                data["to_time"] = datetime.fromisoformat(data["to_time"].replace("Z", "")).time()
            except ValueError:
                return Response({"error": "Invalid to_time format"}, status=400)

        # Add a token for the new task
        token = secrets.token_urlsafe(TOKEN_LENGTH)
        data["token"] = token

        # Ensure all fields are present and valid
        required_fields = ['user_id', 'calendar_id', 'type_id', 'name', 'frequency', 'duration', 'is_splittable', 
                           'priority', 'is_morning', 'is_noon', 'is_evening', 'is_parallelable']

        missing_fields = [field for field in required_fields if field not in data]
        if missing_fields:
            return Response({"error": f"Missing required fields: {', '.join(missing_fields)}"}, status=400)

        # Create the task using the serializer
        serializer = TaskSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response({"token": token}, status=201)

        return Response(serializer.errors, status=400)
