import ColorContextProvider from "./Components/Contexts/colorContext";
import Header from "./Components/NavigationMenu/Header";
import Routes from "./Routes/Routes";

const App = () => {
  return <div className="container-fluid">
        <Header />
        <Routes />
      </div> 
};

export default App;
