import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React from "react";
import close from "../assets/close.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modall = ({ ModalOpen,postDetail, handleClose = () => {},delteHandler=()=>{},getUpdatedDataHandler=()=>{}, Cmp }) => {
  
  const handleCloseFn = () => {
    handleClose();
  };

  const SendDeltePostDetail=()=>{
      delteHandler(postDetail)
  }

  const getUpdatedData=(formdata ,id)=>{
    getUpdatedDataHandler(formdata,id)

  }

  return (
    <div>
      <Dialog
        fullScreen= {`${ModalOpen.actionType=="Edit"?"fullScreen":""}`}
        open={ModalOpen.status}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseFn}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="makefont1"  style={{ fontSize: "1rem",alignItem: "center", color: "green" }}>
          <Button className=" float-end" onClick={handleCloseFn}>
            <img src={close} alt="Err" width="15px" height="15px" />
          </Button>
        </DialogTitle>

        <DialogContent>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 ">
                <div className="mb-2 text-sm-start">
                  <Cmp getUpdatedData={getUpdatedData} PostDetails={postDetail} />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          {ModalOpen.actionType =="Delete"?<Button  onClick={SendDeltePostDetail} variant="outlined" size="large" className="btn btn-primary text-dark" >
            Delete
          </Button>:null}
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default Modall;
