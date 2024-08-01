from fastapi import FastAPI, WebSocket
from dotenv import dotenv_values
from pydantic import BaseModel
import uvicorn
from emailSender import EmailSender
from mongoNewsletter import MongoNewsletter
from fastapi.middleware.cors import CORSMiddleware
import asyncio

class EmailJSON(BaseModel):
  msg: str
  title: str

class ReceiverEmailJson(EmailJSON):
  receiver: str

config = dotenv_values(".env")
myEmail = config['EMAIL_ADDRESS']
myPassword = config["EMAIL_PASSWORD"]
mongoPassword = config['MONGO_DB_PASSWORD']

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app = FastAPI()
es = EmailSender(myEmail, myPassword)
mongo = MongoNewsletter(mongoPassword)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Możesz podać listę dozwolonych adresów
    allow_credentials=True,
    allow_methods=["*"],  # Umożliwia wszystkie metody (GET, POST itp.)
    allow_headers=["*"],  # Umożliwia wszystkie nagłówki
)

@app.get('/user-email')
def get_user_email():
  return {"email": myEmail}

# needs to connect to database
@app.websocket('/all')
async def send_to_all(websocket: WebSocket):
  await websocket.accept()
  try:
    data = await websocket.receive_json()
    emailProps = EmailJSON(**data)
    receivers = mongo.getAllEmails()
    for receiver in receivers:
      try:
        es.send_email_html(receiver, emailProps.title, emailProps.msg)
        await asyncio.sleep(0.1)
        await websocket.send_json({"Status": 'success', "msg": f'Email sent to {receiver}!'})
      except Exception as e:
        await websocket.send_json({"status": "error", "msg": f'Something went wrong with {receiver}: {str(e)}'})
  except Exception as e:
    await websocket.send_json({"status": "error", "msg": str(e)})
  finally:
    await websocket.close()


@app.post('/user/')
def sent_to_single_user(emailProps : ReceiverEmailJson):
  try:
    es.send_email_html(emailProps.receiver, emailProps.title, emailProps.msg)
    return {"Status": 'success', "msg": f'Email sent to {emailProps.receiver}'}
  except:
    return {"status": "error"}
  
if __name__ == "__main__":
  uvicorn.run(app, host="127.1.1.1", port=30000)