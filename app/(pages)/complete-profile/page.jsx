"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import apiRequest from "@/utils/apiRequest";
import "./complete-profile.scss";
import auth from "@/utils/auth";

const CompleteProfileScreen = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const identifier = searchParams.get("identifier") || "";
  const isEmail = identifier.includes("@");
  const [name, setName] = useState("");
  const [alternate, setAlternate] = useState("");
  const token = auth()?.access_token;

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Dynamically import Bootstrap Modal only in browser
    import("bootstrap").then(({ Modal }) => {
      const modalEl = document.getElementById("profileModal");

      if (!modalEl) return;

      const modal = new Modal(modalEl, {
        backdrop: "static",
        keyboard: false,
      });
      modal.show();

      // define handler OUTSIDE to keep correct scope
      const handleModalClose = (e) => {
        if (!name.trim() || !alternate.trim()) {
          e.preventDefault?.();
          e.stopImmediatePropagation?.();
          return false;
        } else {
          router.push("/");
        }
      };

      modalEl.addEventListener("hide.bs.modal", handleModalClose);

      // Cleanup
      return () => {
        modalEl.removeEventListener("hide.bs.modal", handleModalClose);
        modal.hide();
        if (typeof document !== "undefined") {
          document.body.classList.remove("modal-open");
          document
            .querySelectorAll(".modal-backdrop")
            .forEach((el) => el.remove());
        }
      };
    });
  }, [name, alternate]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    if (!name.trim() || !alternate.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await apiRequest.updateProfile(
        {
          identifier,
          name,
          ...(isEmail ? { phone: alternate } : { email: alternate }),
        },
        token
      );

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
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content p-4">
          <div className="modal-body account-form-area">
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

                  <button
                    type="submit"
                    // disabled={!name.trim() || !alternate.trim()}
                    className="btn btn-primary w-100"
                  >
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
