"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Target, AlertCircle, Sparkles } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";

const predictionData = [
  { month: "Jan", actual: 45000, predicted: 44500, confidence: 95 },
  { month: "Feb", actual: 52000, predicted: 51800, confidence: 94 },
  { month: "Mar", actual: 48000, predicted: 49200, confidence: 92 },
  { month: "Apr", actual: 61000, predicted: 60500, confidence: 96 },
  { month: "May", actual: 58000, predicted: 59000, confidence: 93 },
  { month: "Jun", actual: 70000, predicted: 69500, confidence: 95 },
  { month: "Jul", actual: null, predicted: 72000, confidence: 91 },
  { month: "Aug", actual: null, predicted: 78000, confidence: 88 },
  { month: "Sep", actual: null, predicted: 82000, confidence: 85 },
];

const churnRiskData = [
  { week: "W1", risk: 12, retained: 88 },
  { week: "W2", risk: 15, retained: 85 },
  { week: "W3", risk: 11, retained: 89 },
  { week: "W4", risk: 18, retained: 82 },
  { week: "W5", risk: 14, retained: 86 },
  { week: "W6", risk: 16, retained: 84 },
];

const insights = [
  {
    title: "Revenue Forecast",
    description: "Expected to reach $82K by September",
    impact: "High",
    confidence: 85,
    icon: TrendingUp,
    gradient: "from-violet-500 to-purple-500",
    trend: "up",
    value: "+17%",
  },
  {
    title: "Churn Risk Alert",
    description: "14 users showing high churn indicators",
    impact: "Medium",
    confidence: 78,
    icon: AlertCircle,
    gradient: "from-orange-500 to-red-500",
    trend: "down",
    value: "14 users",
  },
  {
    title: "Growth Opportunity",
    description: "Premium tier adoption predicted to increase",
    impact: "High",
    confidence: 92,
    icon: Target,
    gradient: "from-green-500 to-emerald-500",
    trend: "up",
    value: "+23%",
  },
  {
    title: "Performance Boost",
    description: "System efficiency improvements detected",
    impact: "Low",
    confidence: 88,
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
    trend: "up",
    value: "+12%",
  },
];

