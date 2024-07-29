import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Footer } from "./Footer";
import MaxWidthWrapper from "./MaxWidthWrapper";

export const LandingPage = () => {
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
              className="px-3"
              type="email"
              placeholder="name@example.com"
              size={"lg"}
            />
          </FloatingLabel>
          <Button
            size={"lg"}
            variant="primary"
            className="mt-2 ml-auto"
            style={{ backgroundColor: "#9dca00", border: "none" }}
          >
            Dołącz
          </Button>
        </Form>
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
};
