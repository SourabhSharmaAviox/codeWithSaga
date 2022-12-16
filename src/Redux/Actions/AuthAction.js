import { ActionsObject } from "./ActionTypes";

export const AuthSet = (payload) => {
  return {
    type: ActionsObject.AUTH_SAVE,
    payload,
  };
};

export const AuthRemove = () => {
  return {
    type: ActionsObject.AUTH_REMOVE,
  };
};

export const GetRegisterFormData = (payload, callback) => {
  return {
    type: ActionsObject.POST_REGISTER_FORM_DATA,
    payload,
    callback,
  };
};

export const GetLoginFormData = (payload, callback) => {
  return {
    type: ActionsObject.POST_LOGIN_FORM_DATA,
    payload,
    callback,
  };
};
