import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Footer } from "./Footer";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useState } from "react";
import classNames from "classnames";
import { addEmailToDB } from "../api/api";
import { addErrorNotification, addSuccessNotification } from "../utils/notifications";

export const LandingPage = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    console.log("clicked");
    setError("");
    try {
      const response = await addEmailToDB(email);
      console.log(response);
      if (response.status === "Error") {
        setError(response.msg);
      }
      else{
        addSuccessNotification('Success', 'Email succesfully added to our newsletter!')
        setError('');
        setEmail('');
      }
    } catch (error) {
      console.log(error);
      addErrorNotification('Some error occurred!', 'Something went wrong');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-[100vh]">
      <a href="https://fitproject.pl/" target="_blank">
        <img
          className="absolute left-4 top-4"
          src="https://i.ibb.co/bgb2nKC/logo.png"
          alt="logo"
        />
      </a>
      <MaxWidthWrapper className="flex-grow flex flex-col items-center justify-center">
        <h1 className="mb-5">
          Dołącz do naszego{" "}
          <strong style={{ color: "#9dca00", border: "none" }}>
            newslettera
          </strong>
          , <br /> aby nie ominąć naszych okazji!
        </h1>
        <Form className="max-w-[450px] min-w-[400px]">
          <FloatingLabel
            controlId="floatingInput"
            label="Adres email"
            className="mb-3"
          >
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={classNames({
                "px-3": true,
                "is-invalid": error,
              })}
              type="email"
              placeholder="name@example.com"
              size={"lg"}
            />
          </FloatingLabel>
          {error && (
            <div className="invalid-feedback" style={{ display: "block" }}>
              {error}
            </div>
          )}
          <Button
            size={"lg"}
            variant="primary"
            className="mt-2 ml-auto"
            style={{ backgroundColor: "#9dca00", border: "none" }}
            onClick={() => handleSubmit()}
          >
            Dołącz
          </Button>
        </Form>
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
};
