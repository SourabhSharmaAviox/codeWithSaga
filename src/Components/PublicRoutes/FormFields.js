import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const FormFields =({register, errors})=>{
  const loader = useSelector(state=>state.Loader.loading)

    return<>
      <input
                placeholder="Enter username"
                className="form-control mb-2"
                type={"text"}
                {...register("username", {
                  required: true,
                  minLength: 3,
                })}
              />
              {errors["username"]?.type == "required" && (
                <p className="text-danger">Please fill username</p>
              )}
              {errors["username"]?.type == "minLength" && (
                <p className="text-danger">Min length is 3</p>
              )}
              {errors["username"]?.type == "maxLength" && (
                <p className="text-danger">Max length is 20</p>
              )}

              <input
                placeholder="Enter firstname"
                className="form-control mb-2"
                type={"text"}
                {...register("first_name", {
                  required: true,
                  maxLength: 12,
                  minLength: 3,
                })}
              />
              {errors["first_name"]?.type == "required" && (
                <p className="text-danger">Please fill firstname</p>
              )}
              {errors["first_name"]?.type == "maxLength" && (
                <p className="text-danger">Max length will be 12</p>
              )}
              {errors["first_name"]?.type == "minLength" && (
                <p className="text-danger">Max length will be 3</p>
              )}

              <input
                placeholder="Enter lastname"
                className="form-control mb-2"
                type={"text"}
                {...register("last_name", { required: true, maxLength: 10 })}
              />
              {errors["last_name"] && (
                <p className="text-danger">Please fill lastname</p>
              )}

              <input
                placeholder="Enter email"
                className="form-control mb-2"
                type={"text"}
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z][\w.+]*@[a-z]+\.[a-z]+(\.[a-z]{2,5})?$/,
                })}
              />
              {errors["email"]?.type == "required" && (
                <p className="text-danger">Please fill email</p>
              )}
              {errors["email"]?.type == "pattern" && (
                <p className="text-danger">Please fill valid email</p>
              )}

              <input
                placeholder="Enter password"
                className="form-control mb-2"
                type={"password"}
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,16}$/,
                  minLength: 7,
                  maxLength: 16,
                })}
              />
              {errors["password"]?.type == "required" && (
                <p className="text-danger">Please fill password</p>
              )}
              {errors["password"]?.type == "pattern" && (
                <p className="text-danger">
                  Password must have atleast 1 Uppercase, 1 LowerCase and 1
                  special Character
                </p>
              )}
              {errors["password"]?.type == "maxLength" && (
                <p className="text-danger">Max length will be 12</p>
              )}
              {errors["password"]?.type == "minLength" && (
                <p className="text-danger">Min length will be 7</p>
              )}

             <button disabled={loader} className="btn  btn-primary px-5 mx-lg-5 " type="submit">
                {loader ? "Sending...":"Sign Up"}
              </button>

              <button className="btn " type="submit">
                Already a user ? <Link  to="/login">Sign In</Link>
              </button>
    
    </>
}

export default FormFields;