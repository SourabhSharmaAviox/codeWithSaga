import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
   const isAuth = useSelector(state=>state.Auth.isAuth)
   
    
  return (
    <>
      <Route {...rest}>
        {isAuth ? children : <Redirect to="/notFoundPage" />}
        
      </Route>
    </>
  );
};
export default PrivateRoute;
