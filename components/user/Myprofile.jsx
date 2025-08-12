"use client";
import React, { useState, useRef, useCallback } from "react";

const Myprofile = () => {
  // State for image handling
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
  const [croppedImage, setCroppedImage] = useState(null);

  // State for form data
  const [formData, setFormData] = useState({
    username: "",
    gender: "",
    email: "",
    mobile: "",
    address: "",
    houseNumber: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
  });

  // State for join date (simulating user join date)
  const [joinDate, setJoinDate] = useState("2nd May 2025");

  // State for view management: 'edit', 'saved', 'profile'
  const [viewMode, setViewMode] = useState("edit");

  // State for deactivate modal
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);

  // State for active tab
  const [activeTab, setActiveTab] = useState("dashboard");

  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const fileInputRef = useRef(null);

  // Tab components
  const DashboardTab = () => (
    <div>
      <h2
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        My Dashboard
      </h2>
        <p style={{ marginBottom: "15px" }}>my dashboard</p>
      
    </div>
  );

  const CouponsTab = () => (
    <div>
      <h2
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        My Coupons
      </h2>

      <p>my coupons.</p>
    </div>
  );

  const CampaignsTab = () => (
    <div>
      <h2
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        My Campaigns
      </h2>
     <p>my campaigns</p>
    </div>
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

  const styles = {
    container: {
      backgroundColor: "#FFFDF2",
      minHeight: "800px",
      position: "absolute",
      top: "129px",
      left: "90px",
      display: "flex",
      flexDirection: "column",
      gap: "26px",
      transform: "rotate(0deg)",
      opacity: 1,
      boxSizing: "border-box",
      padding: "20px",
      fontFamily: "Poppins",
      marginTop: "270px",
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
      width: "204px",
      height: "336px",
      display: "flex",
      flexDirection: "column",
      gap: "10px", // Decreased gap from 20px to 10px
      alignItems: "flex-start",
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
      fontSize: "16px",
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
    rightContent: {
      width: "871px",
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
      width: "831px",
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
      flexWrap: "wrap",
    },
    inputField: {
      width: "405px",
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
      width: "405px",
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
  };

  const globalStyles = `
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
      cursor: pointer !important;
    }
    .upload-content * {
      pointer-events: none !important;
      user-select: none !important;
    }
  `;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target.result);
        setShowCropModal(true);
      };
      reader.readAsDataURL(selectedFile);
    }
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

  const handleSaveChanges = () => {
    console.log("Profile saved:", { ...formData, profileImage: croppedImage });
    setViewMode("saved");
  };

  const handleRemoveImage = () => {
    console.log("Removing profile image");
    setCroppedImage(null);
    setFile(null);
    setPreviewImage(null);
  };

  const handleChangeImage = () => {
    console.log("Changing profile image");
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
      <h3 style={styles.profilePictureText}>Profile picture</h3>
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
      <div style={styles.uploadLine}></div>
      <h3 style={styles.personalInfoText}>Personal information</h3>
      <div style={styles.inputContainer}>
        <div>
          <label style={styles.label}>User name*</label>
          <input
            type="text"
            placeholder="Enter user name"
            style={styles.inputField}
            value={formData.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
          />
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
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>
        <div>
          <label style={styles.label}>Mobile number*</label>
          <input
            type="tel"
            placeholder="Enter mobile number"
            style={styles.inputField}
            value={formData.mobile}
            onChange={(e) => handleInputChange("mobile", e.target.value)}
          />
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
            style={{ ...styles.inputField, width: "830px" }}
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
          />
        </div>
      </div>
      <div style={styles.inputContainer}>
        <div>
          <label style={styles.label}>House number*</label>
          <input
            type="text"
            placeholder="Enter house number"
            style={styles.inputField}
            value={formData.houseNumber}
            onChange={(e) => handleInputChange("houseNumber", e.target.value)}
          />
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
        </div>
      </div>
      <div style={styles.inputContainer}>
        <div>
          <label style={styles.label}>City*</label>
          <input
            type="text"
            placeholder="Enter city name"
            style={styles.inputField}
            value={formData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
          />
        </div>
        <div>
          <label style={styles.label}>State*</label>
          <input
            type="text"
            placeholder="Enter state name"
            style={styles.inputField}
            value={formData.state}
            onChange={(e) => handleInputChange("state", e.target.value)}
          />
        </div>
      </div>
      <div style={styles.inputContainer}>
        <div>
          <label style={styles.label}>Pin code*</label>
          <input
            type="text"
            placeholder="Enter pin code"
            style={styles.inputField}
            value={formData.pinCode}
            onChange={(e) => handleInputChange("pinCode", e.target.value)}
          />
        </div>
        <div>
          <label style={styles.label}>Country of residence*</label>
          <select
            style={styles.dropdown}
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
          >
            <option value="" disabled hidden>
              Select country
            </option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
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

  return (
    <>
      <style>{globalStyles}</style>
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
              <button style={styles.logoutButton}>Log out</button>
            </div>

            <div style={styles.rightContent}>
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
    </>
  );
};

export default Myprofile;
