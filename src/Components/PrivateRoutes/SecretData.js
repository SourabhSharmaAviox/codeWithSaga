import { useSelector } from "react-redux";

const SecretData = () => {
  const userName = useSelector((state) => state.Auth.userName);

  return (
    <>
      <div className="row">
        <div className="col-md-8 offset-2 mt-5">
          <div className={`card p-3 `}>
            <div className="card-title">
              <h5 className="text-danger">{`${userName} you are logged in `}</h5>
              <hr />
            </div>
            <div className="card-body ">
              <p>This is UserDetails page after login </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SecretData;
