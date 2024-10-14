from datetime import datetime, timedelta,time
from heapq import heappop, heappush
from task.models import Task
from event.models import Event
from users.models import User
from calendars.generator.Node import Node

class AStarScheduler:
    def __init__(self, user_id, start_date, end_date):
        self.user = User.objects.get(id=user_id)
        self.start_date = start_date
        self.end_date = end_date

    def fetch_tasks(self):
        """Fetch user tasks from the database."""
        return Task.objects.filter(user_id=self.user)

    def create_next_event(self, task, current_date, last_event_time):
        """Generates the next possible event for the task based on its frequency."""
        if isinstance(last_event_time, time):
            last_event_time = datetime.combine(current_date, last_event_time)
        next_start_time = last_event_time + timedelta(minutes=10)
        next_end_time = next_start_time + timedelta(minutes=task.duration)

        # do not start a task after 8:00 PM
        while next_start_time.hour<20:
            if next_end_time.date() > self.end_date.date():
                return None

            if task.is_morning and next_start_time.hour >12:
                return None
            
            if task.is_noon and not self.is_noon_time(next_start_time.hour):
                next_start_time+=timedelta(minutes=10)
                next_end_time+=timedelta(minutes=10)
                continue
            
            if task.is_evening and not self.is_evening_time(next_start_time.hour):
                next_start_time+=timedelta(minutes=10)
                next_end_time+=timedelta(minutes=10)
                continue

            return Event(
                user_id=self.user,
                task_id=task,
                from_time=next_start_time.time(),
                to_time=next_end_time.time(),
                date=next_start_time.date(),
                is_constant=task.from_time is not None and task.to_time is not None
            )
        
        return None

    def schedule(self):
        """Runs the A* algorithm to schedule tasks for the full business week (Sunday to Thursday)."""
        unsorted_tasks = self.fetch_tasks()
        tasks = sorted(unsorted_tasks, key=lambda task: (not task.is_morning, not task.is_noon, not task.is_evening))

        current_date = self.start_date

        events = []
        while current_date <= self.end_date:    
            # Skip non-business days (Friday and Saturday)
            day_of_week = current_date.weekday()
            if day_of_week > 3 and day_of_week<6 :  # 0 = monday, 6 = Thursday
                current_date += timedelta(days=1)
                continue
            
            for task in tasks:
                # Check if the task should be scheduled today
                if self.should_schedule_today(task, current_date):
                      
                    last_event_time = current_date if not events or (current_date.hour==7 and current_date.minute==50) else events[-1].to_time
                    next_event = self.create_next_event(task, current_date, last_event_time)

                    if next_event:
                        events.append(next_event)
                        current_date = datetime.combine(current_date, next_event.to_time)
            
            # Move to the next day
            current_date = current_date.replace(hour=7, minute=50, second=0, microsecond=0)
            current_date += timedelta(days=1)

        

        return events
    
    def is_noon_time(self, hour):
        """Check if the given time is in the afternoon (between 12:00 PM and 6:00 PM)."""
        return hour >= 12 and hour < 17
    
    def is_evening_time(self, hour):
        """Check if the given time is in the evening (after 6:00 PM)."""
        return hour >= 17
    
    def should_schedule_today(self, task, current_date):
        """Determine if a task should be scheduled on a particular day based on its frequency."""
        if task.frequency == 'daily':
            return True
        elif task.frequency == 'weekly':
            # Schedule on the same day of the week as the start date, only during the business week
            return current_date.weekday() == self.start_date.weekday()
        elif task.frequency == 'monthly':
            # Schedule on the same day of the month, only during the business week
            return current_date.day == self.start_date.day()
        return False