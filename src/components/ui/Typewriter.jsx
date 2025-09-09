import { useState, useEffect } from "react";

export default function Typewriter({
  intro,
  speed = 100,
  delay = 200,
  startDelay = 0,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedIntro, setDisplayedIntro] = useState(intro.map(() => ""));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < intro.length) {
      const currentIntro = intro[currentIndex].text;

      if (charIndex < currentIntro.length) {
        const timeout = setTimeout(() => {
          setDisplayedIntro((prev) => {
            const newTexts = [...prev];
            newTexts[currentIndex] += currentIntro.charAt(charIndex);
            return newTexts;
          });
          setCharIndex((prev) => ++prev);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const nextTimeout = setTimeout(() => {
          setCurrentIndex((prev) => ++prev);
          setCharIndex(0);
        }, delay);
        return () => clearTimeout(nextTimeout);
      }
    }
  }, [started, charIndex, currentIndex, intro, speed, delay]);

  return (
    <div>
      {intro.map((block, i) => {
        const Tag = block.as || "span";
        const isActive = i === currentIndex && started;

        return (
          <Tag key={i} className={block.className}>
            {displayedIntro[i]}
            {isActive && <span className="animate-blink">|</span>}
          </Tag>
        );
      })}
    </div>
  );
}
