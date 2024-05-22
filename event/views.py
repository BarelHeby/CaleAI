from rest_framework.response import Response
from .models import Event
from .serializers import EventSerializer
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from django.utils import timezone
from datetime import datetime
from rest_framework.authtoken.models import Token
# from django.contrib.auth.hashers import check_password
import secrets
import threading

TOKEN_LENGTH = 256


class EventView(APIView):
    def get(self, request):
        queryset = Event.objects.get()
        serializer = EventSerializer(queryset)
        return Response(serializer.data)

    def post(self, request):
        print(request.data)
        data = request.data
        data["from_time"] = datetime.fromisoformat(
            str(data["from_time"]).replace("Z", "")).time()
        data["to_time"] = datetime.fromisoformat(
            str(data["to_time"]).replace("Z", "")).time()
        serializer = EventSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=201)
        return Response(serializer.errors, status=400)
