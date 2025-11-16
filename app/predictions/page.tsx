"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { AIAssistant } from "@/components/dashboard/ai-assistant";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const data = [
  { month: "Jan", value: 4000, predicted: null },
  { month: "Feb", value: 3000, predicted: null },
  { month: "Mar", value: 5000, predicted: null },
  { month: "Apr", value: 4500, predicted: null },
  { month: "May", value: 6000, predicted: null },
  { month: "Jun", value: 5500, predicted: 5800 },
  { month: "Jul", value: null, predicted: 6200 },
  { month: "Aug", value: null, predicted: 6800 },
  { month: "Sep", value: null, predicted: 7200 },
];

export default function PredictionsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            {/* <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 blur-xl opacity-50" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div> */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Smart Predictions
              </h1>
              <p className="text-muted-foreground">
                AI-powered forecasts and predictions
              </p>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="bg-violet-500/10 text-violet-500 border-violet-500/20"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            AI Powered
          </Badge>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Revenue Forecast</CardTitle>
                <CardDescription>
                  Predicted revenue for the next 3 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="stroke-border/20"
                    />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="rgb(139, 92, 246)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="predicted"
                      stroke="rgb(236, 72, 153)"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          <AIAssistant />
        </div>
      </div>
    </DashboardLayout>
  );
}
