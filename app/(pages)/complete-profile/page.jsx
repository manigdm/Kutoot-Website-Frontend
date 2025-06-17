"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import apiRequest from "@/utils/apiRequest";
import { Modal } from "bootstrap";
import "./complete-profile.scss";

const CompleteProfileScreen = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const identifier = searchParams.get("identifier") || "";
  const isEmail = identifier.includes("@");
  const [name, setName] = useState("");
  const [alternate, setAlternate] = useState("");

  useEffect(() => {
    const modalEl = document.getElementById("profileModal");

    if (modalEl) {
      const modal = new Modal(modalEl);
      modal.show();

      const handleModalClose = () => {
        router.push("/");
      };

      modalEl.addEventListener("hidden.bs.modal", handleModalClose);

      // Cleanup on unmount
      return () => {
        modalEl.removeEventListener("hidden.bs.modal", onModalHidden);
        modal.hide();
        document.body.classList.remove("modal-open");
        document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      };
    }
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await apiRequest.updateProfile({
        identifier,
        name,
        ...(isEmail ? { phone: alternate } : { email: alternate }),
      });

      toast.success("Profile updated");
      router.push("/");
    } catch (err) {
      toast.error("Update failed");
    }
  };

  return (
    <div
      className="modal fade"
      id="profileModal"
      tabIndex="-1"
      aria-labelledby="profileModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content p-4">
          <div className="modal-body account-form-area">
            <button
              type="button"
              className="close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="las la-times"></i>
            </button>
            <div className="modal-header">
              <h5 className="modal-title" id="profileModalLabel">
                Complete Your Profile
              </h5>
            </div>
            <div className="login">
              <div className="login__card">
                <form onSubmit={handleProfileUpdate}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type={isEmail ? "tel" : "email"}
                      className="form-control"
                      placeholder={isEmail ? "Phone Number" : "Email Address"}
                      value={alternate}
                      onChange={(e) => setAlternate(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfileScreen;
