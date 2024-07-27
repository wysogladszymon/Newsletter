import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { EmailView, EmailForm } from "./components";
import { useEffect } from "react";
import { useStores } from "./hooks/useStores";
import { backendAddress } from "./assets/backendAddress";
import { Tab, Tabs } from "react-bootstrap";
import { EventLog } from "./components/EventLog";

function App() {
  const { emailStore } = useStores();
  useEffect(() => {
    const f = async () => {
      const response = await fetch(`http://${backendAddress}/user-email`, {
        method: "GET",
      });
      const result = await response.json();
      emailStore?.setEmailAuthor(result.email);
    };
    f();
  });

  return (
    <div className={`flex w-[100vw] h-[100vh]`}>
      <div className="w-1/2 bg-black">
        <EmailForm />
      </div>
      <div className="w-1/2">
        <Tabs defaultActiveKey='emailView' className='absolute'>
          <Tab title='Email Preview' eventKey='emailView'>
            <EmailView />
          </Tab>
          <Tab title='Event Log' eventKey='logView'>
            <EventLog/>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
