from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    image = models.TextField(blank=True)

    def set_image(self, base64_image):
        # Directly save the base64 string to the database
        self.image = base64_image
        self.save()

    def get_image(self):
        return self.image
