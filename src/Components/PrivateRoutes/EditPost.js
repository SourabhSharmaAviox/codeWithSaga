import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { postCreatePostFormData, updatePostAction } from "../../Redux/Actions/PostActions";
import { BaseUrl } from "../../Shared/ApiUrls";
import { ToastNotification } from "../../Shared/CommonFunctions";

const EditPost = ({PostDetails ,getUpdatedData=()=>{}}) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },reset , watch, setValue
  } = useForm();


  const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
    });
  };

  function DataURIToBlob(dataURI) {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  }
  
  const submitHandler = (data) => {
    let filless
    getBase64FromUrl(`${BaseUrl}${data.post_image}`).then((res) => {
        let filless = DataURIToBlob(res);
    
    })
   
    const val = Object.values(data.post_image);      
     
    const formData = new FormData();
    formData.append("title", data["title"]);
    formData.append("post_image", data.post_image == PostDetails?.post_image ? filless :  val[0]  );
    formData.append("content", data["content"]);
    const id = PostDetails.id;
    getUpdatedData(formData,id)
    
  };

  
  

  
  useEffect(()=>{
  reset(PostDetails)
 
  },[PostDetails?.id])
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="row mt-3">
          <div className="col-md-8 offset-2">
            <div className="card">
              <div className="card-title m-auto text-primary ">
                <h4>CREATE POST</h4>
                <hr />
              </div>    
              <div className="card-body col-md-8 m-auto">
                <input
                  placeholder="Enter post title"
                  className=" form-control mt-2"
                  type="text"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <p className=" text-danger">Please fill this field.</p>
                )}

               {/*  <img className=" img-thumbnail" src={`${watch("post_image")&& BaseUrl+watch('post_image')}`}></img> */}
                <input
                  placeholder="Select File"
                  className="form-control mt-2"
                  type="file"
                   
                  {...register("post_image",{ required:true})}
                />
                {errors["post_image"] && (
                  <p className="text-danger"> Please select file</p>
                )}
                <input
                  placeholder="Please fill this field"
                  className="form-control mt-2"
                  type="text"
                  {...register("content", { required: true })}
                />
                {errors.content && (
                  <p className="text-danger"> Please fill this field.</p>
                )}
                <button className="btn btn-primary mt-2" type="submit">
                  Upate Post
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </form>
    </>
  );
};

export default EditPost;
