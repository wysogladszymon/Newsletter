import { ReactNotifications } from "react-notifications-component";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <>
      <ReactNotifications />
      <LandingPage />
    </>
  );
}

export default App;
