// Created by AshrafMorningstar
// GitHub: https://github.com/AshrafMorningstar

export interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

export interface Week {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: Week[];
}

export interface ContributionsCollection {
  contributionCalendar: ContributionCalendar;
}

export interface UserData {
  contributionsCollection: ContributionsCollection;
}

export interface AnalyticsData {
  contributions: ContributionsCollection;
  startDate: string;
  endDate: string;
  skills?: any[];
  timeline?: any[];
  achievements?: any[];
}

export interface DeveloperData {
  contributions: any;
  repositories: any;
  skills: any;
}

export interface Repository {
  name: string;
  languages: string[];
  stars: number;
  features: string[];
}
