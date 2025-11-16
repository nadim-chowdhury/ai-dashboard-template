"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Eye,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  Clock,
  FileSpreadsheet,
  FileBarChart,
  File,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";

const reports = [
  {
    id: 1,
    title: "Monthly Revenue Report",
    description: "Comprehensive revenue breakdown and analysis",
    date: "November 2025",
    type: "Financial",
    size: "2.4 MB",
    icon: DollarSign,
    gradient: "from-violet-500 to-purple-500",
    status: "Ready",
  },
  {
    id: 2,
    title: "User Growth Analytics",
    description: "User acquisition and retention metrics",
    date: "October 2025",
    type: "Analytics",
    size: "1.8 MB",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
    status: "Ready",
  },
  {
    id: 3,
    title: "Sales Performance Q4",
    description: "Quarterly sales performance review",
    date: "Q4 2025",
    type: "Sales",
    size: "3.2 MB",
    icon: ShoppingCart,
    gradient: "from-green-500 to-emerald-500",
    status: "Ready",
  },
  {
    id: 4,
    title: "Marketing Campaign ROI",
    description: "Campaign effectiveness and ROI analysis",
    date: "September 2025",
    type: "Marketing",
    size: "1.5 MB",
    icon: TrendingUp,
    gradient: "from-orange-500 to-amber-500",
    status: "Ready",
  },
  {
    id: 5,
    title: "Customer Behavior Analysis",
    description: "Deep dive into customer patterns and trends",
    date: "August 2025",
    type: "Analytics",
    size: "2.1 MB",
    icon: FileBarChart,
    gradient: "from-pink-500 to-rose-500",
    status: "Ready",
  },
  {
    id: 6,
    title: "Annual Financial Summary",
    description: "Complete financial overview for 2025",
    date: "December 2025",
    type: "Financial",
    size: "4.7 MB",
    icon: FileSpreadsheet,
    gradient: "from-indigo-500 to-blue-500",
    status: "Generating",
  },
];

// const quickStats = [
//   {
//     label: "Total Reports",
//     value: "47",
//     icon: FileText,
//     gradient: "from-violet-500 to-purple-500",
//   },
//   {
//     label: "Generated This Month",
//     value: "12",
//     icon: Calendar,
//     gradient: "from-blue-500 to-cyan-500",
//   },
//   {
//     label: "Downloads",
//     value: "234",
//     icon: Download,
//     gradient: "from-green-500 to-emerald-500",
//   },
//   {
//     label: "Scheduled",
//     value: "8",
//     icon: Clock,
//     gradient: "from-orange-500 to-amber-500",
//   },
// ];

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            {/* <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 blur-xl opacity-50" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
            </div> */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
              <p className="text-muted-foreground">
                Generate, view, and download comprehensive reports
              </p>
            </div>
          </div>
          <Button className="bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </motion.div>

        {/* Quick Stats */}
        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          {stat.label}
                        </p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div> */}

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Reports"
            value="47"
            change="All time"
            changeType="neutral"
            icon={FileText}
            gradient="from-violet-500 to-purple-500"
          />
          <StatCard
            title="Generated This Month"
            value="12"
            change="+3 from last month"
            changeType="positive"
            icon={Calendar}
            gradient="from-blue-500 to-cyan-500"
          />
          <StatCard
            title="Downloads"
            value="234"
            change="+18% this month"
            changeType="positive"
            icon={Download}
            gradient="from-green-500 to-emerald-500"
          />
          <StatCard
            title="Scheduled"
            value="8"
            change="Active schedules"
            changeType="neutral"
            icon={Clock}
            gradient="from-orange-500 to-amber-500"
          />
        </div>

        {/* Reports List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Reports</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Filter
              </Button>
              <Button variant="outline" size="sm">
                Sort
              </Button>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {reports.map((report, index) => {
              const Icon = report.icon;
              return (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="border-border/40 bg-card/50 backdrop-blur-xl hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div
                            className={`w-12 h-12 rounded-lg bg-linear-to-br ${report.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-base">
                              {report.title}
                            </CardTitle>
                            <CardDescription>
                              {report.description}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge
                          variant={
                            report.status === "Ready" ? "default" : "secondary"
                          }
                          className={
                            report.status === "Ready"
                              ? "bg-green-500/10 text-green-500 border-green-500/20"
                              : "bg-orange-500/10 text-orange-500 border-orange-500/20"
                          }
                        >
                          {report.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{report.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <File className="w-4 h-4" />
                            <span>{report.size}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {report.type}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            disabled={report.status !== "Ready"}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            disabled={report.status !== "Ready"}
                            className="bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scheduled Reports */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>
                Automatically generated reports on schedule
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    name: "Weekly Performance Summary",
                    schedule: "Every Monday 9:00 AM",
                  },
                  {
                    name: "Monthly Financial Report",
                    schedule: "1st of every month",
                  },
                  { name: "Quarterly Review", schedule: "Every 3 months" },
                ].map((scheduled) => (
                  <div
                    key={scheduled.name}
                    className="flex items-center justify-between p-3 rounded-lg border border-border/40 bg-accent/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{scheduled.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {scheduled.schedule}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
