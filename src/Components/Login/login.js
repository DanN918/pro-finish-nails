import React, { useState } from "react";
import {
  Table,
  FormGroup,
  Input,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
  const [modal, setModal] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const submitHandler = (event) => {
    setModal(!modal);
  }
  return (
    <div>
      {/*       
      <Button>Log in</Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="userName"
              defaultValue="Username"
              ref={register({ required: true })}
            />
            <input
              name="passWord"
              defaultValue="Password"
              ref={register({ required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </form>
        </Fade>
      </Modal> */}
      <Button className=".addBtn" type="submit" onClick={submitHandler}>
        Log In
      </Button>
      <Modal isOpen={modal} toggle={submitHandler}>
        <ModalHeader >Log In Page</ModalHeader>
        <ModalBody>
          Please log in to access booking schedule.
          <form onSubmit={handleSubmit(onSubmit)}>
            <input name="username" defaultValue = "username" ref={register({required: true})}/>
            <br/>
            <input name="password" defaultValue = "password" ref={register({required: true})}/>
            <Button type="submit">Submit</Button>
            </form>
        </ModalBody>
        
      </Modal>
    </div>
  );
};

export default Login;
