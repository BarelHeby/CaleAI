
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
    from_time = models.TimeField(blank=False, null=False) #optional field if is constant 
    to_time = models.TimeField(blank=False, null=False) # optional field if is constant
    frequency = models.CharField(max_length=150,null=False) # one time, daily, weekly, monthly, yearly 
    duration = models.IntegerField() # in minutes
    is_splittable = models.BooleanField() # if the task can be split into smaller tasks
    priority = models.IntegerField() # 1-5
    is_morning = models.BooleanField()  # if this task prefers morning
    is_noon = models.BooleanField() # if this task prefers noon
    is_evening = models.BooleanField() # if this task prefers evening
    is_parallelable = models.BooleanField() # if this task can be done in parallel with other tasks

    def __str__(self):
        return self.id

    # USERNAME_FIELD = 'id'
    # REQUIRED_FIELDS = []
