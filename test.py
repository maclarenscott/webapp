import mysql.connector

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

sql = "INSERT INTO posts (user_id, chat, title, content, likes, dislikes) VALUES (%s,%s,%s,%s,%s,%s)"
val = (1,'general','HAI','COOL POST 4U!!',0,0)
mycursor = connection.cursor()
mycursor.execute(sql, val)
connection.commit()

print(mycursor.rowcount, "record inserted.")