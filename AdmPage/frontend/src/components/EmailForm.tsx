import React, { useState } from "react";
import { observer } from "mobx-react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useStores } from "../hooks/useStores";
import { Button, Stack, Tab, Tabs } from "react-bootstrap";
import { backendAddress } from "../assets/backendAddress";
import { Event } from "../stores/EmailStore";

export const EmailForm: React.FC<React.HTMLAttributes<HTMLDivElement>> =
  observer((props) => {
    const { emailStore } = useStores();
    const [receiver, setReceiver] = useState<string>('')
    const handleTabPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const textarea = e.target as HTMLTextAreaElement;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const value = textarea.value;

        textarea.value =
          value.substring(0, start) + "\t" + value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
      }
    };

    const sendEmail = async () =>{
      const requestProps = {
        title: emailStore?.emailTitle ?? ' ',
        msg: emailStore?.emailBody ?? ' ',
        receiver: receiver
      };
      const response = await fetch(`http://${backendAddress}/user/`, {
        method: 'POST',
        body: JSON.stringify(requestProps),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const result = await response.json()
      console.log(result);
      const e = {
        msg: result.msg,
        date : new Date(),
      } as Event
      emailStore?.addEvent(e);
    }

    const sendMultipleEmails = () => {
      const websocket = new WebSocket(`ws://${backendAddress}/all`);
      
      websocket.onopen = () => {
        console.log('WebSocket connected');
        const requestProps = {
          title: emailStore?.emailTitle ?? ' ',
          msg: emailStore?.emailBody ?? ' ',
        };
        websocket.send(JSON.stringify(requestProps));
      };

      websocket.onmessage = async (event) => {
        const message = await JSON.parse(event.data);
        const e = {
          msg: message.msg,
          date : new Date(),
        } as Event
        emailStore?.addEvent(e);
      };

      websocket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      websocket.onclose = () => {
        console.log('WebSocket disconnected');
      };
    };

    return (
      <div className="w-full p-20 bg-gray-200 h-full" {...props}>
        <div className="text-2xl mb-20">
          <h1> Welcome in Newsletter!</h1>
        </div>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Title"
            className="mb-3"
          >
            <Form.Control
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                emailStore?.setEmailTitle(e.target.value)
              }
              type="text"
              placeholder="Title"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email header"
            className="mb-3"
          >
            <Form.Control
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                emailStore?.setEmailHeader(e.target.value)
              }
              type="text"
              placeholder="Your header"
            />
          </FloatingLabel>
          <FloatingLabel
            className="min-h-96"
            controlId="floatingPassword"
            label="Your email message"
          >
            <textarea
              onKeyDown={handleTabPress}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                emailStore?.setInputBody(e.target.value)
              }
              rows={20}
              placeholder="Your email message"
              id="floatingPassword"
              className="min-h-96 form-control mb-6"
              style={{ height: "40vh" }}
            ></textarea>
          </FloatingLabel>
          <Stack>
            <Tabs
            defaultActiveKey={"everyone"}>
              <Tab eventKey="oneReceiver" title="One receiver" >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Receiver"
                  className="mb-2 mt-2 h-12"
                >
                  <Form.Control
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      {setReceiver(e.target.value);
                        console.log(receiver)
                      }
                    }
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
                <Button
                  variant="primary"
                  className="mt-3 ml-auto"
                  style={{ backgroundColor: "#9dca00", border: "none" }}
                  onClick={sendEmail}
                >
                  Send
                </Button>
              </Tab>
              <Tab eventKey="everyone" title="Everyone">
                <h1 className="mb-2 mt-2 pt-2 text-xl h-12 justify-self-center self-center">Send to everyone in your database</h1>
                <Button
                  variant="primary"
                  className="mt-3 ml-auto"
                  onClick={sendMultipleEmails}
                  style={{ backgroundColor: "#9dca00", border: "none" }}
                >
                  Send
                </Button>
              </Tab>
            </Tabs>
          </Stack>
        </Form>
      </div>
    );
  });
