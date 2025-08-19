"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";
import Coupons from "@/components/user/coupons";
import Mycampaigns from "./Mycampaigns";


const Myprofile = () => {
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [showCropModal, setShowCropModal] = useState(false);
  const [cropData, setCropData] = useState({
    x: 0,
    y: 0,
    width: 200,
    height: 200,
    scale: 1,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [logoutMsg, setLogoutMsg] = useState("");
  // State for form data
  const [formData, setFormData] = useState({
    identifier: "",
    name: "",
    gender: "",
    address: "",
    street: "",
    house_no: "",
    country_id: "",
    state_id: "",
    city_id: "",
    zip_code: "",
    phone: "",
    image: "",
  });
  const [croppedImage, setCroppedImage] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const storedUser = JSON.parse(localStorage.getItem("userData"));
  const [fileError, setFileError] = useState("");
  const token = storedUser?.access_token;
  // State for join date (simulating user join date)
  const [joinDate, setJoinDate] = useState("2nd May 2025");
  // State for view management: 'edit', 'saved', 'profile'
  const [viewMode, setViewMode] = useState("edit");
  // State for deactivate modal
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  // State for logout modal
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  // State for logout success modal
  const [showLogoutSuccessModal, setShowLogoutSuccessModal] = useState(false);
  // State for active tab
  const [activeTab, setActiveTab] = useState("profile");
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const fileInputRef = useRef(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `https://kutoot.bigome.com/api/user/my-profile?token=${token}`
        );
        const data = res.data;
        console.log("data related API response", data);
        setFormData({
          identifier: data?.personInfo?.email || "",
          name: data?.personInfo?.name || "",
          gender: "", // API has no gender
          address: data?.personInfo?.address || "",
          street: "", // not in API
          house_no: "", // not in API
          country_id: data?.personInfo?.country_id || "",
          state_id: data?.personInfo?.state_id || "",
          city_id: data?.personInfo?.city_id || "",
          zip_code: data?.personInfo?.zip_code || "",
          phone: data?.personInfo?.phone || "",
          image: data?.personInfo?.image || data?.defaultProfile?.image || "",
        });
        setCountries(data.countries || []);
        setStates(Array.isArray(data.states) ? data.states : []);
        setCities(Array.isArray(data.cities) ? data.cities : []);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    if (token) {
      fetchProfile();
    }
  }, [token]);

  // 1️⃣ Fetch all states on component mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await axios.get(
          "https://kutoot.bigome.com/api/user/state-by-country/1",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setStates(Array.isArray(res.data.states) ? res.data.states : []);
      } catch (err) {
        console.error("Error fetching states:", err);
      }
    };

    if (token) fetchStates();
  }, [token]);

  // 2️⃣ Handle state selection
  const handleStateChange = async (e) => {
    const stateId = e.target.value;
    setFormData({ ...formData, state_id: stateId, city_id: "" }); // reset city

    try {
      const res = await axios.get(
        `https://kutoot.bigome.com/api/user/city-by-state/${stateId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCities(Array.isArray(res.data.cities) ? res.data.cities : []);
    } catch (err) {
      console.error("Error fetching cities:", err);
      setCities([]);
    }
  };

  // Tab components
  const DashboardTab = () => (
    <div>
      my dashboard
    </div>
  );
  const CouponsTab = () => (
    <Coupons />
  );
  const CampaignsTab = () => (
    <Mycampaigns/>
  );
  const OrdersTab = () => (
    <div>
      <h2
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        My Orders
      </h2>
      <p>my orders</p>
    </div>
  );
  const InvoicesTab = () => (
    <div>
      <h2
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        My Invoices
      </h2>
      <p>my invoices</p>
    </div>
  );
  // Logout handlers
  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };
  const handleCloseLogoutModal = () => {
    setShowLogoutModal(false);
  };
  const handleConfirmLogout = async () => {
    // Add logout logic here
    try {
      const storedUser = JSON.parse(localStorage.getItem("userData"));
      if (!storedUser || !storedUser.access_token) {
        console.error("No user token found");
        return;
      }
      const token = storedUser.access_token;
      const response = await axios.get(
        "https://kutoot.bigome.com/api/user/logout",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setLogoutMsg(response.data.notification);
        localStorage.removeItem("userData");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
    setShowLogoutModal(false);
    setShowLogoutSuccessModal(true);
  };
  // Logout success handlers
  const handleCloseLogoutSuccessModal = () => {
    setShowLogoutSuccessModal(false);
    window.location.href = "/login";
  };
  const handleCloseLogoutSuccesslanding = () => {
    setShowLogoutSuccessModal(false);
    window.location.href = "/";
  }
  const styles = {
    container: {
      backgroundColor: "#FFFDF2",
      display: "flex",
      flexDirection: "column",
      gap: "26px",
      boxSizing: "border-box",
      padding: "20px",
      fontFamily: "Poppins",
      marginTop: "100px",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    goBackImage: {
      width: "81px",
      height: "18px",
      objectFit: "contain",
    },
    line: {
      width: "100%",
      height: "0px",
      borderTop: "2px solid #E6E6E6",
      transform: "rotate(0deg)",
      opacity: 1,
      margin: "0",
    },
    contentWrapper: {
      display: "flex",
      flexDirection: "row",
      gap: "26px",
      flex: 1,
    },
    leftSidebar: {
     
      height: "336px",
      display: "flex",
      flexDirection: "column",
     
    },
    myAccountHeader: {
      fontFamily: "Poppins",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "26px",
      letterSpacing: "0%",
      color: "#333333",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "18px",
      color: "#333333",
      cursor: "pointer",
      padding: "8px 0",
      width: "100%",
    },
    activeMenuItem: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "16px",
      color: "#000000", // Changed from orange to black
      fontWeight: "bold",
      paddingLeft: "13px",
      cursor: "pointer",
      padding: "8px 0",
      width: "100%",
    },
    menuItemIcon: {
      width: "16px",
      height: "16px",
      objectFit: "contain",
    },
    logoutButton: {
      marginTop: "auto",
      padding: "8px 16px",
      border: "1px solid #999999",
      borderRadius: "50px",
      background: "transparent",
      color: "#333333",
      cursor: "pointer",
      fontSize: "14px",
    },
    smallLine: {
      width: "100%",
      height: "0px",
      borderTop: "2px solid #E6E6E6",
      margin: "12px 0",
    },
    // Base right content style (for all tabs)
    baseRightContent: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    // Profile-specific right content style
    profileRightContent: {
      minHeight: "930px",
      borderRadius: "8px",
      padding: "12.01px 20.01px 12.01px 20.01px",
      background: "#FFFFFF",
      boxShadow: "0px 0px 30px 2px rgba(0, 0, 0, 0.05)",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    // Styles for the profile view (third frame)
    profileHeader: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginBottom: "24px",
    },
    profileImage: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #E6E6E6",
    },
    profileInfo: {
      display: "flex",
      flexDirection: "column",
    },
    profileName: {
      fontSize: "24px",
      fontWeight: "bold",
      margin: 0,
      color: "#333333",
    },
    profileJoinDate: {
      fontSize: "14px",
      color: "#666666",
      margin: "4px 0 0 0",
    },
    sectionHeader: {
      fontFamily: "Poppins",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "18px",
      letterSpacing: "0%",
      color: "#333333",
      marginBottom: "16px",
      marginTop: "24px",
    },
    infoGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      marginBottom: "16px",
    },
    infoItem: {
      display: "flex",
      flexDirection: "column",
    },
    infoLabel: {
      fontFamily: "Poppins",
      fontWeight: "700",
      fontSize: "12px",
      lineHeight: "12px",
      letterSpacing: "0%",
      color: "#999999",
      marginBottom: "8px",
    },
    infoValue: {
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20px",
      color: "#333333",
    },
    fullwidthItem: {
      gridColumn: "span 2",
    },
    deactivateButton: {
      borderRadius: "20px",
      border: "0.8px solid #828282",
      color: "#828282",
      fontFamily: "Poppins",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "14px",
      padding: "8px 16px",
      cursor: "pointer",
      marginTop: "32px",
      alignSelf: "flex-start",
      background: "transparent",
    },
    // Previous styles preserved for editing view
    profilePictureText: {
      fontFamily: "Poppins",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "18px",
      letterSpacing: "0%",
      color: "#333333",
    },
    uploadArea: {
      // width: "831px",
      height: "96px",
      padding: "0",
      border: croppedImage ? "1px solid #E6E6E6" : "1px dashed #999999",
      borderRadius: "12px",
      backgroundColor: "#F1F1F1CC",
      position: "relative",
      cursor: "pointer",
      transition: "all 0.2s ease",
      boxSizing: "border-box",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    uploadedImageContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      padding: "0 20px",
      boxSizing: "border-box",
      gap: "20px",
    },
    uploadedImage: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #E6E6E6",
      pointerEvents: "none",
    },
    uploadOverlay: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      cursor: "pointer",
      zIndex: "10",
      backgroundColor: "transparent",
    },
    uploadContent: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "4px",
      padding: "12px 20px",
      boxSizing: "border-box",
      zIndex: "5",
      pointerEvents: "none",
    },
    uploadIcon: {
      width: "20px",
      height: "20px",
      objectFit: "contain",
      marginBottom: "6px",
      pointerEvents: "none",
    },
    uploadTextBold: {
      fontWeight: "600",
      textDecoration: "underline",
      color: "#333333",
      pointerEvents: "none",
    },
    uploadCaption: {
      fontSize: "12px",
      color: "#999999",
      marginTop: "4px",
      pointerEvents: "none",
    },
    uploadTextContainer: {
      color: "#666666",
      fontSize: "14px",
      fontFamily: "Poppins, sans-serif",
      textAlign: "center",
      pointerEvents: "none",
    },
    uploadLine: {
      width: "100%",
      height: "0px",
      borderTop: "0.8px solid #E6E6E6",
      transform: "rotate(0deg)",
      opacity: 1,
      margin: "8px 0",
    },
    personalInfoText: {
      fontFamily: "Poppins",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "18px",
      letterSpacing: "0%",
      color: "#333333",
      marginBottom: "16px",
    },
    addressSectionText: {
      fontFamily: "Poppins",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "18px",
      letterSpacing: "0%",
      color: "#333333",
      marginBottom: "16px",
    },
    label: {
      fontFamily: "Poppins",
      fontWeight: "700",
      fontSize: "12px",
      lineHeight: "12px",
      letterSpacing: "0%",
      color: "#333333",
      display: "block",
      marginBottom: "8px",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      marginBottom: "16px",
      // flexWrap: "wrap",
    },
    inputField: {
      width: "490px",
      height: "50px",
      border: "1.06px solid #E6E6E6",
      borderRadius: "8px",
      padding: "16.88px 12.66px",
      background: "#FFFFFF",
      boxSizing: "border-box",
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "100%",
      letterSpacing: "0%",
      color: "#333333",
      outline: "none",
    },
    dropdown: {
      width: "490px",
      height: "50px",
      border: "1.06px solid #E6E6E6",
      borderRadius: "8px",
      padding: "16.88px 12.66px",
      background: "#FFFFFF",
      boxSizing: "border-box",
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "100%",
      letterSpacing: "0%",
      color: "#999999",
      outline: "none",
      appearance: "none",
      backgroundImage:
        'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 12px center",
      backgroundSize: "10px",
    },
    dropdownOption: {
      color: "#333333",
    },
    additionalLine: {
      width: "100%",
      height: "0px",
      borderTop: "1px solid #E6E6E6",
      margin: "8px 0",
    },
    saveChangesButtonContainer: {
      width: "160px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12.01px 20.01px",
      borderRadius: "20px",
      border: "0.8px solid #333333",
      background: "#FFFFFF",
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "0%",
      color: "#333333",
      cursor: "pointer",
      gap: "8px",
      marginLeft: "auto",
      marginTop: "20px",
    },
    saveChangesButtonText: {
      margin: 0,
      padding: 0,
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "0%",
      color: "#333333",
    },
    saveChangesButtonDot: {
      width: "4px",
      height: "4px",
      backgroundColor: "#3B322B",
      borderRadius: "50%",
      display: "inline-block",
    },
    orangeButton: {
      padding: "12px 24px",
      borderRadius: "20px",
      background: "#FF7F50",
      color: "#FFFFFF",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: "Poppins",
      marginLeft: "auto",
      marginTop: "20px",
    },
    hiddenInput: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      opacity: "0",
      cursor: "pointer",
      zIndex: "2",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "#FFFFFF",
      borderRadius: "12px",
      padding: "24px",
      width: "600px",
      maxWidth: "90vw",
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    modalHeader: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#333333",
      textAlign: "center",
    },
    cropContainer: {
      position: "relative",
      width: "500px",
      height: "400px",
      border: "1px solid #E6E6E6",
      borderRadius: "8px",
      overflow: "hidden",
      margin: "0 auto",
    },
    cropImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    cropOverlay: {
      position: "absolute",
      border: "2px solid #333333",
      borderRadius: "4px",
      cursor: "move",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    cropHandle: {
      position: "absolute",
      width: "12px",
      height: "12px",
      backgroundColor: "#333333",
      borderRadius: "50%",
      cursor: "se-resize",
      bottom: "-6px",
      right: "-6px",
    },
    modalButtons: {
      display: "flex",
      gap: "12px",
      justifyContent: "center",
    },
    modalButton: {
      padding: "12px 24px",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      border: "none",
      minWidth: "100px",
    },
    cancelButton: {
      backgroundColor: "#F1F1F1",
      color: "#333333",
    },
    confirmButton: {
      backgroundColor: "#333333",
      color: "#FFFFFF",
    },
    // Styles for the saved view (second frame)
    savedInfoContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      width: "100%",
      padding: "16px 0",
    },
    savedInfoItem: {
      display: "flex",
      flexDirection: "column",
    },
    savedInfoLabel: {
      fontWeight: "700",
      fontSize: "12px",
      color: "#999999",
    },
    savedInfoValue: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#333333",
    },
    buttonsContainer: {
      display: "flex",
      gap: "16px",
      justifyContent: "flex-start",
      marginTop: "16px",
    },
    actionButton: {
      padding: "10px 20px",
      borderRadius: "20px",
      border: "1px solid #333333",
      background: "transparent",
      color: "#333333",
      cursor: "pointer",
      fontSize: "14px",
    },
    editButton: {
      padding: "12px 24px",
      borderRadius: "20px",
      background: "#FF7F50",
      color: "#FFFFFF",
      cursor: "pointer",
      fontSize: "14px",
      marginLeft: "auto",
      marginTop: "20px",
    },
    profilePicActions: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    viewProfileButton: {
      background: "linear-gradient(90deg, #EA6B1E 0%, #901934 100%)",
      color: "white",
      border: "none",
      borderRadius: "20px",
      padding: "4px 16px",
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "13px",
      lineHeight: "16px",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      cursor: "pointer",
      marginLeft: "auto",
      marginTop: "20px",
    },
    arrow: {
      fontSize: "14px",
      marginRight: "4px",
    },
    dot: {
      fontSize: "14px",
      marginLeft: "4px",
    },
    // Deactivate Modal Styles
    deactivateModalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(5px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1001,
    },
    deactivateModal: {
      position: "relative",
      width: "741px",
      height: "340px",
      borderRadius: "16px",
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 0px 30px 2px rgba(0, 0, 0, 0.1)",
      display: "flex",
      overflow: "hidden",
    },
    deactivateModalLeft: {
      flex: "0 0 60%",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    deactivateModalRight: {
      flex: "0 0 40%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFDF2",
    },
    deactivateModalTitle: {
      color: "#3B322B",
      fontFamily: "Zurich Extra Black",
      fontSize: "44px",
      fontStyle: "normal",
      fontWeight: 900,
      lineHeight: "48px",
      letterSpacing: "-0.88px",
      marginBottom: "16px",
    },
    deactivateModalSubtitle: {
      color: "#3B322B",
      fontFamily: "Poppins",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "28px",
      marginBottom: "24px",
    },
    deactivateModalQuestion: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#333333",
      marginBottom: "32px",
    },
    deactivateModalButtons: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    deactivateModalButtonPrimary: {
      borderRadius: "20px",
      border: "0.8px solid #828282",
      color: "#828282",
      fontFamily: "Poppins",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "14px",
      padding: "8px 16px",
      cursor: "pointer",
      background: "transparent",
    },
    deactivateModalButtonSecondary: {
      width: "160px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12.01px 20.01px",
      borderRadius: "20px",
      border: "0.8px solid #333333",
      background: "#FFFFFF",
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "0%",
      color: "#333333",
      cursor: "pointer",
      gap: "8px",
    },
    deactivateModalCloseButton: {
      position: "absolute",
      top: "20px",
      right: "20px",
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      backgroundColor: "#F1F1F1",
      border: "none",
      color: "#333333",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    deactivateModalImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    // Updated styles based on the reference image
    deactivateModalContent: {
      width: "741px",
      height: "390px",
      borderRadius: "16px",
      backgroundColor: "#FFFFFF",
      position: "relative",
      display: "flex",
      overflow: "hidden",
    },
    deactivateModalTextSection: {
      flex: 1,
      padding: "60px 40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    deactivateModalImageSection: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    deactivateModalTitleRef: {
      color: "#3B322B",
      fontFamily: "Zurich Extra Black",
      fontSize: "44px",
      fontStyle: "normal",
      fontWeight: 900,
      lineHeight: "48px",
      letterSpacing: "-0.88px",
      marginBottom: "16px",
    },
    deactivateModalSubtitleRef: {
      color: "#3B322B",
      fontFamily: "Poppins",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "28px",
      marginBottom: "24px",
    },
    deactivateModalQuestionRef: {
      color: "#8E8E8E",
      fontFamily: "Poppins",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      marginBottom: "32px",
    },
    deactivateModalButtonsRef: {
      display: "flex",
      gap: "16px",
    },
    deactivateModalButtonCancel: {
      borderRadius: "20px",
      border: "0.8px solid #828282",
      color: "#828282",
      fontFamily: "Poppins",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "14px",
      background: "transparent",
      cursor: "pointer",
      width: "194px",
      height: "40px",
      padding: "12px 20px",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      gap: "8px",
    },
    deactivateModalButtonNevermind: {
      background: "linear-gradient(90deg, #EA6B1E 0%, #901934 100%)",
      color: "white",
      border: "none",
      borderRadius: "20px",
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "13px",
      lineHeight: "16px",
      cursor: "pointer",
      width: "194px",
      height: "40px",
      padding: "12px 20px",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      gap: "8px",
    },
    deactivateModalCloseButtonRef: {
      position: "absolute",
      top: "20px",
      right: "20px",
      width: "32px",
      height: "32px",
      border: "none",
      backgroundColor: "transparent",
      borderRadius: "50%",
      color: "#333333",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2,
    },
    deactivateModalIllustration: {
      width: "100%",
      height: "80%",
      objectFit: "contain",
    },
    // Logout Modal Styles - Updated with proper spacing and close button
    logoutModalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(7.5px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1002,
    },
    logoutModal: {
      position: "relative",
      width: "440px",
      height: "360px",
      borderRadius: "12px",
      border: "1px solid #EA6B1E",
      background: "#FFFDF2",
      backdropFilter: "blur(7.5px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      overflow: "hidden",
    },
    logoutModalIcon: {
      width: "64px",
      height: "64px",
      marginBottom: "24px",
      zIndex: 3,
    },
    logoutModalTitle: {
      color: "#3B322B",
      textAlign: "center",
      fontFamily: "Zurich Extra Black",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 900,
      lineHeight: "36px", /* 112.5% */
      letterSpacing: "-0.64px",
      marginBottom: "16px",
      zIndex: 3,
      maxWidth: "90%",
    },
    logoutModalMessage: {
      color: "#3B322B",
      fontFamily: "Poppins",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "26px", /* 130% */
      marginBottom: "40px",
      textAlign: "center",
      zIndex: 3,
      maxWidth: "80%",
    },
    logoutModalButtons: {
      display: "flex",
      gap: "24px",
      zIndex: 3,
    },
    logoutModalButton: {
      padding: "14px 32px",
      borderRadius: "20px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      border: "none",
      minWidth: "120px",
    },
    logoutConfirmButton: {
      borderRadius: "20px",
      border: "0.8px solid #3B322B",
      color: "#3B322B",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "14px", /* 87.5% */
      background: "transparent",
    },
    logoutCancelButton: {
      borderRadius: "20px",
      background: "#EA6B1E",
      color: "#FFF",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "16px", /* 100% */
      border: "none",
    },
    logoutModalCloseButton: {
      position: "absolute",
      top: "5px",
      right: "10px",
      width: "16px",
      height: "16px",
      fill: "#3B322B",
      strokeWidth: "0.7px",
      stroke: "#3B322B",
      flexShrink: 0,
      aspectRatio: "1/1",
      cursor: "pointer",
      zIndex: 4,
      background: "transparent",
      border: "none",
    },
    // Logout Success Modal Styles
    logoutSuccessModalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(7.5px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1003, // Higher than logout modal
    },
    logoutSuccessModal: {
      position: "relative",
      width: "440px",
      height: "360px",
      borderRadius: "12px",
      border: "1px solid #EA6B1E",
      background: "#FFFDF2",
      backdropFilter: "blur(7.5px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      overflow: "hidden",
    },
    logoutSuccessModalIcon: {
      width: "64px",
      height: "64px",
      marginBottom: "24px",
    },
    logoutSuccessModalTitle: {
      color: "#3B322B",
      textAlign: "center",
      fontFamily: "Zurich Extra Black",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 900,
      lineHeight: "36px", /* 112.5% */
      letterSpacing: "-0.64px",
      marginBottom: "40px",
      maxWidth: "90%",
    },
    logoutSuccessModalButton: {
      borderRadius: "20px",
      background: "#EA6B1E",
      color: "#FFF",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "16px", /* 100% */
      border: "none",
      padding: "14px 32px",
      cursor: "pointer",
    },
    logoutSuccessModalCloseButton: {
      position: "absolute",
      top: "5px",
      right: "10px",
      width: "16px",
      height: "16px",
      fill: "#3B322B",
      strokeWidth: "0.7px",
      stroke: "#3B322B",
      flexShrink: 0,
      aspectRatio: "1/1",
      cursor: "pointer",
      zIndex: 4,
      background: "transparent",
      border: "none",
    }
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    // Allowed formats
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

    // Validate type
    if (!allowedTypes.includes(selectedFile.type)) {
      setFileError("The image must be a file of type: jpg, jpeg, png.");
      return;
    }

    // Validate size (2MB = 2 * 1024 * 1024)
    if (selectedFile.size > 2 * 1024 * 1024) {
      setFileError("The image size must not be more than 2MB.");
      return;
    }

    // Clear error if valid
    setFileError("");
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (event) => {
      setPreviewImage(event.target.result);
      setShowCropModal(true);
    };
    reader.readAsDataURL(selectedFile);
  };
  const handleUploadAreaClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setFormErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      switch (field) {
        case "name":
          if (!value.trim()) newErrors.name = "Name is required";
          else delete newErrors.name;
          break;
        case "identifier":
          if (!value.trim()) newErrors.email = "Email is required";
          else if (!/^\S+@\S+\.\S+$/.test(value))
            newErrors.email = "Invalid email format";
          else delete newErrors.email;
          break;
        case "phone":
          if (!value.trim()) newErrors.phone = "Phone number is required";
          else if (!/^\d{10}$/.test(value))
            newErrors.phone = "Phone number must be 10 digits";
          else delete newErrors.phone;
          break;
        case "address":
          if (!value.trim()) newErrors.address = "Address is required";
          else delete newErrors.address;
          break;
        case "house_no":
          if (!value.trim()) newErrors.house_no = "House number is required";
          else delete newErrors.house_no;
          break;
        case "street":
          if (!value.trim()) newErrors.street = "Street is required";
          else delete newErrors.street;
          break;
        case "city_id":
          if (!value) newErrors.city_id = "Select a city";
          else delete newErrors.city_id;
          break;
        case "state_id":
          if (!value) newErrors.state_id = "Select a state";
          else delete newErrors.state_id;
          break;
        case "zip_code":
          if (!value.trim()) newErrors.zip_code = "Pin code is required";
          else delete newErrors.zip_code;
          break;
        case "country_id":
          if (!value) newErrors.country_id = "Select a country";
          else delete newErrors.country_id;
          break;
        default:
          break;
      }
      return newErrors;
    });
  };
  const handleCropMouseDown = useCallback(
    (e) => {
      if (e.target.classList.contains("crop-handle")) {
        setIsResizing(true);
        setResizeStart({
          x: e.clientX,
          y: e.clientY,
          width: cropData.width,
          height: cropData.height,
        });
      } else {
        setIsDragging(true);
        setDragStart({
          x: e.clientX - cropData.x,
          y: e.clientY - cropData.y,
        });
      }
      e.preventDefault();
    },
    [cropData]
  );
  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        const container = document.querySelector(".crop-container");
        if (container) {
          const rect = container.getBoundingClientRect();
          const newX = Math.max(
            0,
            Math.min(
              e.clientX - dragStart.x - rect.left,
              rect.width - cropData.width
            )
          );
          const newY = Math.max(
            0,
            Math.min(
              e.clientY - dragStart.y - rect.top,
              rect.height - cropData.height
            )
          );
          setCropData((prev) => ({ ...prev, x: newX, y: newY }));
        }
      } else if (isResizing) {
        const deltaX = e.clientX - resizeStart.x;
        const deltaY = e.clientY - resizeStart.y;
        const newWidth = Math.max(50, resizeStart.width + deltaX);
        const newHeight = Math.max(50, resizeStart.height + deltaY);
        const container = document.querySelector(".crop-container");
        if (container) {
          const rect = container.getBoundingClientRect();
          const maxWidth = rect.width - cropData.x;
          const maxHeight = rect.height - cropData.y;
          setCropData((prev) => ({
            ...prev,
            width: Math.min(newWidth, maxWidth),
            height: Math.min(newHeight, maxHeight),
          }));
        }
      }
    },
    [isDragging, isResizing, dragStart, resizeStart, cropData]
  );
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsResizing(false);
  }, []);
  React.useEffect(() => {
    if (showCropModal) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [showCropModal, handleMouseMove, handleMouseUp]);
  const cropImage = () => {
    const canvas = canvasRef.current;
    const img = imageRef.current;
    if (canvas && img) {
      const ctx = canvas.getContext("2d");
      const container = document.querySelector(".crop-container");
      const rect = container.getBoundingClientRect();
      const scaleX = img.naturalWidth / rect.width;
      const scaleY = img.naturalHeight / rect.height;
      canvas.width = cropData.width;
      canvas.height = cropData.height;
      ctx.drawImage(
        img,
        cropData.x * scaleX,
        cropData.y * scaleY,
        cropData.width * scaleX,
        cropData.height * scaleY,
        0,
        0,
        cropData.width,
        cropData.height
      );
      const croppedDataUrl = canvas.toDataURL("image/jpeg", 0.9);
      setCroppedImage(croppedDataUrl);
      setShowCropModal(false);
    }
  };
  const handleSaveChanges = async () => {
    if (validateForm()) {
      console.log("Form data ready to submit:", formData);
    }
    try {
      const storedUser = JSON.parse(localStorage.getItem("userData"));
      const token = storedUser?.access_token;
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }
      const payload = {
        name: formData.name,
        identifier: formData.identifier,
        gender: formData.gender,
        phone: formData.phone,
        address: formData.address,
        house_no: formData.house_no,
        street: formData.street,
        country_id: formData.country_id,
        state_id: formData.state_id,
        city_id: formData.city_id,
        zip_code: formData.zip_code,
        image: croppedImage || formData.image,
      };
      const res = await axios.post(
        `https://kutoot.bigome.com/api/user/v2/update-profile`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Update profile response:", res.data);
      if (res.data.success) {
        alert("Profile updated successfully!");
        setViewMode("saved");
      } else {
        alert("Failed to update profile..");
        // + (res.data.message || "")
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        alert(err.response.data.message || "Validation error")
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
      console.error("Error updating profile:", err);
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.identifier.trim()) errors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.identifier))
      errors.email = "Invalid email format";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      errors.phone = "Phone number must be 10 digits";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.house_no.trim()) errors.house_no = "House number is required";
    if (!formData.street.trim()) errors.street = "Street is required";
    if (!formData.city_id) errors.city_id = "Select a city";
    if (!formData.state_id) errors.state_id = "Select a state";
    if (!formData.zip_code.trim()) errors.zip_code = "Pin code is required";
    if (!formData.country_id) errors.country_id = "Select a country";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isFormValid =
    Object.keys(formErrors).length === 0 &&
    formData.name &&
    formData.identifier &&
    formData.phone &&
    formData.address &&
    formData.house_no &&
    formData.street &&
    formData.city_id &&
    formData.state_id &&
    formData.zip_code &&
    formData.country_id;

  const handleRemoveImage = () => {
    setCroppedImage(null);
    setFile(null);
    setPreviewImage(null);
  };
  const handleChangeImage = () => {
    handleUploadAreaClick();
  };
  const handleDeactivateAccount = () => {
    setShowDeactivateModal(true);
  };
  const handleCloseDeactivateModal = () => {
    setShowDeactivateModal(false);
  };
  // First frame: Edit form
  const renderEditView = () => (
    <>
      <h3 style={styles.profilePictureText}>Profile picture*</h3>
      <div
        className="upload-area"
        style={{
          ...styles.uploadArea,
          cursor: "pointer",
        }}
        onClick={handleUploadAreaClick}
        title="Click to upload file"
      >
        <input
          type="file"
          id="profile-picture-upload"
          ref={fileInputRef}
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {croppedImage ? (
          <div style={styles.uploadedImageContainer}>
            <img
              src={croppedImage}
              alt="Profile"
              style={styles.uploadedImage}
            />
            <div style={styles.profilePicActions}>
              <button
                style={styles.actionButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveImage();
                }}
              >
                Remove
              </button>
              <button
                style={styles.actionButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleChangeImage();
                }}
              >
                Change
              </button>
            </div>
          </div>
        ) : (
          <>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 10,
              }}
            />
            <div className="upload-content" style={styles.uploadContent}>
              <img
                src="/images/myprofile/upload-icon.png"
                alt="Upload"
                style={styles.uploadIcon}
              />
              <div style={styles.uploadTextContainer}>
                <span style={styles.uploadTextBold}>Click to upload</span> or
                drag and drop
              </div>
              <div style={styles.uploadCaption}>Max. file size: 10MB</div>
            </div>
          </>
        )}
      </div>
      {fileError && (
        <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
          {fileError}
        </div>
      )}
      <div style={styles.uploadLine}></div>
      <h3 style={styles.personalInfoText}>Personal information</h3>
      <div style={styles.inputContainer}>
        <div>
          <label style={styles.label}>User name*</label>
          <input
            type="text"
            placeholder="Enter user name"
            style={styles.inputField}
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          {formErrors.name && (
            <div style={{ color: "red", fontSize: "14px" }}>{formErrors.name}</div>
          )}
        </div>
        <div>
          <label style={styles.label}>Gender*</label>
          <select
            style={styles.dropdown}
            value={formData.gender}
            onChange={(e) => handleInputChange("gender", e.target.value)}
          >
            <option value="" disabled hidden>
              Choose gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div style={styles.inputContainer}>
        <div>
          <label style={styles.label}>Email ID*</label>
          <input
            type="email"
            placeholder="Enter email ID"
            style={styles.inputField}
            value={formData.identifier}
            onChange={(e) => handleInputChange("identifier", e.target.value)}
          />
          {formErrors.email && (
            <div style={{ color: "red", fontSize: "14px" }}>{formErrors.email}</div>
          )}
        </div>
        <div>
          <label style={styles.label}>Mobile number*</label>
          <input
            type="tel"
            placeholder="Enter mobile number"
            style={styles.inputField}
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
          {formErrors.phone && (
            <div style={{ color: "red", fontSize: "14px" }}>{formErrors.phone}</div>
          )}
        </div>
      </div>
      <div style={styles.additionalLine}></div>
      <h3 style={styles.addressSectionText}>Address</h3>
      <div style={styles.inputContainer}>
        <div style={{ width: "100%" }}>
          <label style={styles.label}>Address*</label>
          <input
            type="text"
            placeholder="Enter address"
            style={{ ...styles.inputField, width: "100%" }}
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
          />
          {formErrors.address && (
            <div style={{ color: "red", fontSize: "14px" }}>{formErrors.address}</div>
          )}
        </div>
      </div>
      <div style={styles.inputContainer}>
        <div>
          <label style={styles.label}>House number*</label>
          <input
            type="text"
            placeholder="Enter house number"
            style={styles.inputField}
            value={formData.house_no}
            onChange={(e) => handleInputChange("house_no", e.target.value)}
          />
          {formErrors.house_no && (
            <div style={{ color: "red", fontSize: "14px" }}>{formErrors.house_no}</div>
          )}
        </div>
        <div>
          <label style={styles.label}>Street*</label>
          <input
            type="text"
            placeholder="Enter street name"
            style={styles.inputField}
            value={formData.street}
            onChange={(e) => handleInputChange("street", e.target.value)}
          />
          {formErrors.street && (
            <div style={{ color: "red", fontSize: "14px" }}>{formErrors.street}</div>
          )}
        </div>
      </div>
      <div style={styles.inputContainer}>
        <div>
          <label style={styles.label}>State*</label>
          <select
            style={styles.dropdown}
            value={formData.state_id}
            onChange={handleStateChange}
          >
            <option value="" disabled hidden>Select state</option>
            {states.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label style={styles.label}>City*</label>
          <select
            style={styles.dropdown}
            value={formData.city_id}
            onChange={(e) => setFormData({ ...formData, city_id: e.target.value })}
            disabled={!formData.state_id}
          >
            <option value="" disabled hidden>Select city</option>
            {cities.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div style={styles.inputContainer}>
        <div>
          <label style={styles.label}>Pin code*</label>
          <input
            type="text"
            placeholder="Enter pin code"
            style={styles.inputField}
            value={formData.zip_code}
            onChange={(e) => handleInputChange("zip_code", e.target.value)}
          />
          {formErrors.zip_code && (
            <div style={{ color: "red", fontSize: "14px" }}>{formErrors.zip_code}</div>
          )}
        </div>
        <div>
          <label style={styles.label}>Country of residence*</label>
          <select
            style={styles.dropdown}
            value={formData.country_id}
            onChange={(e) => handleInputChange("country_id", e.target.value)}
          >
            {formErrors.country_id && (
              <div style={{ color: "red", fontSize: "14px" }}>{formErrors.country_id}</div>
            )}
            <option value="" disabled hidden>Select country</option>
            {countries.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div style={styles.additionalLine}></div>
      <button
        style={styles.saveChangesButtonContainer}
        onClick={handleSaveChanges}
      >
        <span style={styles.saveChangesButtonText}>Save Changes</span>
        <div style={styles.saveChangesButtonDot}></div>
      </button>
    </>
  );
  // Second frame: Saved data view
  const renderSavedView = () => (
    <>
      <h3 style={styles.profilePictureText}>Profile picture</h3>
      <div
        style={{
          ...styles.uploadArea,
          border: "1px solid #E6E6E6",
          backgroundColor: "#FFFFFF",
        }}
      >
        {croppedImage ? (
          <div style={styles.uploadedImageContainer}>
            <img
              src={croppedImage}
              alt="Profile"
              style={{
                ...styles.uploadedImage,
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              }}
            />
            <div style={styles.profilePicActions}>
              <button style={styles.actionButton} onClick={handleRemoveImage}>
                Remove
              </button>
              <button style={styles.actionButton} onClick={handleChangeImage}>
                Change
              </button>
            </div>
          </div>
        ) : (
          <div
            style={{
              ...styles.uploadContent,
              justifyContent: "flex-start",
              paddingLeft: 20,
            }}
          >
            <span style={{ fontSize: "14px", color: "#999999" }}>
              No profile picture uploaded
            </span>
          </div>
        )}
      </div>
      <div style={styles.uploadLine}></div>
      <h3 style={styles.personalInfoText}>Personal information</h3>
      <div style={styles.savedInfoContainer}>
        <div style={styles.inputContainer}>
          <div style={styles.savedInfoItem}>
            <label style={styles.savedInfoLabel}>User name</label>
            <div style={styles.inputField}>
              {formData.username || "Not provided"}
            </div>
          </div>
          <div style={styles.savedInfoItem}>
            <label style={styles.savedInfoLabel}>Gender</label>
            <div style={styles.inputField}>
              {formData.gender || "Not provided"}
            </div>
          </div>
        </div>
        <div style={styles.inputContainer}>
          <div style={styles.savedInfoItem}>
            <label style={styles.savedInfoLabel}>Email ID</label>
            <div style={styles.inputField}>
              {formData.email || "Not provided"}
            </div>
          </div>
          <div style={styles.savedInfoItem}>
            <label style={styles.savedInfoLabel}>Mobile number</label>
            <div style={styles.inputField}>
              {formData.mobile || "Not provided"}
            </div>
          </div>
        </div>
      </div>
      <div style={styles.additionalLine}></div>
      <h3 style={styles.addressSectionText}>Address</h3>
      <div style={styles.savedInfoContainer}>
        <div style={styles.savedInfoItem}>
          <label style={styles.savedInfoLabel}>Address</label>
          <div style={{ ...styles.inputField, width: "830px" }}>
            {formData.address || "Not provided"}
          </div>
        </div>
        <div style={styles.inputContainer}>
          <div style={styles.savedInfoItem}>
            <label style={styles.savedInfoLabel}>House number</label>
            <div style={styles.inputField}>
              {formData.houseNumber || "Not provided"}
            </div>
          </div>
          <div style={styles.savedInfoItem}>
            <label style={styles.savedInfoLabel}>Street</label>
            <div style={styles.inputField}>
              {formData.street || "Not provided"}
            </div>
          </div>
        </div>
        <div style={styles.inputContainer}>
          <div style={styles.savedInfoItem}>
            <label style={styles.savedInfoLabel}>City</label>
            <div style={styles.inputField}>
              {formData.city || "Not provided"}
            </div>
          </div>
          <div style={styles.savedInfoItem}>
            <label style={styles.savedInfoLabel}>State</label>
            <div style={styles.inputField}>
              {formData.state || "Not provided"}
            </div>
          </div>
        </div>
        <div style={styles.inputContainer}>
          <div style={styles.savedInfoItem}>
            <label style={styles.savedInfoLabel}>Pin code</label>
            <div style={styles.inputField}>
              {formData.pinCode || "Not provided"}
            </div>
          </div>
          <div style={styles.savedInfoItem}>
            <label style={styles.savedInfoLabel}>Country of residence</label>
            <div style={styles.inputField}>
              {formData.country || "Not provided"}
            </div>
          </div>
        </div>
      </div>
      <button
        style={styles.viewProfileButton}
        onClick={() => setViewMode("profile")}
        disabled={!isFormValid}
      >
        <span style={styles.arrow}>&#8594;</span> Save Changes{" "}
        <span style={styles.dot}>•</span>
      </button>
    </>
  );
  // Third frame: Profile view that matches the screenshot
  const renderProfileView = () => (
    <>
      <div style={styles.profileHeader}>
        <img
          src={croppedImage || "/images/myprofile/default-avatar.png"}
          alt="Profile"
          style={styles.profileImage}
        />
        <div style={styles.profileInfo}>
          <h2 style={styles.profileName}>{formData.username}</h2>
          <p style={styles.profileJoinDate}>Joined {joinDate}</p>
        </div>
      </div>
      <div style={styles.additionalLine}></div>
      <h3 style={styles.sectionHeader}>Personal Information</h3>
      <div style={styles.infoGrid}>
        <div style={styles.infoItem}>
          <label style={styles.infoLabel}>User name</label>
          <div style={styles.infoValue}>
            {formData.username || "Not provided"}
          </div>
        </div>
        <div style={styles.infoItem}>
          <label style={styles.infoLabel}>Gender</label>
          <div style={styles.infoValue}>
            {formData.gender || "Not provided"}
          </div>
        </div>
        <div style={styles.infoItem}>
          <label style={styles.infoLabel}>Email ID</label>
          <div style={styles.infoValue}>{formData.email || "Not provided"}</div>
        </div>
        <div style={styles.infoItem}>
          <label style={styles.infoLabel}>Mobile number</label>
          <div style={styles.infoValue}>
            {formData.mobile || "Not provided"}
          </div>
        </div>
      </div>
      <div style={styles.additionalLine}></div>
      <h3 style={styles.sectionHeader}>Address</h3>
      <div style={styles.infoGrid}>
        <div style={{ ...styles.infoItem, ...styles.fullwidthItem }}>
          <label style={styles.infoLabel}>Address</label>
          <div style={styles.infoValue}>
            {formData.address || "Not provided"}
          </div>
        </div>
        <div style={styles.infoItem}>
          <label style={styles.infoLabel}>House number</label>
          <div style={styles.infoValue}>
            {formData.houseNumber || "Not provided"}
          </div>
        </div>
        <div style={styles.infoItem}>
          <label style={styles.infoLabel}>Street</label>
          <div style={styles.infoValue}>
            {formData.street || "Not provided"}
          </div>
        </div>
        <div style={styles.infoItem}>
          <label style={styles.infoLabel}>City</label>
          <div style={styles.infoValue}>{formData.city || "Not provided"}</div>
        </div>
        <div style={styles.infoItem}>
          <label style={styles.infoLabel}>State</label>
          <div style={styles.infoValue}>{formData.state || "Not provided"}</div>
        </div>
        <div style={styles.infoItem}>
          <label style={styles.infoLabel}>Pin Code</label>
          <div style={styles.infoValue}>{formData.state || "Not provided"}</div>
        </div>
        <div style={styles.infoItem}>
          <label style={styles.infoLabel}>Country of residence</label>
          <div style={styles.infoValue}>
            {formData.country || "Not provided"}
          </div>
        </div>
      </div>
      <div style={styles.additionalLine}></div>
      <button style={styles.deactivateButton} onClick={handleDeactivateAccount}>
        Deactivate account
      </button>
    </>
  );
  // Deactivate Account Modal - Updated to match reference image
  const renderDeactivateModal = () => (
    <div style={styles.deactivateModalOverlay}>
      <div style={styles.deactivateModalContent}>
        <button
          style={styles.deactivateModalCloseButtonRef}
          onClick={handleCloseDeactivateModal}
        >
          ✕
        </button>
        <div style={styles.deactivateModalTextSection}>
          <h2 style={styles.deactivateModalTitleRef}>
            So sorry to see <br /> you go!
          </h2>
          <p style={styles.deactivateModalSubtitleRef}>
            You will miss out on <br /> exciting prizes
          </p>
          <p style={styles.deactivateModalQuestionRef}>
            Are you sure you want to <br /> deactivate your account?
          </p>
          <div style={styles.deactivateModalButtonsRef}>
            <button
              style={styles.deactivateModalButtonCancel}
              onClick={handleCloseDeactivateModal}
            >
              No thanks, I want to cancel
            </button>
            <button
              style={styles.deactivateModalButtonNevermind}
              onClick={() => setViewMode("profile")}
            >
              <span style={styles.arrow}>&#8594;</span>
              <span style={{ color: "#FFFFFF", fontWeight: 600 }}>
                Nevermind
              </span>
              <span style={styles.dot}>•</span>
            </button>
          </div>
        </div>
        <div style={styles.deactivateModalImageSection}>
          <img
            src="/images/myprofile/deactivate.png"
            alt="Deactivate Account Illustration"
            style={styles.deactivateModalIllustration}
          />
        </div>
      </div>
    </div>
  );
  // Logout Modal - Updated to match the second image
  const renderLogoutModal = () => (
    <div style={styles.logoutModalOverlay}>
      <div style={styles.logoutModal}>
        {/* Orange background image - now visible behind the frame */}
        <img
          src="/images/myprofile/rectangle-logout.png"
          alt="Logout Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "752px",
            height: "403px",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
        {/* Modal content positioned correctly */}
        <div style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "16px",
          boxSizing: "border-box",
          borderRadius: "12px",
          border: "1px solid #EA6B1E",
          background: "rgba(255, 253, 242, 0.8)", // Semi-transparent background
          backdropFilter: "blur(7.5px)",
        }}>
          {/* Close button */}
          <button
            style={styles.logoutModalCloseButton}
            onClick={handleCloseLogoutModal}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12M4 4L12 12" stroke="#3B322B" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {/* Icon */}
          <div style={{ position: "relative", zIndex: 3 }}>
            <img
              src="/images/myprofile/logout-icon.png" // Orange circular icon with arrow
              alt="Logout Warning"
              style={styles.logoutModalIcon}
            />
          </div>
          {/* Title */}
          <h2 style={styles.logoutModalTitle}>Oh no! You are leaving.. Are you sure?</h2>
          {/* Message */}
          <p style={styles.logoutModalMessage}>Are you sure you want to log out?</p>
          {/* Buttons */}
          <div style={styles.logoutModalButtons}>
            <button
              style={{ ...styles.logoutModalButton, ...styles.logoutConfirmButton }}
              onClick={handleConfirmLogout}
            >
              Log out
            </button>
            <button
              style={{ ...styles.logoutModalButton, ...styles.logoutCancelButton }}
              onClick={handleCloseLogoutModal}
            >
              Cancel .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  // Logout Success Modal - Shows after successful logout
  const renderLogoutSuccessModal = () => (
    <div style={styles.logoutSuccessModalOverlay}>
      <div style={styles.logoutSuccessModal}>
        {/* Orange background image */}
        <img
          src="/images/myprofile/rectangle-logout.png"
          alt="Logout Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
        {/* Modal content */}
        <div style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "16px",
          boxSizing: "border-box",
          borderRadius: "12px",
          border: "1px solid #EA6B1E",
          background: "rgba(255, 253, 242, 0.8)",
          backdropFilter: "blur(7.5px)",
        }}>
          {/* Close button */}
          <button
            style={styles.logoutSuccessModalCloseButton}
            onClick={handleCloseLogoutSuccesslanding}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12M4 4L12 12" stroke="#3B322B" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {/* Success icon */}
          <img
            src="/images/myprofile/logout-success-icon.png"
            alt="Logout Success"
            style={styles.logoutSuccessModalIcon}
          />
          {/* Success message */}
          <h2 style={styles.logoutSuccessModalTitle}>{logoutMsg}</h2>
          {/* Back to login button */}
          <button
            style={styles.logoutSuccessModalButton}
            onClick={handleCloseLogoutSuccessModal}
          >
            Back to login .
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <style jsx global>{`
        * {
          color: #333333;
        }
        *:focus {
          outline: none !important;
          box-shadow: none !important;
        }
        input, select, textarea {
          -webkit-tap-highlight-color: transparent;
          color: #333333 !important;
        }
        input::placeholder {
          color: #999999 !important;
          opacity: 1 !important;
        }
        select option {
          color: #333333 !important;
          background: #FFFFFF !important;
        }
        select:invalid {
          color: #999999;
        }
        select:focus {
          color: #333333;
        }
        .upload-area {
          cursor: pointer !important;
        }
        .upload-area:hover {
          background-color: #E8E8E8CC !important;
          border-color: #666666 !important;
        }
        .upload-overlay {
          cursor: "pointer" !important;
        }
        .upload-content * {
          pointer-events: none !important;
          user-select: none !important;
        }
      `}</style>
      <div className="container">
        <div style={styles.container}>
          <div style={styles.header}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
              onClick={() => window.history.back()}
            >
              <img
                src="/images/myprofile/gobackk.png"
                alt="Go Back"
                style={{
                  width: "16px",
                  height: "16px",
                }}
              />
              <p
                style={{
                  margin: 0,
                  color: "#3B322B",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "18px",
                }}
              >
                Go back
              </p>
            </button>
          </div>
          <div style={styles.line}></div>
          <div style={styles.contentWrapper}>
            <div style={styles.leftSidebar}>
              <div style={styles.myAccountHeader}>My Account</div>
              {/* Profile Tab */}
              <div
                style={
                  activeTab === "profile"
                    ? styles.activeMenuItem
                    : styles.menuItem
                }
                onClick={() => setActiveTab("profile")}
              >
                <img
                  src="/images/myprofile/pic2.png"
                  alt="Profile Icon"
                  style={styles.menuItemIcon}
                />
                My Profile
              </div>
              {/* Dashboard Tab */}
              <div
                style={
                  activeTab === "dashboard"
                    ? styles.activeMenuItem
                    : styles.menuItem
                }
                onClick={() => setActiveTab("dashboard")}
              >
                <img
                  src="/images/myprofile/pic1.png"
                  alt="Dashboard Icon"
                  style={styles.menuItemIcon}
                />
                My Dashboard
              </div>
              {/* Coupons Tab */}
              <div
                style={
                  activeTab === "coupons"
                    ? styles.activeMenuItem
                    : styles.menuItem
                }
                onClick={() => setActiveTab("coupons")}
              >
                <img
                  src="/images/myprofile/pic1.png"
                  alt="Coupons Icon"
                  style={styles.menuItemIcon}
                />
                My Coupons
              </div>
              {/* Campaigns Tab */}
              <div
                style={
                  activeTab === "campaigns"
                    ? styles.activeMenuItem
                    : styles.menuItem
                }
                onClick={() => setActiveTab("campaigns")}
              >
                <img
                  src="/images/myprofile/pic3.png"
                  alt="Campaigns Icon"
                  style={styles.menuItemIcon}
                />
                My Campaigns
              </div>
              {/* Orders Tab */}
              <div
                style={
                  activeTab === "orders"
                    ? styles.activeMenuItem
                    : styles.menuItem
                }
                onClick={() => setActiveTab("orders")}
              >
                <img
                  src="/images/myprofile/pic4.png"
                  alt="Orders Icon"
                  style={styles.menuItemIcon}
                />
                My Orders
              </div>
              {/* Invoices Tab */}
              <div
                style={
                  activeTab === "invoices"
                    ? styles.activeMenuItem
                    : styles.menuItem
                }
                onClick={() => setActiveTab("invoices")}
              >
                <img
                  src="/images/myprofile/pic5.png"
                  alt="Invoices Icon"
                  style={styles.menuItemIcon}
                />
                My Invoices
              </div>
              <div style={styles.smallLine}></div>
              <button style={styles.logoutButton} onClick={handleLogoutClick}>Log out</button>
            </div>
            {/* Conditionally apply styles based on active tab */}
            <div style={activeTab === 'profile' ? styles.profileRightContent : styles.baseRightContent}>
              {/* Render content based on active tab */}
              {activeTab === "dashboard" && <DashboardTab />}
              {activeTab === "coupons" && <CouponsTab />}
              {activeTab === "profile" && (
                <>
                  {viewMode === "edit" && renderEditView()}
                  {viewMode === "saved" && renderSavedView()}
                  {viewMode === "profile" && renderProfileView()}
                </>
              )}
              {activeTab === "campaigns" && <CampaignsTab />}
              {activeTab === "orders" && <OrdersTab />}
              {activeTab === "invoices" && <InvoicesTab />}
            </div>
          </div>
        </div>
      </div>
      {/* Image Cropping Modal */}
      {showCropModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3 style={styles.modalHeader}>Crop Your Profile Picture</h3>
            <div style={styles.cropContainer} className="crop-container">
              <img
                ref={imageRef}
                src={previewImage}
                alt="Preview"
                style={styles.cropImage}
                draggable={false}
              />
              <div
                style={{
                  ...styles.cropOverlay,
                  left: `${cropData.x}px`,
                  top: `${cropData.y}px`,
                  width: `${cropData.width}px`,
                  height: `${cropData.height}px`,
                }}
                onMouseDown={handleCropMouseDown}
              >
                <div
                  className="crop-handle"
                  style={styles.cropHandle}
                  onMouseDown={handleCropMouseDown}
                />
              </div>
            </div>
            <div style={styles.modalButtons}>
              <button
                style={{ ...styles.modalButton, ...styles.cancelButton }}
                onClick={() => setShowCropModal(false)}
              >
                Cancel
              </button>
              <button
                style={{ ...styles.modalButton, ...styles.confirmButton }}
                onClick={cropImage}
              >
                Crop & Use
              </button>
            </div>
          </div>
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
      )}
      {/* Deactivate Account Modal */}
      {showDeactivateModal && renderDeactivateModal()}
      {/* Logout Modal */}
      {showLogoutModal && renderLogoutModal()}
      {/* Logout Success Modal */}
      {showLogoutSuccessModal && renderLogoutSuccessModal()}
    </>
  );
};
export default Myprofile;