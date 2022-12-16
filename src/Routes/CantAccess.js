const CantAccess = () => {
    return (
      <div className="row">
        <div className=" col-md-6 offset-2   mt-5">
          <div className="card p-3">
              <div className="card-title m-auto">
                  <h3 className="text-danger">You cant access this page right now!</h3>
              </div>
              <div className="card-body text-dark  m-auto">
                  <p>Something went Wrong!   </p>
              </div>
          </div>
         
        </div>
      </div>
    );
  };
  
  export default CantAccess;