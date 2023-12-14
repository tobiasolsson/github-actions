import MainContent from "./components/MainContent";
import logo from "./assets/images/github_orange.png";

function App() {
  return (
    <>
      <header>
        <img src={logo} />
        <h1>Learn GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
