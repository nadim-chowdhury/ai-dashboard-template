"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { AIAssistant } from "@/components/dashboard/ai-assistant"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { AnalyticsOverview } from "@/components/dashboard/analytics-overview"
import { CommandPalette } from "@/components/dashboard/command-palette"
import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <DashboardLayout>
      <CommandPalette />

      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your business today.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$92,548"
          change="+12.5%"
          changeType="positive"
          icon={DollarSign}
          gradient="from-violet-500 to-purple-500"
          description="vs. last month"
          trend={
            <div className="flex items-center gap-2 text-xs">
              <ArrowUpRight className="w-3 h-3 text-green-500" />
              <span className="text-green-500 font-medium">+$10,245</span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          }
        />
        <StatCard
          title="Active Users"
          value="2,845"
          change="+8.2%"
          changeType="positive"
          icon={Users}
          gradient="from-blue-500 to-cyan-500"
          description="vs. last month"
          trend={
            <div className="flex items-center gap-2 text-xs">
              <ArrowUpRight className="w-3 h-3 text-green-500" />
              <span className="text-green-500 font-medium">+215</span>
              <span className="text-muted-foreground">new this week</span>
            </div>
          }
        />
        <StatCard
          title="Total Sales"
          value="1,234"
          change="-3.1%"
          changeType="negative"
          icon={ShoppingCart}
          gradient="from-green-500 to-emerald-500"
          description="vs. last month"
          trend={
            <div className="flex items-center gap-2 text-xs">
              <ArrowDownRight className="w-3 h-3 text-red-500" />
              <span className="text-red-500 font-medium">-39</span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          }
        />
        <StatCard
          title="Growth Rate"
          value="23.8%"
          change="+4.3%"
          changeType="positive"
          icon={TrendingUp}
          gradient="from-orange-500 to-amber-500"
          description="vs. last month"
          trend={
            <div className="flex items-center gap-2 text-xs">
              <ArrowUpRight className="w-3 h-3 text-green-500" />
              <span className="text-green-500 font-medium">Excellent</span>
              <span className="text-muted-foreground">performance</span>
            </div>
          }
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <AnalyticsOverview />
        </div>
      </div>

      {/* AI and Activity Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AIAssistant />
        <ActivityFeed />
      </div>
    </DashboardLayout>
  )
}
