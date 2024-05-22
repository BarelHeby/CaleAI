
from django.db import models
from users.models import User
from calendars.models import Calendar
from task_type.models import TaskType


class Task(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    calendar_id = models.ForeignKey(Calendar, on_delete=models.CASCADE)
    type_id = models.ForeignKey(TaskType, on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=True)
    description = models.CharField(max_length=150, blank=True)
    from_time = models.TimeField(blank=False, null=False)
    to_time = models.TimeField(blank=False, null=False)
    frequency = models.CharField(null=False)
    duration = models.IntegerField()
    is_splittable = models.BooleanField()
    priority = models.IntegerField()
    is_morning = models.BooleanField()
    is_noon = models.BooleanField()
    is_evening = models.BooleanField()
    is_parallelable = models.BooleanField()

    def __str__(self):
        return self.id

    # USERNAME_FIELD = 'id'
    # REQUIRED_FIELDS = []
