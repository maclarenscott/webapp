import mysql.connector
import json
class create_dict(dict): 
  
    # __init__ function 
    def __init__(self): 
        self = dict() 
          
    # Function to add key:value 
    def add(self, key, value): 
        self[key] = value
def conn(url,user,pwd,db):
    config = {
    'user': user,
    'password': pwd,
    'host': url,
    'database': db,
    'raise_on_warnings': True
    }

    return mysql.connector.connect(**config)


connection = conn('157.90.206.38','malvio','Passwordroot1234!','malvio')

sql = "SELECT * FROM posts WHERE chat = %s or chat = %s ;"
values = ('m/General', 'General')
mycursor = connection.cursor(buffered=True)
mycursor.execute(sql,values)
connection.commit()
records = mycursor.fetchall()
print(records)

m=[]
for row in records:
    m.append({"post_id":row[0],"user_id":row[1],"chat":row[2],"title":row[3],"content":row[4],"likes":row[5],"dislikes":row[6],"start_time":str(row[7])})

print(m)