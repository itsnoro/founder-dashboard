"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Chart } from "@/components/charts/Chart";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowUp, ArrowDown } from "lucide-react";

const weeklyData = [
  { name: "Mon", pageviews: 4200, sessions: 2800, bounceRate: 42 },
  { name: "Tue", pageviews: 4800, sessions: 3200, bounceRate: 38 },
  { name: "Wed", pageviews: 5200, sessions: 3500, bounceRate: 35 },
  { name: "Thu", pageviews: 5800, sessions: 3900, bounceRate: 33 },
  { name: "Fri", pageviews: 5400, sessions: 3600, bounceRate: 36 },
  { name: "Sat", pageviews: 3800, sessions: 2400, bounceRate: 45 },
  { name: "Sun", pageviews: 3200, sessions: 2100, bounceRate: 48 },
];

const monthlyData = [
  { name: "Jan", pageviews: 82000, sessions: 52000, bounceRate: 42 },
  { name: "Feb", pageviews: 88000, sessions: 56000, bounceRate: 40 },
  { name: "Mar", pageviews: 95000, sessions: 61000, bounceRate: 38 },
  { name: "Apr", pageviews: 108000, sessions: 68000, bounceRate: 36 },
  { name: "May", pageviews: 122000, sessions: 78000, bounceRate: 34 },
  { name: "Jun", pageviews: 135000, sessions: 86000, bounceRate: 32 },
];

const yearlyData = [
  { name: "2020", pageviews: 820000, sessions: 520000, bounceRate: 48 },
  { name: "2021", pageviews: 1100000, sessions: 680000, bounceRate: 44 },
  { name: "2022", pageviews: 1450000, sessions: 890000, bounceRate: 40 },
  { name: "2023", pageviews: 1820000, sessions: 1150000, bounceRate: 36 },
  { name: "2024", pageviews: 2280000, sessions: 1420000, bounceRate: 33 },
];

const topPages = [
  { page: "/dashboard", views: 24580, change: 12.5 },
  { page: "/analytics", views: 18420, change: 8.3 },
  { page: "/settings", views: 12340, change: -3.2 },
  { page: "/reports", views: 9870, change: 15.7 },
  { page: "/users", views: 7650, change: 6.4 },
];

export default function AnalyticsPage() {
  const [timeFilter, setTimeFilter] = useState<"weekly" | "monthly" | "yearly">(
    "monthly"
  );

  const getData = () => {
    switch (timeFilter) {
      case "weekly":
        return weeklyData;
      case "yearly":
        return yearlyData;
      default:
        return monthlyData;
    }
  };

  const currentData = getData();

  return (
    <Sidebar>
      <div className="space-y-6">
        {/* Header with Filters */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-dark-900 dark:text-dark-50 mb-2">
              Analytics Overview
            </h1>
            <p className="text-dark-600 dark:text-dark-400">
              Deep dive into your platform metrics and trends.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={timeFilter === "weekly" ? "primary" : "outline"}
              size="sm"
              onClick={() => setTimeFilter("weekly")}
            >
              Weekly
            </Button>
            <Button
              variant={timeFilter === "monthly" ? "primary" : "outline"}
              size="sm"
              onClick={() => setTimeFilter("monthly")}
            >
              Monthly
            </Button>
            <Button
              variant={timeFilter === "yearly" ? "primary" : "outline"}
              size="sm"
              onClick={() => setTimeFilter("yearly")}
            >
              Yearly
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-1">
                  Total Pageviews
                </p>
                <h3 className="text-3xl font-bold text-dark-900 dark:text-dark-50">
                  {currentData
                    .reduce((sum, item) => sum + item.pageviews, 0)
                    .toLocaleString()}
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400">
              <ArrowUp className="w-4 h-4" />
              <span>14.2%</span>
              <span className="text-dark-500 dark:text-dark-400 font-normal ml-1">
                vs previous period
              </span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-1">
                  Total Sessions
                </p>
                <h3 className="text-3xl font-bold text-dark-900 dark:text-dark-50">
                  {currentData
                    .reduce((sum, item) => sum + item.sessions, 0)
                    .toLocaleString()}
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400">
              <ArrowUp className="w-4 h-4" />
              <span>11.8%</span>
              <span className="text-dark-500 dark:text-dark-400 font-normal ml-1">
                vs previous period
              </span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-1">
                  Avg. Bounce Rate
                </p>
                <h3 className="text-3xl font-bold text-dark-900 dark:text-dark-50">
                  {(
                    currentData.reduce((sum, item) => sum + item.bounceRate, 0) /
                    currentData.length
                  ).toFixed(1)}
                  %
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400">
              <ArrowDown className="w-4 h-4" />
              <span>5.3%</span>
              <span className="text-dark-500 dark:text-dark-400 font-normal ml-1">
                vs previous period
              </span>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-6">
          <Chart
            title="Traffic Overview"
            data={currentData}
            type="line"
            dataKeys={[
              { key: "pageviews", color: "#0ea5e9", name: "Pageviews" },
              { key: "sessions", color: "#8b5cf6", name: "Sessions" },
            ]}
            height={350}
          />

          <Chart
            title="Bounce Rate Trend"
            data={currentData}
            type="area"
            dataKeys={[
              { key: "bounceRate", color: "#f59e0b", name: "Bounce Rate %" },
            ]}
            height={300}
          />
        </div>

        {/* Top Pages */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-100 mb-4">
            Top Pages
          </h3>
          <div className="space-y-3">
            {topPages.map((page, index) => (
              <div
                key={page.page}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 font-semibold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-dark-900 dark:text-dark-100">
                    {page.page}
                  </p>
                  <p className="text-xs text-dark-600 dark:text-dark-400">
                    {page.views.toLocaleString()} views
                  </p>
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    page.change > 0
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {page.change > 0 ? (
                    <ArrowUp className="w-4 h-4" />
                  ) : (
                    <ArrowDown className="w-4 h-4" />
                  )}
                  <span>{Math.abs(page.change)}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Sidebar>
  );
}
