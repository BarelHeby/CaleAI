
from django.db import models


class Task(models.Model):
    user_id = models.IntegerField()
    calendar_id = models.IntegerField()
    type_id = models.IntegerField()
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=True)
    description = models.CharField(max_length=150, blank=True)
    from_time = models.TimeField(blank=False, null=False)
    to_time = models.TimeField(blank=False, null=False)
    frequency = models.CharField(null=False)
    duration = models.IntegerField()
    is_splittable = models.IntegerField()
    priority = models.IntegerField()
    is_morning = models.IntegerField()
    is_noon = models.IntegerField()
    is_evening = models.IntegerField()
    is_parallelable = models.IntegerField()

    def __str__(self):
        return self.id

    # USERNAME_FIELD = 'id'
    # REQUIRED_FIELDS = []
