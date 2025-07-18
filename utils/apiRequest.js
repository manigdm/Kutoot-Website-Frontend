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
  loginTrigger: (data) =>
    instance({
      method: "POST",
      url: "logintrigger",
      data,
    }),

  verifyOtp: (data) =>
    instance({
      method: "POST",
      url: "verify-otp",
      data,
    }),

  updateProfile: (data, token) =>
    instance({
      method: "POST",
      url: "user/v1/update-profile",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
  getBasePlans: (id) =>
    instance({
      method: "GET",
      url: `baseplans?id=${id}`,
    }),

  purchaseDetails: (id, token) =>
    instance({
      method: "GET",
      url: `user/purchasedetails/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getHomepageDetails: (token) =>
    instance({
      method: "GET",
      url: `homepage`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  checkWinnerClaim: (token, data) =>
    instance({
      method: "POST",
      url: `user/checkwinnerclaim`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getWinnersList: (token) =>
    instance({
      method: "GET",
      url: `winners`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    verifyPaymentStatus: (data, token) => 
      instance({
      method: "POST",
      url: `user/payment_status`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
