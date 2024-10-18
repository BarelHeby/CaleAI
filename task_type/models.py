
from django.db import models


class TaskType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=True)
    color = models.CharField(max_length=150, blank=True)

    def __str__(self):
        return self.id
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "color": self.color
    }

    # USERNAME_FIELD = 'id'
    # REQUIRED_FIELDS = []
