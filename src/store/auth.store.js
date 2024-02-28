import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class AuthStore {

  isAuth = false;

  userData = {
    access_token: "",
    id: "",
    role_id: "",
    user_type: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: ""
  };

  userRegisterData = {
    request_id: "",
    first_name: "",
    last_name: "",
    email: ""
  }
  
  userInfoRegisterData = {
    data: "",
  }

  userResetPasswordData = {
    request_id: ""
  }

  userResetPasswordInfoData = {
    email: ""
  }

  newData = []
  
  userId = []

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "auth",
      storage: window.localStorage,
      properties: ["isAuth", "userData", "userRegisterData", "userInfoRegisterData", "userResetPasswordData", "userResetPasswordInfoData"]
    });
  }

  updateUserData(data) {
    this.userData = data
  }

  registerData(data) {
    this.userRegisterData = data
  }

  hasNewData(data) {
    this.newData = data
  }

  registerInfoData(data) {
    this.userInfoRegisterData = data
  }
  
  resetPasswordData(data) {
    this.userResetPasswordData = data
  }

  resetPasswordInfoData(data) {
    this.userResetPasswordInfoData = data
  }

  login() {
    this.isAuth = true;
  }

  register() {
    this.isAuth = true
  }

  logout() {
    this.isAuth = false;
  }

};

export const authStore = new AuthStore();

