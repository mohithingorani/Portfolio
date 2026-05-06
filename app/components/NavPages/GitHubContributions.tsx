"use client";

import { useEffect, useState, useRef } from "react";

interface DayData {
  date: string;
  count: number;
}

interface GitHubContributionsProps {
  username?: string;
}

interface MonthData {
  name: string;
  columnIndex: number;
}

const CELL_SIZE = 14;

export default function GitHubContributions({ username = "mohithingorani" }: GitHubContributionsProps) {
  const [data, setData] = useState<DayData[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<DayData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`/api/contributions?username=${username}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.contributions) {
          const days: DayData[] = json.contributions.map((c: { date: string; count: number }) => ({
            date: c.date,
            count: c.count,
          })).reverse();
          setData(days);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  const getColor = (count: number) => {
    if (count === 0) return "bg-white/5";
    if (count < 5) return "bg-yellow-200/30";
    if (count < 10) return "bg-yellow-200/50";
    if (count < 20) return "bg-yellow-200/70";
    return "bg-yellow-200";
  };

  const getWeeks = (): DayData[][] => {
    if (data.length === 0) return [];
    
    const startDate = new Date(data[0].date);
    const startDayOfWeek = startDate.getDay();
    
    const weeks: DayData[][] = [];
    let currentWeek: DayData[] = [];
    
    for (let d = 0; d < startDayOfWeek; d++) {
      currentWeek.push({ date: "", count: -1 });
    }
    
    data.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });
    
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: "", count: -1 });
      }
      weeks.push(currentWeek);
    }
    
    return weeks;
  };

  const getMonths = (weeks: DayData[][]): MonthData[] => {
    const months: MonthData[] = [];
    let prevMonth = -1;
    
    weeks.forEach((week, idx) => {
      const firstDay = week.find(d => d.date);
      if (firstDay) {
        const month = new Date(firstDay.date).getMonth();
        if (month !== prevMonth) {
          months.push({
            name: new Date(firstDay.date).toLocaleDateString("en-US", { month: "short" }),
            columnIndex: idx,
          });
          prevMonth = month;
        }
      }
    });
    
    return months;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      setTooltipPosition({ x, y: 0 });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="w-5 h-5 border-2 border-yellow-200/30 border-t-yellow-200 rounded-full animate-spin" />
      </div>
    );
  }

  const weeks = getWeeks();
  const months = getMonths(weeks);
  const CELL_GAP = 3;

  return (
    <div className="relative space-y-4 overflow-visible">
      <div className="overflow-x-auto">
        <div className="relative min-w-max">
          {months.length > 0 && (
            <div className="relative h-4 min-w-max">
              {months.map((month, idx) => (
                <span 
                  key={idx} 
                  className="text-xs text-white/40 absolute"
                  style={{ left: month.columnIndex * (CELL_SIZE + CELL_GAP) }}
                >
                  {month.name}
                </span>
              ))}
            </div>
          )}
          <div 
            ref={containerRef}
            className="flex gap-0.75 pb-2 pt-5 min-w-max"
            onMouseMove={handleMouseMove}
            role="grid"
            aria-label="GitHub contributions"
          >
            {weeks.map((week, weekIdx) => (
              <div 
                key={weekIdx} 
                className="flex flex-col gap-0.75"
                role="row"
              >
                {week.map((day, dayIdx) => (
                  <div
                    key={dayIdx}
                    role="gridcell"
                    tabIndex={day.count >= 0 ? 0 : -1}
                    aria-label={day.count >= 0 ? `${day.count} contributions on ${formatDate(day.date)}` : "No data"}
                    className={`
                      transition-all duration-200 rounded-xs
                      ${day.count === -1 ? "invisible" : getColor(day.count)}
                      ${day.count >= 0 ? "hover:ring-1 hover:ring-yellow-200/50 hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-200/50" : ""}
                    `}
                    style={{ width: CELL_SIZE, height: CELL_SIZE }}
                    onMouseEnter={() => day.count >= 0 && setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                    onFocus={() => day.count >= 0 && setHoveredDay(day)}
                    onBlur={() => setHoveredDay(null)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {hoveredDay && (
        <div 
          className="absolute z-50 px-3 py-2 bg-[#2b2b2c] rounded-lg border border-white/10 shadow-xl"
          style={{ 
            left: tooltipPosition.x, 
            top: -50,
            transform: 'translateX(-50%)'
          }}
          role="tooltip"
        >
          <div className="text-sm font-medium text-yellow-200">{hoveredDay.count} contributions</div>
          <div className="text-xs text-white/60">{formatDate(hoveredDay.date)}</div>
        </div>
      )}

      <div className="flex items-center justify-center gap-4 text-xs text-white/50">
        <span>Less</span>
        <div className="flex gap-0.75">
          <div className="w-3 h-3 rounded-xs bg-white/5" />
          <div className="w-3 h-3 rounded-xs bg-yellow-200/30" />
          <div className="w-3 h-3 rounded-xs bg-yellow-200/50" />
          <div className="w-3 h-3 rounded-xs bg-yellow-200/70" />
          <div className="w-3 h-3 rounded-xs bg-yellow-200" />
        </div>
        <span>More</span>
        <a 
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-200/70 hover:text-yellow-200 transition-colors ml-4"
        >
          @{username}
        </a>
      </div>
    </div>
  );
}