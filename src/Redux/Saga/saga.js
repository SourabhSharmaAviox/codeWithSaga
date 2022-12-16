import { put, takeLatest, all, call } from "redux-saga/effects";
import { ApiMethods, ApiUrls } from "../../Shared/ApiUrls";
import { ActionsObject } from "../Actions/ActionTypes";
import { AuthSet } from "../Actions/AuthAction";
import { StartLoader, StopLoader } from "../Actions/Loader";
import { SaveAllPostAction } from "../Actions/PostActions";
import Store from "../store";



function* postRegisterDataFn({ payload, callback }) {
  try {
    yield put(StartLoader());
    const response = yield fetch(ApiUrls.REGISTER_DATA, {
      method: ApiMethods.POST,
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    if(response.status == 201 || response.status == 200) {
      callback("You are succesfully registred", "success");
    } else if (response.status >= 400 || response.status <= 499) {
      callback("Username is Already registred", "info");
    }
  } catch (err) {
    console.log("errror", err);
    callback("Something went wrong", "error");
  } finally {
    yield put(StopLoader());
  }
}

function* postLoginDataFn({ payload, callback }) {
  try {
    yield put(StartLoader());
    const response = yield fetch(ApiUrls.LOGIN_DATA, {
      method: ApiMethods.POST,
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status == 201 || response.status == 200) {
      const res = yield response.json();
      callback("You are succesfully logged In", "success");

      delete payload.password;
      payload.token = res.Data.token.access;

      yield put(AuthSet(payload));
    } else if (response.status >= 400 || response.status <= 499) {
      callback("Username or password is wrong", "warn");
    }
  } catch (err) {
    console.log("errror", err);
    callback("Something went wrong", "error");
  } finally {
    yield put(StopLoader());
  }
}

function* postCreateFormDataFn({ payload, callback }) {
  try {
    yield put(StartLoader());
    const response = yield fetch(ApiUrls.CREATE_POST, {
      method: ApiMethods.POST,
      body: payload,
      headers: {
        Authorization: `Bearer ${Store?.getState()?.Auth?.isAuth}`,
      },
    });
    const res = yield response.json();
    if (response.status == 201 || response.status == 200) {
      callback("Post is created Succesfully", "success");
    } else if (response.status >= 400 || response.status <= 499) {
      callback(res.Message, "warn");
    } else {
      callback(res.Message, "warn");
    }
  } catch (err) {
    console.log("errror", err);
    callback("Something went wrong", "error");
  } finally {
    yield put(StopLoader());
  }
}

function* getAllPostFn({ callback }) {
  try {
    yield put(StartLoader());
    const response = yield fetch(ApiUrls.GET_ALL_POST, {
      method: ApiMethods.GET,
      headers: {
        Authorization: `Bearer ${Store?.getState()?.Auth?.isAuth}`,
      },
    });
    const res = yield response.json();

    if (response.status >= 200 || response.status <= 299) {
      callback(res.Message, "success");
      yield put(SaveAllPostAction(res.Data));
    } else if (response.status >= 400 || response.status <= 499) {
      callback(res.Message, "warn");
    } else {
      callback(res.Message, "warn");
    }
  } catch (err) {
    console.log("errror", err);
    callback("Something went wrong", "error");
  } finally {
    yield put(StopLoader());
  }
}

function* updatePostFn({ payload, id, callback }) {
  try {
    yield put(StartLoader());

    const response = yield fetch(`${ApiUrls.UPDATE_POST_API}${id}`, {
      method: ApiMethods.PATCH,
      body: payload,
      headers: {
        Authorization: `Bearer ${Store?.getState()?.Auth?.isAuth}`,
      },
    });
  
    const res = yield response.json();
    if (response.status >= 200 || response.status <= 299) {
      callback(res.Message, "success");
    } else if (response.status >= 400 || response.status <= 499) {
      callback(res.Message, "warn");
    } else {
      callback(res.Message, "warn");
    }
  } catch (err) {
    console.log("errror", err);
    callback("Something went wrong", "error");
  } finally {
    yield put(StopLoader());
  }
}

function* deletePostfn({ payload, callback }) {
  try {
    yield put(StartLoader());
    const response = yield fetch(`${ApiUrls.DELETE_POST_API}${payload}`, {
      method: ApiMethods.DELETE,
      headers: {
        Authorization: `Bearer ${Store?.getState()?.Auth?.isAuth}`,
      },
    });
    const res = yield response.json();
    if (response.status >= 200 || response.status <= 299) {
      callback(res.Message, "success");
    } else if (response.status >= 400 || response.status <= 499) {
      callback(res.Message, "warn");
    } else {
      callback(res.Message, "warn");
    }
  } catch (err) {
    console.log("errror", err);
    callback("Something went wrong", "error");
  } finally {
    yield put(StopLoader());
  }
}

export function* watcherFunction() {
  yield all([
    takeLatest(ActionsObject.POST_REGISTER_FORM_DATA, postRegisterDataFn),
    takeLatest(ActionsObject.POST_LOGIN_FORM_DATA, postLoginDataFn),
    takeLatest(ActionsObject.POST_CREATE_POST_FORMDATA, postCreateFormDataFn),
    takeLatest(ActionsObject.GET_ALL_POST, getAllPostFn),
    takeLatest(ActionsObject.UPDATE_POST, updatePostFn),
    takeLatest(ActionsObject.DELETE_POST, deletePostfn),
  ]);
}
