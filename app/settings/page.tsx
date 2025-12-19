"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SettingsPage() {
  const [name, setName] = useState("Noro");
  const [email, setEmail] = useState("noro@metricflow.io");
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <Sidebar>
      <div className="space-y-6 max-w-4xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-dark-900 dark:text-dark-50 mb-2">
            Settings
          </h1>
          <p className="text-dark-600 dark:text-dark-400">
            Manage your account settings and preferences.
          </p>
        </div>

        {/* Profile Section */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-100 mb-6">
            Profile Information
          </h3>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar name={name} size="lg" />
              <div>
                <Button variant="outline" size="sm">
                  Change Avatar
                </Button>
                <p className="text-xs text-dark-500 dark:text-dark-400 mt-2">
                  JPG, PNG or GIF. Max 2MB.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Company" placeholder="Your company name" />
              <Input label="Role" placeholder="Your role" />
            </div>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-100 mb-6">
            Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-dark-200 dark:border-dark-700">
              <div>
                <p className="font-medium text-dark-900 dark:text-dark-100">
                  Push Notifications
                </p>
                <p className="text-sm text-dark-600 dark:text-dark-400">
                  Receive push notifications for important updates
                </p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  notifications
                    ? "bg-primary-600"
                    : "bg-dark-300 dark:bg-dark-600"
                }`}
              >
                <motion.div
                  animate={{ x: notifications ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm"
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-dark-200 dark:border-dark-700">
              <div>
                <p className="font-medium text-dark-900 dark:text-dark-100">
                  Email Alerts
                </p>
                <p className="text-sm text-dark-600 dark:text-dark-400">
                  Get email alerts when metrics hit thresholds
                </p>
              </div>
              <button
                onClick={() => setEmailAlerts(!emailAlerts)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  emailAlerts
                    ? "bg-primary-600"
                    : "bg-dark-300 dark:bg-dark-600"
                }`}
              >
                <motion.div
                  animate={{ x: emailAlerts ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm"
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-dark-900 dark:text-dark-100">
                  Weekly Reports
                </p>
                <p className="text-sm text-dark-600 dark:text-dark-400">
                  Receive a summary of your metrics every week
                </p>
              </div>
              <button
                onClick={() => setWeeklyReports(!weeklyReports)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  weeklyReports
                    ? "bg-primary-600"
                    : "bg-dark-300 dark:bg-dark-600"
                }`}
              >
                <motion.div
                  animate={{ x: weeklyReports ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm"
                />
              </button>
            </div>
          </div>
        </Card>

        {/* Security */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-100 mb-6">
            Security
          </h3>
          <div className="space-y-4">
            <div>
              <Button variant="outline">Change Password</Button>
            </div>
            <div>
              <Button variant="outline">Enable Two-Factor Authentication</Button>
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex items-center gap-4">
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
          <Button variant="ghost">Cancel</Button>
          <AnimatePresence>
            {saved && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-green-600 dark:text-green-400"
              >
                <Check className="w-5 h-5" />
                <span className="font-medium">Changes saved</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Sidebar>
  );
}
