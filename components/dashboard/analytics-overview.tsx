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
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const data = [
  { category: "Direct", value: 3400, color: "rgb(139, 92, 246)" },
  { category: "Organic", value: 2800, color: "rgb(59, 130, 246)" },
  { category: "Referral", value: 2100, color: "rgb(34, 197, 94)" },
  { category: "Social", value: 1900, color: "rgb(251, 146, 60)" },
  { category: "Email", value: 1600, color: "rgb(236, 72, 153)" },
];

export function AnalyticsOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
          <CardDescription>Breakdown of your traffic by source</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={275}>
            <BarChart data={data}>
              <XAxis
                dataKey="category"
                className="text-xs text-muted-foreground"
                stroke="currentColor"
                strokeOpacity={0.2}
              />
              <YAxis
                className="text-xs text-muted-foreground"
                stroke="currentColor"
                strokeOpacity={0.2}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--popover)",
                  borderColor: "var(--border)",
                  borderRadius: "8px",
                  // boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
                cursor={{ fill: "transparent" }}
              />
              <Bar
                dataKey="value"
                radius={[8, 8, 0, 0]}
                animationDuration={1500}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-6 grid grid-cols-5 gap-4">
            {data.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-xs font-medium">{item.category}</p>
                <p className="text-xs text-muted-foreground">
                  {item.value.toLocaleString()}
                </p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
