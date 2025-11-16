"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Bell,
  Settings,
  User,
  Moon,
  Sun,
  LogOut,
  CreditCard,
  Users,
  Command,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const notifications = [
  {
    id: 1,
    title: "AI Prediction Complete",
    description: "Your sales forecast for Q1 is ready",
    time: "2m ago",
    icon: Sparkles,
    gradient: "from-violet-500 to-purple-500",
    unread: true,
  },
  {
    id: 2,
    title: "New User Signup",
    description: "5 new users registered today",
    time: "1h ago",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
    unread: true,
  },
  {
    id: 3,
    title: "Revenue Milestone",
    description: "You've reached $50,000 in revenue",
    time: "3h ago",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
    unread: false,
  },
  {
    id: 4,
    title: "Performance Alert",
    description: "Server response time improved by 40%",
    time: "5h ago",
    icon: Zap,
    gradient: "from-orange-500 to-amber-500",
    unread: false,
  },
];

export function DashboardHeader() {
  const { theme, setTheme } = useTheme();
  const [unreadCount] = useState(2);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60"
    >
      <div className="flex h-16 border-b items-center justify-between gap-4 px-6">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <Input
              type="search"
              placeholder="Search or press ⌘K..."
              className={cn(
                "w-full pl-10 pr-4 h-10 bg-accent/50 border-border/40",
                "focus:bg-background focus:ring-2 focus:ring-primary/20",
                "transition-all duration-200"
              )}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border/40 bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <Command className="h-3 w-3" />K
              </kbd>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="relative h-9 w-9 rounded-lg hover:bg-accent/50"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Notifications */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative h-9 w-9 rounded-lg hover:bg-accent/50"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-linear-to-r from-red-500 to-pink-500 text-[10px] font-bold text-white flex items-center justify-center shadow-lg"
                  >
                    {unreadCount}
                  </motion.span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="flex items-center justify-between p-4 border-b border-border/40">
                <div>
                  <h3 className="font-semibold">Notifications</h3>
                  <p className="text-xs text-muted-foreground">
                    You have {unreadCount} unread messages
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  Mark all read
                </Button>
              </div>
              <ScrollArea className="h-[400px]">
                <div className="p-2 space-y-1">
                  {notifications.map((notification) => {
                    const Icon = notification.icon;
                    return (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={cn(
                          "flex gap-3 rounded-lg p-3 transition-colors cursor-pointer",
                          "hover:bg-accent/50",
                          notification.unread && "bg-accent/30"
                        )}
                      >
                        <div className="relative shrink-0">
                          <div
                            className={cn(
                              "absolute inset-0 blur-md opacity-40 bg-linear-to-r",
                              notification.gradient
                            )}
                          />
                          <div
                            className={cn(
                              "relative w-10 h-10 rounded-lg bg-linear-to-br flex items-center justify-center",
                              notification.gradient
                            )}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-medium leading-none">
                              {notification.title}
                            </p>
                            {notification.unread && (
                              <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {notification.description}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {notification.time}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </ScrollArea>
              <div className="border-t border-border/40 p-2">
                <Button
                  variant="ghost"
                  className="w-full justify-center"
                  size="sm"
                >
                  View all notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Separator orientation="vertical" className="h-6 bg-border/40" />

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-9 w-9 rounded-lg hover:bg-accent/50 p-0"
              >
                <Avatar className="h-9 w-9 ring-2 ring-border/40 ring-offset-2 ring-offset-background">
                  <AvatarImage src="/avatar.jpg" alt="User" />
                  <AvatarFallback className="bg-linear-to-r from-violet-500 to-purple-500 text-white font-semibold">
                    JD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john.doe@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
}
