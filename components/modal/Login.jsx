'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";
import Social from "../social/Social";
import apiRequest from "../../utils/apiRequest";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false);

  const rememberMe = () => setChecked(!checked);

  const sendOtpHandler = () => {
    apiRequest
      .resend({ email })
      .then(() => router.push(`/verify-you?email=${email}`))
      .catch(console.error);
  };

  const doLogin = async () => {
    setLoading(true);
    try {
      const res = await apiRequest.login({ email, password });
      setLoading(false);
      toast.success("Login Successful");

      localStorage.setItem("auth", JSON.stringify(res.data));

      router.push("/");
    } catch (err) {
      setLoading(false);
      if (
        err?.response?.data?.notification?.includes("verify your acount")
      ) {
        toast.warn(
          <div>
            <p className="text-xs">Please verify your account.</p>
            <button onClick={sendOtpHandler} className="text-sm text-blue-500 font-bold mt-2">
              Send OTP
            </button>
          </div>,
          { autoClose: false, icon: false }
        );
      } else {
        toast.error("Invalid email or password");
      }
    }
  };

  return (
    <div className="container mt-80">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div className="modal-content">
            <div className="modal-body">
              <div className="account-form-area">
                {/* <button
                  type="button"
                  className="close-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="las la-times"></i>
                </button> */}
                <h3 className="title">Welcome Back</h3>
                <div className="account-form-wrapper">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      doLogin();
                    }}
                  >
                    <div className="form-group">
                      <label>
                        Email <sup>*</sup>
                      </label>
                      <input
                        type="email"
                        name="login_name"
                        id="login_name"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Password <sup>*</sup>
                      </label>
                      <input
                        type="password"
                        name="login_pass"
                        id="login_pass"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-2">
                      <div className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="remember"
                          checked={checked}
                          onChange={rememberMe}
                        />
                        <label htmlFor="remember">Remember Password</label>
                        <span className="checkbox"></span>
                      </div>
                      <a href="/forgot-password" className="link">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="form-group text-center mt-5">
                      <button type="submit" className="cmn-btn">
                        {loading ? "Logging in..." : "Log in"}
                      </button>
                    </div>
                  </form>
                  <p className="text-center mt-4">
                    Don&#39;t have an account?{" "}
                    <a
                      href="#0"
                      data-bs-toggle="modal"
                      data-bs-target="#signupModal"
                    >
                      Sign Up Now
                    </a>
                  </p>
                  <div className="divider">
                    <span>or</span>
                  </div>
                  <Social
                    items={[
                      [FaFacebookF, "/"],
                      [FaTwitter, "/"],
                      [FaGooglePlusG, "/"],
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default Login;