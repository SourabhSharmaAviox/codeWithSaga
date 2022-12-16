import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { deletePostAction, updatePostAction } from "../../Redux/Actions/PostActions";
import { BaseUrl } from "../../Shared/ApiUrls";
import { ToastNotification } from "../../Shared/CommonFunctions";
import DeleteMessage from "../../Shared/DeleteMessage";
import Modall from "../../Shared/Modall";
import EditPost from "./EditPost";

const IndivualPost = ({ posts ,refreshPosts }) => {
  const dispatch = useDispatch();
  const [ModalOpen, SetModalOpen]= useState({
    status:false,
    actionType:""
  })

  const [postDetail, setPostDetail] = useState({});

  const ModalClose =()=>{
     SetModalOpen({actionType:null,status:!ModalOpen.status})
  }
  const handleModalOpen=(act,postt)=>{
    setPostDetail(postt)
    SetModalOpen({actionType:act,status:!ModalOpen.status})
  }

  const delteHandler =(delObj)=>{
    dispatch(deletePostAction(delObj.id,(message,type)=>{
      ToastNotification(message,type)
      refreshPosts();
    })) 

    ModalClose();
  }  

  const getUpdatedDataHandler=(formdata,id)=>{        
    dispatch(
      updatePostAction(formdata,id, (message, type) => {
      ToastNotification(message, type);
      refreshPosts();
    }))
    ModalClose();
  } 
  

  return (
    <>
       <Modall ModalOpen={ModalOpen} Cmp={ ModalOpen.actionType=="Delete"?  DeleteMessage:EditPost}  postDetail={postDetail} handleClose={ModalClose} delteHandler={delteHandler} getUpdatedDataHandler={getUpdatedDataHandler}/>
       
      {posts?.map((item) => {
        return (
          <div key={item.id} className="card offset-1 mt-2 border border-primary border-2" style={{maxWidth: "540px"}}>
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src={`${BaseUrl}${item.post_image}`}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">{item.title.toUpperCase()}</h5>
                  <p className="card-text">{item.content}</p>
                </div>
                <button  className="btn btn-success m-1" onClick={()=>handleModalOpen("Delete",item)}>Delete Post</button>
                <button  className="btn btn-success m-1" onClick={()=>handleModalOpen("Edit",item)}>Edit Post</button>
              </div>
            </div>
          </div>
        );
      })}
      <ToastContainer/>
    </>
  );
};

export default IndivualPost;
