from fastapi import FastAPI, Request
from emailSender import EmailSender
from dotenv import dotenv_values
from pydantic import BaseModel
import uvicorn

app = FastAPI()

config = dotenv_values(".env")
myEmail = config['EMAIL_ADDRESS']
myPassword = config["EMAIL_PASSWORD"]
es = EmailSender(myEmail, myPassword)
# es.send_multiple_emails_html(['wysu@onet.pl'], 'test',msgText)

class EmailJSON(BaseModel):
  msg: str
  title: str

@app.get('/user-email')
def get_user_email():
  return {"email": myEmail}

# needs to connect to database
@app.post('/all')
def send_to_all(req : Request):
  pass


@app.post('/user/{userEmail}')
def sent_to_single_user(userEmail , email : EmailJSON):
  try:
    es.send_email_html(userEmail, email.title, email.msg)
    return {"Status": 'success'}
  except:
    return {"status": "error"}
  
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=30000)