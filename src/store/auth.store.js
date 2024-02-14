import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class AuthStore {

  isAuth = false;

  userData = {
    status: "",
    description: "",
    id: "",
    user_type: "",
    role_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    created_at: "",
    updated_at: ""
  };

  userRegisterData = {
    first_name: "",
    last_name: "",
    email: "",
  }
  
  userInfoRegisterData = {
    first_name: "",
    last_name: "",
    email: "",
  }

  userForgotPasswordData = {
    request_id: ""
  }

  userForgotPasswordInfoData = {
    email: ""
  }

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "auth",
      storage: window.localStorage,
      properties: ["isAuth", "userData", "userRegisterData", "userInfoRegisterData", "userForgotPasswordData", "userForgotPasswordInfoData"]
    });
  }

  updateUserData(data) {
    this.userData = data
  }

  registerData(data) {
    this.userRegisterData = data
  }

  registerInfoData(data) {
    this.userInfoRegisterData = data
  }
  
  forgotPasswordData(data) {
    this.userForgotPasswordData = data
  }

  forgotPasswordInfoData(data) {
    this.userForgotPasswordInfoData = data
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

