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
from django.http.response import JsonResponse
import json
TOKEN_LENGTH = 256


class EventView(APIView):
    def get(self, request):
        date = request.query_params.get('date')
        token = request.META.get('HTTP_AUTHORIZATION')
        try:
            user = User.objects.get(token=token)
        except:
            return Response(status=401)
        print(date)
        events = Event.objects.filter(date=date, user_id=user).order_by('from_time')
        events = [event.to_json() for event in events]
        print(events)
        return JsonResponse (events, safe=False)

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
