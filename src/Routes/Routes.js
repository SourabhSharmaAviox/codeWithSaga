import { Switch, Route } from "react-router-dom";
import CreatePost from "../Components/PrivateRoutes/CreatePost";
import GetAllPost from "../Components/PrivateRoutes/GetAllPosts";
import SecretData from "../Components/PrivateRoutes/SecretData";
import Home from "../Components/PublicRoutes/Home";
import Login from "../Components/PublicRoutes/Login";
import Register from "../Components/PublicRoutes/Register";
import CantAccess from "./CantAccess";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes = () => {
  return (
    <>
      <Switch>
        <PublicRoute exact path="/">
          <Home />
        </PublicRoute>
        <PublicRoute exact path="/register">
          <Register />
        </PublicRoute>
        <PublicRoute exact path="/login">
          <Login/>
        </PublicRoute>
        <Route exact path="/CantAccess">
          <CantAccess/>
        </Route>

       

        <PrivateRoute exact path="/secretData">
          <SecretData />
        </PrivateRoute>
        <PrivateRoute exact path="/createpost">
          <CreatePost/>
        </PrivateRoute>

        <PrivateRoute exact path="/allpost">
          <GetAllPost/>
        </PrivateRoute>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
