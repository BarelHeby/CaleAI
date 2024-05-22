from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import EventView

urlpatterns = [
    path("", EventView.as_view(), name='event'),
    # path("<str:token>", UserView.as_view(), name='user_by_token'),
    # path("login/", LoginView.as_view(), name='login'),
]
