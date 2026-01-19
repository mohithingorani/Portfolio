"use client";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export function SkillRadar({
  data,
  labels,
}: {
  data: number[];
  labels: string[];
}) {
  return (
    <Radar
    
      data={{
        labels,
        datasets: [
          {
            label: "Skills Proficiency",
            data,
            backgroundColor: "rgba(56,189,248,0.25)",
            borderColor: "#38bdf8",
            pointBackgroundColor: "#ffffff",
            pointBorderColor: "#38bdf8",
            pointRadius: 4,
            borderWidth: 2,
            tension: 0.4,
          },
        ],
      }}
      options={{
        scales: {
          r: {
            angleLines: { color: "rgba(255,255,255,0.1)" },
            grid: { color: "rgba(255,255,255,0.1)" },
            pointLabels: {
              color: "rgba(255,255,255,0.7)",
              font: { size: 12 },
            },
            ticks: { display: false },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
        maintainAspectRatio:false,
        plugins: {
          legend: {
            labels: {
              color: "rgba(255,255,255,0.6)",
            },
          },
        },
      }}
    />
  );
}
