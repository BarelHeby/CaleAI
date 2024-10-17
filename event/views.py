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
from users.models import User

TOKEN_LENGTH = 256


class EventView(APIView):
    def get(self, request):
        date = request.query_params.get('date')
        token = request.META.get('HTTP_AUTHORIZATION')
        user = User.objects.get(token=token)
        print(date)
        # if date:
        #     queryset = Event.objects.filter(date=date)
        #     serializer = EventSerializer(queryset, many=True)
        #     return Response(serializer.data)
        # queryset = Event.objects.all()
        # serializer = EventSerializer(queryset, many=True)
        return Response("get request")

    def post(self, request):
        data = request.date
        token = request.META.get('HTTP_AUTHORIZATION')
        print(data)
        print(token)
        user = User.objects.get(token=token)

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
