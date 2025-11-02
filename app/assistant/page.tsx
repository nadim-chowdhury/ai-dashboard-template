"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AIAssistant } from "@/components/dashboard/ai-assistant"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Sparkles, MessageSquare, Zap, Brain } from "lucide-react"

export default function AssistantPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 blur-xl opacity-50" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">AI Assistant</h1>
              <p className="text-muted-foreground">
                Your intelligent business assistant
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-violet-500/10 text-violet-500 border-violet-500/20">
            <Brain className="w-3 h-3 mr-1" />
            Powered by AI
          </Badge>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AIAssistant />
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Quick Analysis",
                description: "Get instant insights from your data",
                icon: Zap,
                gradient: "from-orange-500 to-amber-500",
              },
              {
                title: "Smart Suggestions",
                description: "Receive AI-powered recommendations",
                icon: Brain,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Natural Chat",
                description: "Ask questions in plain English",
                icon: MessageSquare,
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{feature.title}</CardTitle>
                          <CardDescription className="text-xs">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
