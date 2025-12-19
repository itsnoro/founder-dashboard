"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Bell,
  Moon,
  Sun,
} from "lucide-react";
import { Avatar } from "../ui/Avatar";
import { motion } from "framer-motion";

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex h-screen bg-dark-50 dark:bg-dark-950">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-dark-900 border-r border-dark-200 dark:border-dark-800 flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-dark-200 dark:border-dark-800">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            MetricFlow
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                      : "text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-dark-200 dark:border-dark-800">
          <div className="flex items-center gap-3 px-2 py-2">
            <Avatar name="Noro" size="sm" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-dark-900 dark:text-dark-100 truncate">
                Noro
              </p>
              <p className="text-xs text-dark-500 dark:text-dark-400 truncate">
                noro@metricflow.io
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-dark-900 border-b border-dark-200 dark:border-dark-800 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-dark-900 dark:text-dark-100">
              {navigation.find((item) => item.href === pathname)?.name ||
                "Dashboard"}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-dark-600 dark:text-dark-400" />
              ) : (
                <Moon className="w-5 h-5 text-dark-600 dark:text-dark-400" />
              )}
            </button>
            <div className="relative">
              <button className="p-2 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-dark-600 dark:text-dark-400" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  );
};
