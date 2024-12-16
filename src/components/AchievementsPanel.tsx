import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { achievements } from "../Data/achievements";

export default function AchievementsPanel() {
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (achievementsRef.current) {
      achievementsRef.current.scrollLeft =
        achievementsRef.current?.scrollWidth;
    }
  }, []);

  const scrollAchievements = (direction: "left" | "right") => {
    if (achievementsRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      achievementsRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      <div className="w-full overflow-hidden">
        <div
          ref={achievementsRef}
          className="flex space-x-8 p-8 overflow-x-scroll scrollbar-hide"
          style={{ scrollbarWidth: "none", scrollSnapType: "x proximity" }}
        >
          {achievements.map((achievement, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden relative"
              style={{ scrollSnapAlign: "center" }}
            >
              <div className="ribbon">{achievement.ribbon}</div>
              <div className="text-cyan-400 text-4xl font-bold mb-4">
                {achievement.year}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollAchievements("left")}
        className="absolute left-4 top-1/2 bg-gray-700 p-2 rounded-full -translate-y-1/2 hover:bg-gray-600 transition-colors"
      >
        <ChevronLeft className="text-cyan-400" />
      </button>
      <button
        onClick={() => scrollAchievements("right")}
        className="absolute right-4 top-1/2 bg-gray-700 p-2 rounded-full -translate-y-1/2 hover:bg-gray-600 transition-colors"
      >
        <ChevronRight className="text-cyan-400" />
      </button>
    </div>
  );
}
