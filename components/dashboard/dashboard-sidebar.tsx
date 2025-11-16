"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Sparkles,
  FileText,
  Brain,
  TrendingUp,
  Calendar,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Zap,
  Database,
  ShoppingCart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    badge: null,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    badge: "AI",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "AI Insights",
    href: "/insights",
    icon: Brain,
    badge: "New",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Reports",
    href: "/reports",
    icon: FileText,
    badge: null,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Users",
    href: "/users",
    icon: Users,
    badge: "23",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Sales",
    href: "/sales",
    icon: ShoppingCart,
    badge: null,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    name: "Messages",
    href: "/messages",
    icon: MessageSquare,
    badge: "5",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: Calendar,
    badge: null,
    gradient: "from-red-500 to-pink-500",
  },
];

const aiFeatures = [
  {
    name: "Smart Predictions",
    href: "/predictions",
    icon: TrendingUp,
  },
  {
    name: "AI Assistant",
    href: "/assistant",
    icon: Sparkles,
  },
  {
    name: "Data Analysis",
    href: "/analysis",
    icon: Database,
  },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <motion.div
      className={cn(
        "relative h-screen border-r bg-linear-to-br from-background via-background/95 to-background",
        "backdrop-blur-xl transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
      animate={{ width: collapsed ? 64 : 256 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="relative h-full flex flex-col">
        {/* Logo Section */}
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <AnimatePresence mode="wait">
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 h-16"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-violet-500 to-purple-500 blur-lg opacity-50" />
                  <div className="relative w-8 h-8 rounded-lg bg-linear-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-bold bg-linear-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                    NexusAI
                  </h1>
                  <p className="text-[10px] text-muted-foreground">
                    Dashboard Pro
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8 rounded-lg hover:bg-accent/50 transition-all",
              collapsed && "mx-auto"
            )}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        <ScrollArea className="px-2 py-4 h-[calc(100vh-108px)]">
          {/* Main Navigation */}
          <div className="space-y-1">
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2"
                >
                  Main Menu
                </motion.p>
              )}
            </AnimatePresence>

            {navigation.map((item, index) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={item.href}>
                    <div
                      className={cn(
                        "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                        "hover:bg-accent/50 hover:text-accent-foreground",
                        isActive && "bg-accent text-accent-foreground shadow-sm"
                      )}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className={cn(
                            "absolute left-0 top-0 bottom-0 w-1 rounded-r-full",
                            `bg-linear-to-b ${item.gradient}`
                          )}
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}

                      {/* Icon with gradient background */}
                      <div className="relative flex items-center justify-center">
                        {isActive && (
                          <div
                            className={cn(
                              "absolute inset-0 blur-md opacity-40 bg-linear-to-r",
                              item.gradient
                            )}
                          />
                        )}
                        <Icon
                          className={cn(
                            "relative h-5 w-5 transition-transform group-hover:scale-110",
                            isActive && "text-primary"
                          )}
                        />
                      </div>

                      <AnimatePresence mode="wait">
                        {!collapsed && (
                          <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            className="flex items-center justify-between flex-1 overflow-hidden"
                          >
                            <span className="truncate">{item.name}</span>
                            {item.badge && (
                              <Badge
                                variant={
                                  item.badge === "AI" ? "default" : "secondary"
                                }
                                className="ml-auto h-5 px-1.5 text-[10px] font-medium"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <Separator className="my-4 bg-border/40" />

          {/* AI Features Section */}
          <div className="space-y-1">
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2"
                >
                  <Sparkles className="w-3 h-3" />
                  AI Powered
                </motion.p>
              )}
            </AnimatePresence>

            {aiFeatures.map((item, index) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <Link href={item.href}>
                    <div
                      className={cn(
                        "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                        "hover:bg-linear-to-r hover:from-violet-500/10 hover:to-purple-500/10",
                        isActive &&
                          "bg-linear-to-r from-violet-500/10 to-purple-500/10"
                      )}
                    >
                      <Icon className="h-5 w-5 text-violet-500 transition-transform group-hover:scale-110" />

                      <AnimatePresence mode="wait">
                        {!collapsed && (
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            className="truncate"
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </ScrollArea>

        {/* Bottom Section */}
        <div className="border-t border-border/40">
          <Link href="/settings">
            <div className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent/50 transition-all">
              <Settings className="h-5 w-5 transition-transform group-hover:rotate-90 duration-300" />
              <AnimatePresence mode="wait">
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                  >
                    Settings
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
