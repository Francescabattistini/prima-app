import logo from "./logo.svg";
import "./App.css";
import { ButtonComponent } from "./component/ButtonComponent";
import { ImageComponent } from "./component/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ImageComponent
          kikko="foto.jpg"
          frassica="foto"
          gatto=" ciaoo mamma"
          link="https://learn.epicode.com/course/130/curriculum/44184"
          nomeLink=" epicode"
        />
        <br></br>
        <ButtonComponent nameButton="ciccio" cssclass="pippobaudo" />
        <ButtonComponent nameButton="cacca" cssclass="pippobaudo" />
        <ButtonComponent nameButton="cuore" cssclass="pippa" />
      </header>
    </div>
  );
}

export default App;
