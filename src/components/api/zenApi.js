import React, { useState } from "react";

export default async function getQuote(quote) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  try {
    const response = await fetch("https://zenquotes.io/api/random");
    if (!response.ok) {
      console.log("error in getting reponse");
    }
    const result = response.json();
    setData(result);
  } catch (e) {
    setError(e);
    console.log("err", e);
  } finally {
    setLoading(false);
  }
  console.log("data: ", data);
}
