import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { EmailView, EmailForm } from "./components";

function App() {
  return (
    <div className={`flex w-[100vw] h-[100vh]`}>
      <div className="w-1/2 bg-black">
        <EmailForm />
      </div>
      <div className="w-1/2">
        <EmailView />
      </div>
    </div>
  );
}

export default App;
