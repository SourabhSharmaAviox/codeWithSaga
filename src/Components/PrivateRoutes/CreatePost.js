import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { postCreatePostFormData } from "../../Redux/Actions/PostActions";
import { ToastNotification } from "../../Shared/CommonFunctions";

const CreatePost = () => {
  const dispatch = useDispatch();
  const loader = useSelector(state=>state.Loader.loading)
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm();

  const submitHandler = (data) => {
    console.log(data,"data")
    const val = Object.values(data.postImage);
    console.log(val)
    const formData = new FormData();
    formData.append("title", data["title"]);
    formData.append("post_image", val[0]);
    formData.append("content", data["content"]);
    dispatch(
      postCreatePostFormData(formData, (message, type) => {
        ToastNotification(message, type);
        reset();
      })
    );
  };
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
                <input
                  placeholder="Select File"
                  className="form-control mt-2"
                  type="file"
                  {...register("postImage", { required: true , })}
                />
                {errors.postImage && (
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
                <button disabled={loader} className="btn btn-primary mt-2" type="submit">
                 { loader ? "Creating..." :"Create Post"}
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

export default CreatePost;
