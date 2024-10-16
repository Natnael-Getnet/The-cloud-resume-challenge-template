"use client";

import React, { useEffect, useState } from "react";

const fetchURL = "";

const VisitorsCount = () => {
  const [data, setData] = useState<number | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(fetchURL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <p>Error fetching visitors count: {error}</p>;
  }

  return <p>and this page has been viewed {isLoading ? "..." : data} times</p>;
};

export default VisitorsCount;
