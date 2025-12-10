/**
 * Created by AshrafMorningstar
 * https://github.com/AshrafMorningstar
 */
import React from "react";
import { registerRoot } from "remotion";
import { Composition } from "remotion";
import { BasicStats } from "../scenes/BasicStats";
import { SkillsRadar } from "../scenes/SkillsRadar";
import { TimeLapse } from "../scenes/TimeLapse";
import { TimeLapseEvolution } from "../scenes/TimeLapseEvolution";
import "../app/globals.css";

const mockData = {
  contributions: {
    contributionCalendar: {
      totalContributions: 850,
      weeks: [],
    },
  },
  startDate: "2024-01-01",
  endDate: "2024-12-31",
  skills: [],
  timeline: [],
  achievements: [],
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="GitHubStats"
        component={BasicStats}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          username: "AshrafMorningstar",
        }}
      />
      <Composition
        id="SkillsRadar"
        component={SkillsRadar}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TimeLapse"
        component={TimeLapse}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TimeLapseEvolution"
        component={TimeLapseEvolution}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          data: mockData,
        }}
      />
    </>
  );
};

registerRoot(RemotionRoot);
