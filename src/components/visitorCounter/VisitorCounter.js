import React, { useState, useEffect } from "react";
import "./VisitorCounter.css";

function VisitorCounter({ theme }) {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState("loading");
  const [showCounter, setShowCounter] = useState(false);

  useEffect(() => {
    // Send event to Google Analytics for tracking
    if (window.gtag) {
      window.gtag("event", "page_view", {
        event_category: "engagement",
        event_label: "portfolio_visit",
      });
    }

    // Fetch real visitor data from API
    const fetchVisitorData = async () => {
      try {
        // Try to fetch from our API endpoint
        const response = await fetch("/api/visitors");
        const data = await response.json();

        if (data.success) {
          setVisitorCount(data.data.totalUsers);
          setDataSource("analytics");
          setShowCounter(true); // Only show if we get real data
        } else {
          throw new Error(data.message || "Failed to fetch data");
        }
      } catch (error) {
        console.warn("Failed to fetch GA data:", error);
        // Don't show counter if we can't get real data
        setShowCounter(false);
      }

      setIsLoading(false);
      // Only show with animation if we have real data
      if (showCounter) {
        setTimeout(() => setIsVisible(true), 1000);
      }
    };

    fetchVisitorData();
  }, [showCounter]);

  // Don't render anything if we can't fetch real data
  if (!showCounter) {
    return null;
  }

  return (
    <div
      className={`visitor-counter ${isVisible ? "visible" : ""} ${
        isLoading ? "loading" : ""
      }`}
      title={`Total unique visitors: ${visitorCount.toLocaleString()}\nData source: ${
        dataSource === "analytics" ? "Google Analytics API" : "Local fallback"
      }\nLast updated: ${new Date().toLocaleTimeString()}`}
    >
      <div className="counter-icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="counter-content">
        <div className="counter-number">{visitorCount.toLocaleString()}</div>
        <div className="counter-label">Visitors</div>
      </div>
    </div>
  );
}

export default VisitorCounter;
