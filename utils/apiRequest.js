/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + "api/",
  headers: {
    "content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});
export default {
  //authentication
  signup: (data) =>
    instance({
      method: "POST",
      url: "store-register",
      data,
    }),
  login: (data) =>
    instance({
      method: "POST",
      url: "store-login",
      data,
    }),
  logout: (token) =>
    instance({
      method: "get",
      url: `user/logout?token=${token}`,
    }),
  verification: (data, otp) =>
    instance({
      method: "GET",
      url: `user-verification/${otp}`,
      data,
    }),
  resend: (data) =>
    instance({
      method: "POST",
      url: `resend-register-code`,
      data,
    }),
  forgotPass: (data) =>
    instance({
      method: "POST",
      url: `send-forget-password`,
      data,
    }),
  updatePass: (data, token) =>
    instance({
      method: "POST",
      url: `user/update-password?token=${token}`,
      data,
    }),
  resetPass: (data, otp) =>
    instance({
      method: "POST",
      url: `store-reset-password/${otp}`,
      data,
    }),
  getCoinCampaigns: (type) =>
    instance({
      method: "GET",
      url: `coin-campaigns?type=${type}`,
    }),
  getCoinCampaignDetails: (param) =>
    instance({
      method: "GET",
      url: `coin-campaigns/details/${param}`,
    }),
  coinPurchase: (data, token) =>
    instance({
      method: "POST",
      url: `user/coinpurchase`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    

};
