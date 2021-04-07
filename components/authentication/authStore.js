import { observable, makeAutoObservable } from "mobx";
import axios from "axios";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
}

const authStore = new AuthStore();

export default authStore;

signup = async (userData) => {
  try {
    await axios.post("http://localhost:8000/signup", userData);
  } catch (error) {
    console.log("AuthStore -> signup -> error", error);
  }
};
