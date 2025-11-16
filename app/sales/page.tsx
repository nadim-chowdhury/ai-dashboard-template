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
import {
  AreaChart,
  Area,
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
  ShoppingCart,
  TrendingUp,
  DollarSign,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  Download,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";

const salesData = [
  { month: "Jan", sales: 12500, orders: 245, revenue: 45000 },
  { month: "Feb", sales: 15000, orders: 298, revenue: 52000 },
  { month: "Mar", sales: 13800, orders: 267, revenue: 48000 },
  { month: "Apr", sales: 18500, orders: 356, revenue: 61000 },
  { month: "May", sales: 17200, orders: 321, revenue: 58000 },
  { month: "Jun", sales: 21000, orders: 412, revenue: 70000 },
];

const productData = [
  { name: "Premium Plan", value: 4800, color: "rgb(139, 92, 246)" },
  { name: "Pro Plan", value: 3200, color: "rgb(59, 130, 246)" },
  { name: "Starter Plan", value: 2100, color: "rgb(34, 197, 94)" },
  { name: "Add-ons", value: 1400, color: "rgb(251, 146, 60)" },
];

const topProducts = [
  {
    name: "Enterprise License",
    sales: "$45,280",
    orders: 124,
    growth: "+18.2%",
    trend: "up",
  },
  {
    name: "Pro Subscription",
    sales: "$32,150",
    orders: 289,
    growth: "+12.5%",
    trend: "up",
  },
  {
    name: "Starter Package",
    sales: "$18,920",
    orders: 456,
    growth: "-3.2%",
    trend: "down",
  },
  {
    name: "Premium Add-ons",
    sales: "$15,640",
    orders: 178,
    growth: "+25.8%",
    trend: "up",
  },
];

export default function SalesPage() {
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
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 blur-xl opacity-50" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
            </div> */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Sales</h1>
              <p className="text-muted-foreground">
                Track your sales performance and revenue
              </p>
            </div>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </motion.div>

        {/* Stats Grid */}
        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Total Revenue",
              value: "$92,548",
              change: "+12.5%",
              trend: "up",
              icon: DollarSign,
              gradient: "from-violet-500 to-purple-500",
            },
            {
              label: "Total Orders",
              value: "1,234",
              change: "+8.2%",
              trend: "up",
              icon: ShoppingCart,
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              label: "Avg Order Value",
              value: "$75.02",
              change: "+4.3%",
              trend: "up",
              icon: TrendingUp,
              gradient: "from-green-500 to-emerald-500",
            },
            {
              label: "Products Sold",
              value: "4,892",
              change: "-2.1%",
              trend: "down",
              icon: Package,
              gradient: "from-orange-500 to-amber-500",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border/40 bg-card/50 backdrop-blur-xl hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        {stat.trend === "up" ? (
                          <ArrowUpRight className="w-4 h-4 text-green-500" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-500" />
                        )}
                        <span
                          className={
                            stat.trend === "up"
                              ? "text-green-500"
                              : "text-red-500"
                          }
                        >
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div> */}

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="$92,548"
            change="+12.5%"
            changeType="positive"
            icon={DollarSign}
            gradient="from-violet-500 to-purple-500"
            description="vs last month"
          />
          <StatCard
            title="Total Orders"
            value="1,234"
            change="+8.2%"
            changeType="positive"
            icon={ShoppingCart}
            gradient="from-blue-500 to-cyan-500"
            description="vs last month"
          />
          <StatCard
            title="Avg Order Value"
            value="$75.02"
            change="+4.3%"
            changeType="positive"
            icon={TrendingUp}
            gradient="from-green-500 to-emerald-500"
            description="vs last month"
          />
          <StatCard
            title="Products Sold"
            value="4,892"
            change="-2.1%"
            changeType="negative"
            icon={Package}
            gradient="from-orange-500 to-amber-500"
            description="vs last month"
          />
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>
                    Revenue and order trends over the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <AreaChart data={salesData}>
                      <defs>
                        <linearGradient
                          id="revenueGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgb(139, 92, 246)"
                            stopOpacity={0.4}
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(139, 92, 246)"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <linearGradient
                          id="ordersGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgb(59, 130, 246)"
                            stopOpacity={0.4}
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(59, 130, 246)"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="stroke-border/20"
                      />
                      <XAxis
                        dataKey="month"
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
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="rgb(139, 92, 246)"
                        strokeWidth={2}
                        fill="url(#revenueGrad)"
                        name="Revenue ($)"
                      />
                      <Area
                        type="monotone"
                        dataKey="orders"
                        stroke="rgb(59, 130, 246)"
                        strokeWidth={2}
                        fill="url(#ordersGrad)"
                        name="Orders"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Sales by Product</CardTitle>
                <CardDescription>
                  Revenue distribution by product type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={294}>
                  <PieChart>
                    <Pie
                      data={productData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name.split(" ")[0]} ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {productData.map((entry, index) => (
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
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {productData.map((product) => (
                    <div key={product.name} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: product.color }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {product.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
              <CardDescription>
                Best selling products this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div
                    key={product.name}
                    className="flex items-center justify-between p-4 rounded-lg border border-border/40 bg-accent/20 hover:bg-accent/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-violet-500 to-purple-500 flex items-center justify-center font-bold text-white">
                        #{index + 1}
                      </div>
                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {product.orders} orders
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-bold text-lg">{product.sales}</p>
                        <div className="flex items-center gap-1">
                          {product.trend === "up" ? (
                            <ArrowUpRight className="w-3 h-3 text-green-500" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3 text-red-500" />
                          )}
                          <span
                            className={`text-xs ${
                              product.trend === "up"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {product.growth}
                          </span>
                        </div>
                      </div>
                    </div>
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
