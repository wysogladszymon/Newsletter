import smtplib
import os
from email.message import EmailMessage

myEmail = os.environ.get('EMAIL_ADDRESS')
myPassword = os.environ.get("EMAIL_PASSWORD")

msg = EmailMessage()

with smtplib.SMTP("smtp.gmail.com", 587) as smtp:
  smtp.ehlo() # Identify yourself to an ESMTP server using EHLO 
  smtp.starttls() # Put the SMTP connection in TLS (Transport Layer Security) mode
  smtp.ehlo()

  smtp.login(myEmail, myPassword)

  # smtp.sendmail(SENDER, RECEIVER, message)

#   uruchom python3 -m smtpd -c DebuggingServer -n localhost:1025

class EmailSender:
  def __init__ (self, EMAIL_ADDRESS, EMAIL_PASSWORD):
    self.EMAIL_ADDRESS = EMAIL_ADDRESS
    self.EMAIL_PASSWORD = EMAIL_PASSWORD
    self.msg = EmailMessage()

  def send_email(self, receiver, subject, message):
    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = self.EMAIL_ADDRESS
    msg['To'] = receiver
    msg.set_content(message)

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
      smtp.login(self.EMAIL_ADDRESS, self.EMAIL_PASSWORD)
      smtp.send_message(msg)

  