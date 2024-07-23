import React from "react";
import { observer } from "mobx-react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useStores } from "../hooks/useStores";

export const EmailForm: React.FC<React.HTMLAttributes<HTMLDivElement>> =
  observer((props) => {
    const { emailStore } = useStores();

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
              type="email"
              placeholder="name@example.com"
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
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            className="min-h-96"
            controlId="floatingPassword"
            label="Your email message"
          >
            <Form.Control
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                emailStore?.setInputBody(e.target.value)
              }
              className="min-h-96"
              rows={20}
              as="textarea"
              placeholder="Your email message"
            />
          </FloatingLabel>
        </Form>
      </div>
    );
  });
