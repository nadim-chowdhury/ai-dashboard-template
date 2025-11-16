"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", revenue: 45000, expenses: 28000 },
  { month: "Feb", revenue: 52000, expenses: 32000 },
  { month: "Mar", revenue: 48000, expenses: 29000 },
  { month: "Apr", revenue: 61000, expenses: 35000 },
  { month: "May", revenue: 58000, expenses: 33000 },
  { month: "Jun", revenue: 70000, expenses: 38000 },
  { month: "Jul", revenue: 68000, expenses: 36000 },
  { month: "Aug", revenue: 75000, expenses: 40000 },
  { month: "Sep", revenue: 82000, expenses: 42000 },
  { month: "Oct", revenue: 78000, expenses: 41000 },
  { month: "Nov", revenue: 85000, expenses: 43000 },
  { month: "Dec", revenue: 92000, expenses: 45000 },
];

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>
                Your revenue and expenses for the last 12 months
              </CardDescription>
            </div>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-linear-to-r from-violet-500 to-purple-500" />
                <span className="text-muted-foreground">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-linear-to-r from-blue-500 to-cyan-500" />
                <span className="text-muted-foreground">Expenses</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={data}>
              <defs>
                <linearGradient
                  id="revenueGradient"
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
                  id="expensesGradient"
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
                className="text-xs text-muted-foreground"
                stroke="currentColor"
                strokeOpacity={0.2}
              />
              <YAxis
                className="text-xs text-muted-foreground"
                stroke="currentColor"
                strokeOpacity={0.2}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--popover)",
                  borderColor: "var(--border)",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
                // formatter={(value: number) => [
                //   `$${value.toLocaleString()}`,
                //   "",
                // ]}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="rgb(139, 92, 246)"
                strokeWidth={2}
                fill="url(#revenueGradient)"
                animationDuration={1500}
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke="rgb(59, 130, 246)"
                strokeWidth={2}
                fill="url(#expensesGradient)"
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}
