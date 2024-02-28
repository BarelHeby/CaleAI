import pyodbc

server = 'caleai-server.database.windows.net'
database = 'caleai'
username = 'CloudSAaee375c1'
password = 'BarelOmerAvi123'
driver = '{ODBC Driver 18 for SQL Server}'

# Establish the connection
cnxn = pyodbc.connect('DRIVER='+driver+';SERVER='+server +
                      ';PORT=1433;DATABASE='+database+';UID='+username+';PWD=' + password)
print("connected")
# Create a cursor from the connection
cursor = cnxn.cursor()

# Write your query
query = """CREATE TABLE users (
    username NVARCHAR(50),
    password NVARCHAR(50)
);
"""

# Execute the query
cursor.execute(query)
cnxn.commit()
# Fetch the results
# rows = cursor.fetchall()

# for row in rows:
#     print(row)
