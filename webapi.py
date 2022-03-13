from flask import Flask, request, jsonify
from random import randint
from flask_cors import CORS, cross_origin
from waitress import serve
import json
import mysql.connector

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def conn(url,user,pwd,db):
    try:
        config = {
        'user': user,
        'password': pwd,
        'host': url,
        'database': db,
        'raise_on_warnings': True
        }

        return mysql.connector.connect(**config)
    except Exception as e:
        print(e)
        return None

    
    # cnx.close()


@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"

@app.route('/test', methods=['GET'])
def test():
    return "HELLO WORLD"

@app.route('/post', methods=['POST'])
def post():
    try:
        data = request.json
        print(data)
        connection = conn('157.90.206.38','malvio','Passwordroot1234!','malvio')

        sql = "INSERT INTO posts (user_id, chat, title, content, likes, dislikes) VALUES (%s,%s,%s,%s,%s,%s)"
        val = (1,data['chat'],data['title'],data['content'],0,0)
        mycursor = connection.cursor()
        mycursor.execute(sql, val)
        connection.commit()
        print(mycursor.rowcount, "record inserted.")

        return jsonify(data)
    except Exception as exc:
        print(str(exc))
        return "Server error: " + str(exc)


@app.route('/loadposts', methods=['POST'])
def loadposts():
    try:
        data = request.json
        print(data)
        chat = data['chat']
        returnData = [{'title':'HelloWorld','username':'markz','content':'This is a post!','chat':chat},{'title':'HelloWorld','username':'markz','content':'This is a post!','chat':chat},{'title':'HelloWorld','username':'markz','content':'This is a post!','chat':chat}]
        print( json.dumps(returnData))
        return json.dumps(returnData)
    except Exception as exc:
        print(str(exc))
        return "Server error: " + str(exc)



if __name__ == "__main__":
    app.run('0.0.0.0',port=8080)
    serve(app)
