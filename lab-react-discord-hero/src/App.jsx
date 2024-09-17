// src/App.jsx
import "./App.css";
import discordLogo from "./assets/discordlogo.png";
import menuIcon from "./assets/menuicon.png";
import guysatbar from "./assets/guysatbar.png";

const App = () => {
  return (
    <div className="App">
      <header>
        <div id="discordLogo">
          <img src={discordLogo} alt="Discord Logo"></img>
        </div>
        <div id="menuIcon">
          <img src={menuIcon} alt="Menu Icon"></img>
        </div>
      </header>
      <main>
        <div id="h1">
          <h1>IMAGINE A PLACE...</h1>
        </div>
        <div id="p1">
          <p>
            ...where you can belong to a school club, or a worldwide art
            ommunity.Where just you and a handful of friends can spend time
            together. A place that makes it easy to talk every day and hang out
            more often.
          </p>
        </div>
        {
          <div id="button1">
            <button> Download for Mac</button>
          </div>
        }
        {
          <div id="button2">
            {" "}
            <button> Open Discord in your browser</button>
          </div>
        }
        {
          <div id="guysatbar">
            <img src={guysatbar} alt="Guys at Bar" color="blue"></img>
          </div>
        }
      </main>
    </div>
  );
};

export default App;
