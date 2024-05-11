from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from django.utils import timezone
from datetime import datetime
from rest_framework.authtoken.models import Token
# from django.contrib.auth.hashers import check_password
import secrets
import threading

TOKEN_LENGTH = 256


class TaskView(APIView):
    def get(self, request, token=None):
        queryset = Task.objects.get(token=token)
        serializer = TaskSerializer(queryset)
        return Response(serializer.data)

    def post(self, request, token=None):
        print(request.data)
        data = request.data
        data["from_time"] = datetime.fromisoformat(
            str(data["from_time"]).replace("Z", "")).time()
        data["to_time"] = datetime.fromisoformat(
            str(data["to_time"]).replace("Z", "")).time()
        token = secrets.token_urlsafe(TOKEN_LENGTH)
        data["token"] = token
        serializer = TaskSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"token": token}, status=201)
        return Response(serializer.errors, status=400)
