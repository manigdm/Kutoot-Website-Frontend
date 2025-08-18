"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";
import { ChevronRight } from "lucide-react";

const Coupons = () => {

    const styles = { 
        uploadLine: {
            width: "100%",
            height: "0px",
            borderTop: "0.8px solid #E6E6E6",
            transform: "rotate(0deg)",
            opacity: 1,
            margin: "8px 0",
          },
    }

  const [coupons] = useState([
    {
      orderId: "A1111111111",
      earnedDate: "30.06.2025",
      bundle: "Buildiko Springwoods Designer Villa",
      totalCoins: 1600,
      coupons: 5000,
      automatic: 4990,
      manual: 10,
      status: "Ongoing",
      drawDate: "--",
      matched: false,
    },
    {
      orderId: "A1111111111",
      earnedDate: "30.06.2025",
      bundle: "Buildiko Springwoods Designer Villa",
      totalCoins: 1600,
      coupons: 5000,
      automatic: 4990,
      manual: 10,
      status: "Completed",
      drawDate: "30.06.2025",
      matched: true,
    },
    {
      orderId: "A1111111111",
      earnedDate: "30.06.2025",
      bundle: "Buildiko Springwoods Designer Villa",
      totalCoins: 1600,
      coupons: 5000,
      automatic: 4990,
      manual: 10,
      status: "Ongoing",
      drawDate: "--",
      matched: false,
    },
    {
      orderId: "A1111111111",
      earnedDate: "30.06.2025",
      bundle: "Buildiko Springwoods Designer Villa",
      totalCoins: 1600,
      coupons: 5000,
      automatic: 4990,
      manual: 10,
      status: "Completed",
      drawDate: "30.06.2025",
      matched: true,
    },
  ]);
  
    return (
        <div className="p-6 bg-[#fffaf5] min-h-screen">
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
            padding: "0 16px",
          }}
        >
          {/* Left Title */}
          <div>
            <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#2d2d2d" }}>
              My Coupons
            </h1>
          </div>
  
          {/* Right - Total Coupons over image */}
          <div style={{ position: "relative", display: "inline-block" }}>
            {/* Background Image */}
            <img
              src="/images/campaign/all-coupons_bg.svg"
              alt="Total Coupons Background"
            />
  
            {/* Text Overlay */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "16px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span style={{ fontSize: "14px", color: "#3A3A3A" }}>Total Coupons</span>
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "#3A3A3A" }}>
                {coupons.length}
              </span>
            </div>
          </div>
        </div>
  
        <div style={styles.uploadLine} className="mb-3"></div>
  
  
  
        {/* Search */}
        <div className="mb-6" style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <img src="/images/campaign/Search.svg" alt="search"
            style={{ position: "absolute", width: "28px", height: "28px", marginLeft: "8px" }} />
          <input
            type="text"
            placeholder="Search to find your winning number"
            className="w-full border rounded-lg px-5 py-2 focus:outline-none focus:ring"
          />
        </div>
  
        {/* Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100 text-left text-gray-600">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Earned Date</th>
                <th className="px-4 py-3">Bundle</th>
                <th className="px-4 py-3">Total Coins</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Draw Date</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
  
            <tbody>
              {coupons.map((c, index) => (
                <>
                  <tr key={index} className="border-b">
                    <td className="px-4 py-3 font-medium">{c.orderId}</td>
                    <td className="px-4 py-3">{c.earnedDate}</td>
                    <td>
                      <div className="inline-block" style={{position: "relative", width: "200px"}}>
                        {/* Background Image */}
                        <img
                          src="/images/campaign/coupon-bundle.svg"
                          alt=""
                          className="w-full h-auto"
                        />
  
                        {/* Overlay Content */}
                        <div className="flex flex-col items-center justify-center text-center p-3"
                        style={{position: "absolute"}}>
                          <div className="text-xs font-bold rounded">
                            VALUE BUILDER
                          </div>
  
                          <div className="text-sm font-semibold">{c.bundle}</div>
  
                          <div className="rounded-lg border text-sm font-bold flex flex-col items-center">
                            <span className="text-lg">{c.coupons.toLocaleString()}</span>
                            <span>COUPONS</span>
                            <span className="text-xs text-gray-500">
                              {c.automatic} automatic, {c.manual} manual
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-bold text-yellow-600">
                      <img src="/images/campaign/coin.svg" alt="coin" />{c.totalCoins}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${c.status === "Ongoing"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-green-100 text-green-600"
                          }`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{c.drawDate}</td>
                    <td className="px-4 py-3 text-pink-600 flex items-center cursor-pointer">
                      View all coupons <ChevronRight size={16} />
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
      </div>
    )

}
export default Coupons