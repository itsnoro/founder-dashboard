"use client";

import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MetricCard } from "@/components/ui/MetricCard";
import { Chart } from "@/components/charts/Chart";
import { Card } from "@/components/ui/Card";
import {
  Users,
  DollarSign,
  TrendingUp,
  Activity,
  UserPlus,
  ShoppingCart,
  Mail,
  FileText,
} from "lucide-react";

const revenueData = [
  { name: "Jan", revenue: 42000, users: 2400 },
  { name: "Feb", revenue: 48000, users: 2800 },
  { name: "Mar", revenue: 52000, users: 3200 },
  { name: "Apr", revenue: 61000, users: 3800 },
  { name: "May", revenue: 68000, users: 4200 },
  { name: "Jun", revenue: 75000, users: 4800 },
];

const activityData = [
  { name: "Mon", active: 3200, inactive: 800 },
  { name: "Tue", active: 3500, inactive: 600 },
  { name: "Wed", active: 3800, inactive: 500 },
  { name: "Thu", active: 4100, inactive: 400 },
  { name: "Fri", active: 3900, inactive: 450 },
  { name: "Sat", active: 2800, inactive: 700 },
  { name: "Sun", active: 2400, inactive: 900 },
];

const recentActivity = [
  {
    id: 1,
    action: "New user registered",
    user: "Sarah Chen",
    time: "2 minutes ago",
    icon: UserPlus,
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-900/20",
  },
  {
    id: 2,
    action: "Purchase completed",
    user: "Michael Park",
    time: "15 minutes ago",
    icon: ShoppingCart,
    color: "text-primary-600 dark:text-primary-400",
    bg: "bg-primary-50 dark:bg-primary-900/20",
  },
  {
    id: 3,
    action: "Support ticket created",
    user: "Emily Rodriguez",
    time: "1 hour ago",
    icon: Mail,
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    id: 4,
    action: "Report generated",
    user: "System",
    time: "2 hours ago",
    icon: FileText,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
];

export default function DashboardPage() {
  return (
    <Sidebar>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-dark-900 dark:text-dark-50 mb-2">
            Welcome back, Noro
          </h1>
          <p className="text-dark-600 dark:text-dark-400">
            Here&apos;s what&apos;s happening with your business today.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Users"
            value="24,589"
            change={12.5}
            trend="up"
            icon={<Users className="w-6 h-6" />}
          />
          <MetricCard
            title="Monthly Revenue"
            value="$75,420"
            change={8.2}
            trend="up"
            icon={<DollarSign className="w-6 h-6" />}
          />
          <MetricCard
            title="Conversion Rate"
            value="3.24%"
            change={-2.1}
            trend="down"
            icon={<TrendingUp className="w-6 h-6" />}
          />
          <MetricCard
            title="Active Sessions"
            value="1,429"
            change={5.7}
            trend="up"
            icon={<Activity className="w-6 h-6" />}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Chart
            title="Revenue & User Growth"
            data={revenueData}
            type="area"
            dataKeys={[
              { key: "revenue", color: "#0ea5e9", name: "Revenue" },
              { key: "users", color: "#8b5cf6", name: "Users" },
            ]}
            height={300}
          />
          <Chart
            title="Weekly Activity"
            data={activityData}
            type="bar"
            dataKeys={[
              { key: "active", color: "#10b981", name: "Active" },
              { key: "inactive", color: "#ef4444", name: "Inactive" },
            ]}
            height={300}
          />
        </div>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-100 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors"
              >
                <div className={`p-2 rounded-lg ${activity.bg}`}>
                  <activity.icon className={`w-5 h-5 ${activity.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-dark-900 dark:text-dark-100">
                    {activity.action}
                  </p>
                  <p className="text-sm text-dark-600 dark:text-dark-400">
                    {activity.user}
                  </p>
                </div>
                <span className="text-xs text-dark-500 dark:text-dark-500 whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Sidebar>
  );
}
