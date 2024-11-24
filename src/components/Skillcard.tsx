import { Code } from "lucide-react";

interface props {
  skillName: string;
}
export default function Skillcard({ skillName }: props) {
  return (
    <div
      key={skillName}
      className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <Code className="w-8 h-8 mb-2 text-cyan-400" />
      <h3 className="text-lg font-semibold">{skillName}</h3>
    </div>
  );
}
