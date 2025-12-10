/**
 * Created by AshrafMorningstar
 * https://github.com/AshrafMorningstar
 */
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import React from "react";

export const BasicStats: React.FC<{ username: string }> = ({ username }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = spring({
    frame,
    fps,
    from: 0.8,
    to: 1,
    config: {
      damping: 12,
    },
  });

  return (
    <AbsoluteFill className="bg-slate-950 flex items-center justify-center p-10 font-sans">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />

      <div
        style={{ opacity, transform: `scale(${scale})` }}
        className="relative w-full max-w-5xl p-12 rounded-[2.5rem] bg-white/5 backdrop-blur-2xl flex flex-col gap-10 text-white border border-white/10 shadow-[0_0_100px_rgba(30,0,50,0.5)] z-10"
      >
        <div className="flex items-center gap-8 border-b border-white/5 pb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400 p-[3px] shadow-lg shadow-violet-500/20">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-3xl font-bold">
              {username.charAt(0).toUpperCase()}
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-300">
              {username}
            </h1>
            <p className="text-xl text-slate-400 mt-2 font-light tracking-wide">
              AI-Powered Developer Analytics
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {[
            {
              label: "Total Commits",
              value: "1,234",
              color: "text-emerald-400",
              fromColor: "from-emerald-500/20",
            },
            {
              label: "Pull Requests",
              value: "142",
              color: "text-purple-400",
              fromColor: "from-purple-500/20",
            },
            {
              label: "Issues Solved",
              value: "45",
              color: "text-orange-400",
              fromColor: "from-orange-500/20",
            },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`relative overflow-hidden bg-gradient-to-br ${stat.fromColor} to-white/5 rounded-3xl p-8 border border-white/5 flex flex-col items-center justify-center group`}
              style={{
                opacity: interpolate(frame, [15 + i * 5, 30 + i * 5], [0, 1], {
                  extrapolateRight: "clamp",
                }),
                transform: `translateY(${interpolate(
                  frame,
                  [15 + i * 5, 30 + i * 5],
                  [20, 0],
                  { extrapolateRight: "clamp" }
                )}px)`,
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <span
                className={`text-6xl font-black ${stat.color} mb-3 drop-shadow-lg`}
              >
                {stat.value}
              </span>
              <span className="text-sm text-slate-300 font-semibold uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
