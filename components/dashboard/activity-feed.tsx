"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  UserPlus,
  ShoppingCart,
  TrendingUp,
  FileText,
  CreditCard,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    user: "Sarah Nadimson",
    action: "made a purchase",
    target: "Premium Plan",
    time: "2 minutes ago",
    icon: ShoppingCart,
    gradient: "from-green-500 to-emerald-500",
    avatar: "/avatar-1.jpg",
    amount: "$299",
  },
  {
    id: 2,
    user: "Michael Chen",
    action: "signed up",
    target: "New Account",
    time: "15 minutes ago",
    icon: UserPlus,
    gradient: "from-blue-500 to-cyan-500",
    avatar: "/avatar-2.jpg",
  },
  {
    id: 3,
    user: "Emma Williams",
    action: "generated report",
    target: "Q4 Analytics",
    time: "1 hour ago",
    icon: FileText,
    gradient: "from-orange-500 to-amber-500",
    avatar: "/avatar-3.jpg",
  },
  {
    id: 4,
    user: "Alex Martinez",
    action: "updated payment",
    target: "Card ending in 4242",
    time: "2 hours ago",
    icon: CreditCard,
    gradient: "from-purple-500 to-pink-500",
    avatar: "/avatar-4.jpg",
  },
  {
    id: 5,
    user: "Olivia Brown",
    action: "reached milestone",
    target: "$10,000 in sales",
    time: "3 hours ago",
    icon: TrendingUp,
    gradient: "from-violet-500 to-purple-500",
    avatar: "/avatar-5.jpg",
    badge: "Milestone",
  },
  {
    id: 6,
    user: "James Wilson",
    action: "changed settings",
    target: "Notification preferences",
    time: "5 hours ago",
    icon: Settings,
    gradient: "from-gray-500 to-slate-500",
    avatar: "/avatar-6.jpg",
  },
];

export function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <Card className="border-border/40 bg-card/50 backdrop-blur-xl h-[500px] flex flex-col gap-0">
        <CardHeader className="border-b border-border/40">
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest actions from your team and customers
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[375px]">
            <div className="p-4 space-y-1">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer group"
                  >
                    {/* User Avatar */}
                    <Avatar className="w-10 h-10 shrink-0 ring-2 ring-border/40 ring-offset-2 ring-offset-background">
                      <AvatarImage src={activity.avatar} alt={activity.user} />
                      <AvatarFallback className="bg-linear-to-br from-violet-500 to-purple-500 text-white text-sm">
                        {activity.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    {/* Content */}
                    <div className="flex-1 space-y-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm leading-relaxed">
                          <span className="font-semibold">{activity.user}</span>{" "}
                          <span className="text-muted-foreground">
                            {activity.action}
                          </span>{" "}
                          <span className="font-medium">{activity.target}</span>
                        </p>
                        {activity.amount && (
                          <Badge
                            variant="secondary"
                            className="shrink-0 bg-green-500/10 text-green-500 border-green-500/20"
                          >
                            {activity.amount}
                          </Badge>
                        )}
                        {activity.badge && (
                          <Badge
                            variant="secondary"
                            className="shrink-0 bg-violet-500/10 text-violet-500 border-violet-500/20"
                          >
                            {activity.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>

                    {/* Icon */}
                    <div className="relative shrink-0">
                      <div
                        className={cn(
                          "absolute inset-0 blur-lg opacity-0 group-hover:opacity-40 transition-opacity bg-linear-to-r",
                          activity.gradient
                        )}
                      />
                      <div
                        className={cn(
                          "relative w-8 h-8 rounded-lg bg-linear-to-br flex items-center justify-center",
                          activity.gradient
                        )}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </motion.div>
  );
}
