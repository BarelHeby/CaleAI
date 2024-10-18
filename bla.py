import requests
from datetime import datetime

# Define your API endpoint
url = 'http://localhost:8000/event/?date=2024-10-22'

  # Change this to your actual API endpoint
response = requests.get(url)
print(response.text)


