import { useState, useEffect } from "react";
import Button from "../buttons/Button";

export default function ZenMoment() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  async function getQuote() {
    setLoading(true);

    try {
      const response = await fetch(
        `https://thingproxy.freeboard.io/fetch/https://zenquotes.io/api/random?timestamp=${Date.now()}`,
      );

      if (!response.ok) {
        console.log("error in getting reponse");
      }

      const res = await response.json();

      setData(null); // for resetting data

      setTimeout(() => {
        setData(res[0].q);
        setShouldScroll(true);
      }, 0);
    } catch (e) {
      setError(e);
      console.log("err", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (shouldScroll && data) {
      const timer = setTimeout(() => {
        requestAnimationFrame(() => {
          window.scrollBy({
            top: window.innerHeight * 0.5,
            behavior: "smooth",
          });
          setShouldScroll(false);
        });
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [shouldScroll, data]);

  return (
    <div className="mt-10 flex justify-center">
      {!data ? (
        <Button variant="zen" onClick={getQuote}>
          Click for a Zen Moment
        </Button>
      ) : (
        <div className="my-24 w-full max-w-md">
          <p className="charcoal-text text-center font-cg text-2xl font-medium">
            {data}
          </p>
          <div className="mt-10 flex justify-center">
            <Button variant="zen" onClick={getQuote} disabled={loading}>
              {loading ? "Loading..." : "More Zen"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
