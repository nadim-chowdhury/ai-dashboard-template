"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Plus,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  Video,
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Team Meeting",
    date: "Nov 15, 2025",
    time: "10:00 AM",
    duration: "1 hour",
    type: "meeting",
    attendees: 8,
    location: "Conference Room A",
    color: "violet",
  },
  {
    id: 2,
    title: "Product Demo",
    date: "Nov 15, 2025",
    time: "2:00 PM",
    duration: "45 min",
    type: "demo",
    attendees: 12,
    location: "Virtual",
    color: "blue",
  },
  {
    id: 3,
    title: "Client Call",
    date: "Nov 16, 2025",
    time: "11:00 AM",
    duration: "30 min",
    type: "call",
    attendees: 3,
    location: "Virtual",
    color: "green",
  },
  {
    id: 4,
    title: "Design Review",
    date: "Nov 16, 2025",
    time: "3:00 PM",
    duration: "2 hours",
    type: "review",
    attendees: 6,
    location: "Design Studio",
    color: "orange",
  },
  {
    id: 5,
    title: "1:1 with Sarah",
    date: "Nov 17, 2025",
    time: "9:00 AM",
    duration: "30 min",
    type: "meeting",
    attendees: 2,
    location: "Virtual",
    color: "pink",
  },
];

const upcomingEvents = events.slice(0, 3);

export default function CalendarPage() {
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
              <div className="absolute inset-0 bg-linear-to-r from-red-500 to-pink-500 blur-xl opacity-50" />
              <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-red-500 to-pink-500 flex items-center justify-center">
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
            </div> */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
              <p className="text-muted-foreground">
                Manage your schedule and upcoming events
              </p>
            </div>
          </div>
          <Button className="bg-linear-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
            <Plus className="w-4 h-4 mr-2" />
            New Event
          </Button>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>November 2025</CardTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button variant="outline">Today</Button>
                      <Button variant="outline" size="icon">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center text-sm font-semibold text-muted-foreground p-2"
                        >
                          {day}
                        </div>
                      )
                    )}
                    {Array.from({ length: 35 }, (_, i) => {
                      const day = i - 2;
                      const isToday = day === 15;
                      const hasEvent = day === 15 || day === 16 || day === 17;
                      return (
                        <div
                          key={i}
                          className={`aspect-square p-2 rounded-lg border border-border/40 hover:border-primary/50 transition-colors cursor-pointer ${
                            day < 1 || day > 30
                              ? "bg-muted/20 text-muted-foreground/50"
                              : "bg-accent/20 hover:bg-accent/30"
                          } ${isToday ? "ring-2 ring-primary/40" : ""}`}
                        >
                          <div className="text-sm font-medium">
                            {day > 0 && day <= 30 ? day : ""}
                          </div>
                          {hasEvent && (
                            <div className="flex gap-0.5 mt-1">
                              <div className="w-1 h-1 rounded-full bg-violet-500" />
                              <div className="w-1 h-1 rounded-full bg-blue-500" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>
                  Your schedule for the next few days
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-lg border border-border/40 bg-accent/20 hover:bg-accent/30 transition-colors cursor-pointer space-y-2"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-linear-to-br from-${event.color}-500 to-${event.color}-600 flex items-center justify-center shrink-0`}
                        >
                          <CalendarIcon className="w-5 h-5 text-white" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-semibold">{event.title}</h4>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{event.attendees}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            {event.location === "Virtual" ? (
                              <Video className="w-3 h-3" />
                            ) : (
                              <MapPin className="w-3 h-3" />
                            )}
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {event.duration}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* All Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle>All Events</CardTitle>
              <CardDescription>
                Complete list of your scheduled events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border/40 bg-accent/20 hover:bg-accent/30 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-linear-to-br from-${event.color}-500 to-${event.color}-600 flex items-center justify-center`}
                      >
                        <CalendarIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{event.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span>{event.date}</span>
                          <span>{event.time}</span>
                          <div className="flex items-center gap-1">
                            {event.location === "Virtual" ? (
                              <Video className="w-3 h-3" />
                            ) : (
                              <MapPin className="w-3 h-3" />
                            )}
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{event.duration}</Badge>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
