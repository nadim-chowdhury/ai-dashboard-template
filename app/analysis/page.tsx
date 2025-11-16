"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { AnalyticsOverview } from "@/components/dashboard/analytics-overview";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AnalysisPage() {
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
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 blur-xl opacity-50" />
              <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
            </div> */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Data Analysis
              </h1>
              <p className="text-muted-foreground">
                Deep insights into your business metrics
              </p>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="bg-blue-500/10 text-blue-500 border-blue-500/20"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            AI Enhanced
          </Badge>
        </motion.div>

        <div className="grid gap-6">
          <RevenueChart />
          <AnalyticsOverview />
        </div>
      </div>
    </DashboardLayout>
  );
}
