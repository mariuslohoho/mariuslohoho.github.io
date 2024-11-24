import { Chart } from "react-google-charts";

const data = [
  [
    "Year",
    "Roblox",
    "Python",
    "Vanilla Web Dev",
    "Reactjs",
    "React Native",
    "Flutter",
  ],
  ["2021", 1, 0, 0, 0, 0, 0],
  ["2022", 0.7, 0.3, 0, 0, 0, 0],
  ["2023", 0.3, 0.1, 0.6, 0, 0, 0],
  ["2024", 0.3, 0.1, 0.2, 0.3, 0.3, 0],
  ["2025", 0.3, 0.1, 0, 0.1, 0.1, 0.4],
];

const options = {
  isStacked: "relative",
  height: 300,
  legend: { position: "top", maxLines: 3 },
  vAxis: {
    minValue: 0,
    ticks: [0, 0.25, 0.5, 0.75, 1],
  },
};

export function SkillsGraph() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
      className="reactgooglegraph *:rounded-xl *:overflow-hidden *:bg-gray-700"
    />
  );
}
