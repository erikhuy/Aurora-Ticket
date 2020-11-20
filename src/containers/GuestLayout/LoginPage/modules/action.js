import {
  LOGIN_PAGE_REQUEST,
  LOGIN_PAGE_SUCCESS,
  LOGIN_PAGE_FAILED,
} from "./constant";
import Axios from "axios";

export const actLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        dispatch(actLoginSuccess(result.data));
        if (result.data.maLoaiNguoiDung === "QuanTri") {
          //Lưu trạng thái login
          localStorage.setItem("UserAdmin", JSON.stringify(result.data));
          //Chuyển đến trang dashboard
          history.push("/");
        } else {
          alert("K co quyen truy cap");
        }
      })
      .catch((err) => {
        dispatch(actLoginFailed(err));
      });
  };
};

const actLoginRequest = () => {
  return {
    type: LOGIN_PAGE_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: LOGIN_PAGE_SUCCESS,
    payload: data,
  };
};

const actLoginFailed = (err) => {
  return {
    type: LOGIN_PAGE_FAILED,
    payload: err,
  };
};
