import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const ToastNotification =(message,type)=>{
    toast[type](message, {
        position: toast.POSITION.TOP_CENTER,
      });
}