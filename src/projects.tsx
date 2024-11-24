import { Gamepad2, Joystick, Scissors, Shell } from "lucide-react";
import React from "react";

interface Projects {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactElement;
  tags?: string[];
}

export const projects: Projects[] = [
  {
    title: "Endless Combination",
    description: "A full-stack clone of the viral game Infinite Craft",
    link: "https://mariuslohoho.github.io/EndlessCombination/",
    icon: <Gamepad2 />,
    tags: ["No Framework", "Vite", "Typescript"],
  },
  {
    title: "Oaklands API Wrapper",
    description:
      "A informative app using the Roblox game: Oaklands's official api",
    link: "https://mariuslohoho.github.io/Roblox-Oaklands-API-Wrapper/",
    icon: <Shell />,
    tags: ["ReactJS", "TailwindCSS", "Typescript", "Vite"],
  },
  {
    title: "Reddit Shorts Generator",
    description:
      "A python application that fetches comments on reddit and turns them into short form video content",
    link: "https://github.com/mariuslohoho/RedditShortsGenerator",
    icon: <Scissors />,
    tags: ["Python", "Reddit", "PRAW"],
  },
  {
    title: "Aqua Escape!",
    description: "A roblox flood escape game",
    link: "https://www.roblox.com/games/16329251113/Aqua-Escape",
    icon: <Joystick />,
    tags: ["Roblox", "Luau"],
  },
];
