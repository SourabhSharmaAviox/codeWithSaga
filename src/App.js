import Header from "./Components/NavigationMenu/Header";
import UserReducer from "./Components/PublicRoutes/Reducerss";

import Routes from "./Routes/Routes";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Routes />
      
     {/*  <UserReducer/> */}
    </div>
  );
};

export default App;
