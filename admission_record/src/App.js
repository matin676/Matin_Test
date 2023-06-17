import "./App.css";
import Contact from "./components/Contact";
import EducationalBg from "./components/EducationalBg";
import Interests from "./components/Interests";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  return (
    <div className="container">
      <form>
        <h3>Record Form</h3>
        <table align="center" cellpadding="10">
          <PersonalInfo />
          <Contact />
          <EducationalBg />
          <Interests />
        </table>
      </form>
    </div>
  );
}

export default App;
