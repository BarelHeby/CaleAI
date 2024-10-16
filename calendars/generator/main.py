
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime
from django.http import JsonResponse
from calendars.generator.AStarScheduler import AStarScheduler
import calendar
from event.models import Event
@csrf_exempt
def generate(request):
    user_id = "1"  # Get the current user
    start_date = datetime.now()  # Example start date

    # Get the last day of the current month
    last_day = calendar.monthrange(start_date.year, start_date.month)[1]

    # Set end_date as the last day of the current month with the time set to 20:00
    end_date = datetime(start_date.year, start_date.month, last_day, 20, 0)
    scheduler = AStarScheduler(user_id, start_date, end_date)
    events = scheduler.schedule()

    if events:
        # Delete all existing events for the user
        Event.objects.filter(user_id=user_id).delete()
        # Save all events to the database
        for event in events:
            event.save()
        return JsonResponse({"success": True, "events": [str(event) for event in events]})
    return JsonResponse({"success": False, "message": "No valid schedule found"})
