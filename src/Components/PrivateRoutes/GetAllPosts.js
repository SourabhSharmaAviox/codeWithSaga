import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { AuthRemove } from "../../Redux/Actions/AuthAction";
import { GetAllPostaAction } from "../../Redux/Actions/PostActions";
import { ToastNotification } from "../../Shared/CommonFunctions";
import IndivualPost from "./IndivualPost";

const GetAllPost = () => {
  const dispatch = useDispatch();
  const All_Posts = useSelector((state) => state.Post.AllPosts);

  const getPosts =()=>{
    dispatch(
      GetAllPostaAction((message, type) => {
        //ToastNotification(message, type);
        if (type == "error") {
          dispatch(AuthRemove());
        }
      })
    );
  }

  useEffect(() => {
   getPosts();
  }, []);

  return (
    <>
      <div className="row">
        <IndivualPost refreshPosts={getPosts} posts={All_Posts} />
      </div>
      <ToastContainer />
    </>
  );
};

export default GetAllPost;
