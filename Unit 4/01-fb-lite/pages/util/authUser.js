import Router from "next/router";
import cookie from "js-cookie";


export const regexUsername = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;


export const setToken = (token) => {
  cookie.set("token", token);
  Router.push("/");
};

