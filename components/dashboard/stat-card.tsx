"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string
  change: string
  changeType: "positive" | "negative" | "neutral"
  icon: LucideIcon
  gradient: string
  description?: string
  trend?: ReactNode
}

export function StatCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  gradient,
  description,
  trend,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/40 bg-card/50 backdrop-blur-xl">
        {/* Background gradient */}
        <div
          className={cn(
            "absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl transition-opacity group-hover:opacity-20",
            `bg-gradient-to-br ${gradient}`
          )}
        />

        <div className="relative p-6 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-bold tracking-tight">{value}</h3>
                <span
                  className={cn(
                    "text-sm font-medium",
                    changeType === "positive" && "text-green-500",
                    changeType === "negative" && "text-red-500",
                    changeType === "neutral" && "text-muted-foreground"
                  )}
                >
                  {change}
                </span>
              </div>
              {description && (
                <p className="text-xs text-muted-foreground">{description}</p>
              )}
            </div>

            {/* Icon */}
            <div className="relative">
              <div
                className={cn(
                  "absolute inset-0 blur-xl opacity-40 bg-gradient-to-br",
                  gradient
                )}
              />
              <div
                className={cn(
                  "relative w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center",
                  gradient,
                  "group-hover:scale-110 transition-transform duration-300"
                )}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Trend */}
          {trend && (
            <div className="pt-2 border-t border-border/40">
              {trend}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
