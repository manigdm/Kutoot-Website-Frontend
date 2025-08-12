"use client";

import { createContext, useContext, useEffect, useState } from "react";
import apiRequest from "@/utils/apiRequest";
import auth from '@/utils/auth'; 

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
 const [homepageData, setHomepageData] = useState({
    banners: [],
    // marquee: [],
    // ads: [],
    campaigns: []
  });

  // useEffect(() => {
  //   const fetchHomePageData = async () => {
  //     const token = auth()?.access_token;
  //     try {
  //       // if (token) {
  //         const res = await apiRequest.getHomepageDetails(token);
  //         if (res.status === 200) {
  //           setHomepageData(res.data);
  //           console.log(res.data, 'homepage');
  //         } else {
  //           console.error("API error:", res);
  //         }
  //       // }
  //     } catch (err) {
  //       console.error("Error fetching winners:", err);
  //     }
  //   };

  //   fetchHomePageData();
  // }, []);
 useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const [bannersRes, 
               marqueeRes,
               productsRes,
               baseplansRes, 
               campaignsRes] = await Promise.all([
          fetch("https://kutoot.bigome.com/api/image-items/by-type?type=Banner").then(res => res.json()),
          fetch("https://kutoot.bigome.com/api/image-items/by-type?type=partners").then(res => res.json()),
          fetch("https://kutoot.bigome.com/api/product").then(res => res.json()),
          fetch("https://kutoot.bigome.com/api/baseplans").then(res => res.json()),
          fetch("https://kutoot.bigome.com/api/coin-campaigns").then(res => res.json())
        ]);

        setHomepageData({
          banners: bannersRes?.data || [],
          marquee: marqueeRes?.data || [],
          products: productsRes?.products.data || [],
          baseplans: baseplansRes?.data || [],
          campaigns: campaignsRes?.data || []
        });

        // console.log("Homepage Data:", {
        //   banners: bannersRes?.data,
        //   marquee: marqueeRes?.data,
        //   products: productsRes?.products.data,
        //   campaigns: campaignsRes?.data
        // });

      } catch (err) {
        console.error("Error fetching homepage data:", err);
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
