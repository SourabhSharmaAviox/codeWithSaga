import { useContext } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory, useLocation } from "react-router-dom";
import { AuthRemove } from "../../Redux/Actions/AuthAction";
import { ColorContext } from "../Contexts/colorContext";

const Header = () => {
  const {color}= useContext(ColorContext)
  const isAuth = useSelector(state=>state.Auth.isAuth)
  const dispatch = useDispatch()
  const history = useHistory();

  const authRemoveHandler=()=>{
     dispatch(AuthRemove())
     history.push("/login")
  }
  

  return (<>
    <nav className={`navbar navbar-expand-lg ${color?"bg-success" :'bg-primary'} `}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          ROUTES
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/"
                activeClassName="text-white"
              >
                Home
              </NavLink>
            </li>
          {!isAuth  ?<>  <li className="nav-item ">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/register"
                activeClassName="text-white"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/login"
                activeClassName="text-white"
              >
                Login
              </NavLink>
            </li>
            
            </> :null}

          {
            isAuth &&<><li className="nav-item">
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/secretData"
              activeClassName="text-white"
            >
              User Data
            </NavLink>
          </li>
          <li className="nav-item ">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/createpost"
                activeClassName="text-white"
              >
                Create Post
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/allpost"
                activeClassName="text-white"
              >
                All Posts
              </NavLink>
            </li>
          </>
          }
              
             
       
          </ul>
                <span className="navbar-text">
               {isAuth && <p
                  style={{ cursor:"pointer"}}
                  className="nav-link float-xxl-end  text-white"
                  onClick={authRemoveHandler}
                >
                 Logout 
                </p>}
          </span>
        </div>
      </div>
     
    </nav>
    </>
  );
};

export default Header;
