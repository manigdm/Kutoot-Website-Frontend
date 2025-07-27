"use client";

import { createContext, useContext, useEffect, useState } from "react";
import apiRequest from "@/utils/apiRequest";
import auth from '@/utils/auth'; 

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const [homepageData, setHomepageData] = useState(null);

  useEffect(() => {
    const fetchHomePageData = async () => {
      const token = auth()?.access_token;
      try {
        // if (token) {
          const res = await apiRequest.getHomepageDetails(token);
          if (res.status === 200) {
            setHomepageData(res.data);
          } else {
            console.error("API error:", res);
          }
        // }
      } catch (err) {
        console.error("Error fetching winners:", err);
      }
    };

    fetchHomePageData();
  }, []);

  return (
    <HomePageContext.Provider value={homepageData}>
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePage = () => useContext(HomePageContext);
