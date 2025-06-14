"use client";
import { createContext, useContext, useEffect, useState } from "react";
import apiRequest from "@/utils/apiRequest";
import auth from '@/utils/auth'; 

const WinnerPageContext = createContext();

export const WinnerPageProvider = ({ children }) => {
  const [winnerpageData, setWinnerpageData] = useState(null);

  useEffect(() => {
    const fetchWinnerPageData = async () => {
      const token = auth()?.access_token;
      try {
        if (token) {
          const res = await apiRequest.getWinnersList(token);
          if (res.status === 200) {
            setWinnerpageData(res.data);
          } else {
            console.error("API error:", res);
          }
        }
      } catch (err) {
        console.error("Error fetching winners:", err);
      }
    };

    fetchWinnerPageData();
  }, []);

  return (
    <WinnerPageContext.Provider value={winnerpageData}>
      {children}
    </WinnerPageContext.Provider>
  );
};

export const useWinnerPage = () => useContext(WinnerPageContext);
