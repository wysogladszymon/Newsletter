import smtplib
from email.message import EmailMessage
from dotenv import dotenv_values
from message import msgText
from typing import Optional
from pydantic import BaseModel

class EmailSender:
  def __init__ (self, EMAIL_ADDRESS, EMAIL_PASSWORD):
    self.EMAIL_ADDRESS = EMAIL_ADDRESS
    self.EMAIL_PASSWORD = EMAIL_PASSWORD
    self.server = smtplib.SMTP('smtp.gmail.com', 587)
    self.login()
  
  def login(self):
    self.server.starttls()
    self.server.login(self.EMAIL_ADDRESS, self.EMAIL_PASSWORD)

  def send_email_html(self, receiver, subject, message):
    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = self.EMAIL_ADDRESS
    msg['To'] = receiver
    msg.set_content(message,subtype='html')
    self.server.send_message(msg)
    print(f'Email from {self.EMAIL_ADDRESS} to {receiver} sent!')
  

  def send_multiple_emails_html(self, receivers, subject, message):
    for receiver in receivers:
      msg = EmailMessage()
      msg['Subject'] = subject
      msg['From'] = self.EMAIL_ADDRESS
      msg.set_content(message,subtype='html')
      msg['To'] = receiver
      self.server.send_message(msg)
      print(f'Email from {self.EMAIL_ADDRESS} to {receiver} sent!')

class EmailJSON(BaseModel):
  msg: str
  title: str
  to: Optional[str]


def main():
  config = dotenv_values(".env")
  myEmail = config['EMAIL_ADDRESS']
  myPassword = config["EMAIL_PASSWORD"]
  es = EmailSender(myEmail, myPassword)
  es.send_multiple_emails_html(['wysu@onet.pl'], 'test',msgText)


if __name__ == '__main__':
  main()