export default function InsightsPage() {
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
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 blur-xl opacity-50" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
            </div> */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">AI Insights</h1>
              <p className="text-muted-foreground">
                Predictive analytics and smart recommendations
              </p>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="bg-pink-500/10 text-pink-500 border-pink-500/20"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            AI Powered
          </Badge>
        </motion.div>

        {/* AI Insights Cards */}
        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border/40 bg-card/50 backdrop-blur-xl hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${insight.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          insight.impact === "High"
                            ? "bg-red-500/10 text-red-500 border-red-500/20"
                            : insight.impact === "Medium"
                            ? "bg-orange-500/10 text-orange-500 border-orange-500/20"
                            : "bg-green-500/10 text-green-500 border-green-500/20"
                        }`}
                      >
                        {insight.impact}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="font-semibold">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {insight.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1">
                        {insight.trend === "up" ? (
                          <ArrowUpRight className="w-4 h-4 text-green-500" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-500" />
                        )}
                        <span
                          className={`font-semibold ${
                            insight.trend === "up"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {insight.value}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {insight.confidence}% confidence
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div> */}

        {/* AI Insights Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Revenue Forecast"
            value="$82K"
            change="+17%"
            changeType="positive"
            icon={TrendingUp}
            gradient="from-violet-500 to-purple-500"
            description={`${insights[0].confidence}% confidence · ${insights[0].impact} impact`}
          />
          <StatCard
            title="Churn Risk Alert"
            value="14 users"
            change="High Risk"
            changeType="negative"
            icon={AlertCircle}
            gradient="from-orange-500 to-red-500"
            description={`${insights[1].confidence}% confidence · ${insights[1].impact} impact`}
          />
          <StatCard
            title="Growth Opportunity"
            value="+23%"
            change="Premium Tier"
            changeType="positive"
            icon={Target}
            gradient="from-green-500 to-emerald-500"
            description={`${insights[2].confidence}% confidence · ${insights[2].impact} impact`}
          />
          <StatCard
            title="Performance Boost"
            value="+12%"
            change="Efficiency"
            changeType="positive"
            icon={Zap}
            gradient="from-blue-500 to-cyan-500"
            description={`${insights[3].confidence}% confidence · ${insights[3].impact} impact`}
          />
        </div>

        {/* Prediction Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Revenue Prediction</CardTitle>
                    <CardDescription>
                      AI-powered revenue forecasting with confidence intervals
                    </CardDescription>
                  </div>
                  <Badge variant="outline">Next 3 Months</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={predictionData}>
                    <defs>
                      <linearGradient
                        id="actualGradient"
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
                        id="predictedGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="rgb(236, 72, 153)"
                          stopOpacity={0.4}
                        />
                        <stop
                          offset="100%"
                          stopColor="rgb(236, 72, 153)"
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
                      tickFormatter={(value) =>
                        `$${(value / 1000).toFixed(0)}k`
                      }
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
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="actual"
                      stroke="rgb(139, 92, 246)"
                      strokeWidth={2}
                      fill="url(#actualGradient)"
                      name="Actual Revenue"
                    />
                    <Area
                      type="monotone"
                      dataKey="predicted"
                      stroke="rgb(236, 72, 153)"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      fill="url(#predictedGradient)"
                      name="Predicted Revenue"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Churn Risk Analysis</CardTitle>
                    <CardDescription>
                      User retention and churn prediction trends
                    </CardDescription>
                  </div>
                  <Badge variant="outline">Last 6 Weeks</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={churnRiskData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="stroke-border/20"
                    />
                    <XAxis
                      dataKey="week"
                      className="text-xs"
                      stroke="currentColor"
                      strokeOpacity={0.2}
                    />
                    <YAxis
                      className="text-xs"
                      stroke="currentColor"
                      strokeOpacity={0.2}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--popover)",
                        borderColor: "var(--border)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                      // formatter={(value: number) => [`${value}%`, ""]}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="risk"
                      stroke="rgb(239, 68, 68)"
                      strokeWidth={2}
                      dot={{ fill: "rgb(239, 68, 68)", r: 4 }}
                      name="Churn Risk"
                    />
                    <Line
                      type="monotone"
                      dataKey="retained"
                      stroke="rgb(34, 197, 94)"
                      strokeWidth={2}
                      dot={{ fill: "rgb(34, 197, 94)", r: 4 }}
                      name="Retention Rate"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
              <CardDescription>
                Actionable insights based on your data patterns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Optimize Premium Tier Pricing",
                  description:
                    "Our analysis shows 23% of free users are ready to upgrade. Consider a limited-time offer to boost conversions.",
                  priority: "High",
                  color: "violet",
                },
                {
                  title: "Focus on Customer Retention",
                  description:
                    "14 high-value customers show churn signals. Immediate outreach recommended with personalized retention offers.",
                  priority: "Critical",
                  color: "red",
                },
                {
                  title: "Expand Marketing in Q3",
                  description:
                    "Market conditions are favorable. Predicted 35% ROI increase with expanded summer campaigns.",
                  priority: "Medium",
                  color: "blue",
                },
              ].map((rec, index) => (
                <motion.div
                  key={rec.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border/40 bg-accent/20 hover:bg-accent/30 transition-colors"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-linear-to-br from-${rec.color}-500 to-${rec.color}-600 flex items-center justify-center shrink-0`}
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{rec.title}</h3>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          rec.priority === "Critical"
                            ? "bg-red-500/10 text-red-500 border-red-500/20"
                            : rec.priority === "High"
                            ? "bg-orange-500/10 text-orange-500 border-orange-500/20"
                            : "bg-blue-500/10 text-blue-500 border-blue-500/20"
                        }`}
                      >
                        {rec.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {rec.description}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Take Action
                  </Button>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
