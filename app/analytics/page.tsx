"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { motion } from "framer-motion";
import {
  Users,
  Eye,
  MousePointer,
  Clock,
  Download,
  Share2,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";

const lineData = [
  { date: "Jan 1", users: 4000, sessions: 2400, pageViews: 2400 },
  { date: "Jan 8", users: 3000, sessions: 1398, pageViews: 2210 },
  { date: "Jan 15", users: 2000, sessions: 9800, pageViews: 2290 },
  { date: "Jan 22", users: 2780, sessions: 3908, pageViews: 2000 },
  { date: "Jan 29", users: 1890, sessions: 4800, pageViews: 2181 },
  { date: "Feb 5", users: 2390, sessions: 3800, pageViews: 2500 },
  { date: "Feb 12", users: 3490, sessions: 4300, pageViews: 2100 },
];

const pieData = [
  { name: "Desktop", value: 4400, color: "rgb(139, 92, 246)" },
  { name: "Mobile", value: 3000, color: "rgb(59, 130, 246)" },
  { name: "Tablet", value: 2000, color: "rgb(34, 197, 94)" },
];

const barData = [
  { page: "/home", visitors: 4000, bounceRate: 24 },
  { page: "/products", visitors: 3000, bounceRate: 13 },
  { page: "/about", visitors: 2000, bounceRate: 38 },
  { page: "/contact", visitors: 2780, bounceRate: 39 },
  { page: "/blog", visitors: 1890, bounceRate: 48 },
];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">
              Comprehensive insights into your application performance
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </motion.div>

        {/* Quick Stats */}
        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Total Users",
              value: "24,532",
              change: "+12.3%",
              trend: "up",
              icon: Users,
              gradient: "from-violet-500 to-purple-500",
            },
            {
              title: "Page Views",
              value: "156,234",
              change: "+8.1%",
              trend: "up",
              icon: Eye,
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              title: "Avg. Session",
              value: "4m 32s",
              change: "-2.4%",
              trend: "down",
              icon: Clock,
              gradient: "from-orange-500 to-amber-500",
            },
            {
              title: "Click Rate",
              value: "3.24%",
              change: "+0.5%",
              trend: "up",
              icon: MousePointer,
              gradient: "from-green-500 to-emerald-500",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <div
                      className={`w-10 h-10 rounded-lg bg-linear-to-br ${stat.gradient} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="flex items-center gap-1 text-xs mt-1">
                      {stat.trend === "up" ? (
                        <>
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          <span className="text-green-500">{stat.change}</span>
                        </>
                      ) : (
                        <>
                          <TrendingDown className="w-3 h-3 text-red-500" />
                          <span className="text-red-500">{stat.change}</span>
                        </>
                      )}
                      <span className="text-muted-foreground">
                        vs last period
                      </span>
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
            title="Total Users"
            value="24,532"
            change="+12.3%"
            changeType="positive"
            icon={Users}
            gradient="from-violet-500 to-purple-500"
            description="vs last period"
          />
          <StatCard
            title="Page Views"
            value="156,234"
            change="+8.1%"
            changeType="positive"
            icon={Eye}
            gradient="from-blue-500 to-cyan-500"
            description="vs last period"
          />
          <StatCard
            title="Avg. Session"
            value="4m 32s"
            change="-2.4%"
            changeType="negative"
            icon={Clock}
            gradient="from-orange-500 to-amber-500"
            description="vs last period"
          />
          <StatCard
            title="Click Rate"
            value="3.24%"
            change="+0.5%"
            changeType="positive"
            icon={MousePointer}
            gradient="from-green-500 to-emerald-500"
            description="vs last period"
          />
        </div>

        {/* Main Charts */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
            <TabsTrigger value="pages">Top Pages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>User Activity</CardTitle>
                      <CardDescription>
                        Daily active users and sessions over time
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">Last 7 days</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={lineData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="stroke-border/20"
                      />
                      <XAxis
                        dataKey="date"
                        className="text-xs"
                        stroke="currentColor"
                        strokeOpacity={0.2}
                      />
                      <YAxis
                        className="text-xs"
                        stroke="currentColor"
                        strokeOpacity={0.2}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--popover)",
                          borderColor: "var(--border)",
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="users"
                        stroke="rgb(139, 92, 246)"
                        strokeWidth={2}
                        dot={{ fill: "rgb(139, 92, 246)" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="sessions"
                        stroke="rgb(59, 130, 246)"
                        strokeWidth={2}
                        dot={{ fill: "rgb(59, 130, 246)" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="traffic" className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle>Device Distribution</CardTitle>
                    <CardDescription>
                      Traffic breakdown by device type
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "var(--popover)",
                            borderColor: "var(--border)",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                          }}
                        />
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                          }
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "var(--popover)",
                            borderColor: "var(--border)",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle>Traffic Growth</CardTitle>
                    <CardDescription>Page views trend analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={lineData}>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "var(--popover)",
                            borderColor: "var(--border)",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                          }}
                        />
                        <defs>
                          <linearGradient
                            id="colorPageViews"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="rgb(34, 197, 94)"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="rgb(34, 197, 94)"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          className="stroke-border/20"
                        />
                        <XAxis
                          dataKey="date"
                          className="text-xs"
                          stroke="currentColor"
                          strokeOpacity={0.2}
                        />
                        <YAxis
                          className="text-xs"
                          stroke="currentColor"
                          strokeOpacity={0.2}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "var(--popover)",
                            borderColor: "var(--border)",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="pageViews"
                          stroke="rgb(34, 197, 94)"
                          fillOpacity={1}
                          fill="url(#colorPageViews)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="pages" className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Top Performing Pages</CardTitle>
                  <CardDescription>
                    Most visited pages and their bounce rates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={barData}>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--popover)",
                          borderColor: "var(--border)",
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        }}
                        cursor={{ fill: "transparent" }}
                      />
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="stroke-border/20"
                      />
                      <XAxis
                        dataKey="page"
                        className="text-xs"
                        stroke="currentColor"
                        strokeOpacity={0.2}
                      />
                      <YAxis
                        className="text-xs"
                        stroke="currentColor"
                        strokeOpacity={0.2}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--popover)",
                          borderColor: "var(--border)",
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="visitors"
                        fill="rgb(139, 92, 246)"
                        radius={[8, 8, 0, 0]}
                      />
                      <Bar
                        dataKey="bounceRate"
                        fill="rgb(239, 68, 68)"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
