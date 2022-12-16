import { Route } from "react-router-dom/cjs/react-router-dom";

const PublicRoute = ({ children, ...rest }) => {
  return  <Route {...rest}>{children} </Route>
};
export default PublicRoute;
