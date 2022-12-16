import { useSelector } from "react-redux"


const Home =()=>{

    const isAuth = useSelector(state=>state.Auth.isAuth)
   return<>
        <div className="row">
            <div className="col-md-12">
                <div className="card m-4 p-3">

                <h3 className={`m-auto ${isAuth?" text-success":"text-danger"}`}>{ isAuth ?"Welcome to the home page" : "Please login for more features"}</h3>
                </div>
            </div>
        </div>
   </>
}

export default Home