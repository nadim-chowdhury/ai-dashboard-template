"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"
import {
  Users,
  UserPlus,
  Search,
  MoreVertical,
  Mail,
  Phone,
  Shield,
  Ban,
  Edit,
  Trash,
  Crown,
} from "lucide-react"

const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    role: "Admin",
    status: "Active",
    plan: "Enterprise",
    avatar: "/avatar-1.jpg",
    joined: "Jan 15, 2024",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@example.com",
    role: "User",
    status: "Active",
    plan: "Pro",
    avatar: "/avatar-2.jpg",
    joined: "Feb 3, 2024",
    lastActive: "5 minutes ago",
  },
  {
    id: 3,
    name: "Emma Williams",
    email: "emma.w@example.com",
    role: "User",
    status: "Active",
    plan: "Pro",
    avatar: "/avatar-3.jpg",
    joined: "Mar 22, 2024",
    lastActive: "1 day ago",
  },
  {
    id: 4,
    name: "Alex Martinez",
    email: "alex.m@example.com",
    role: "Moderator",
    status: "Active",
    plan: "Pro",
    avatar: "/avatar-4.jpg",
    joined: "Apr 10, 2024",
    lastActive: "3 hours ago",
  },
  {
    id: 5,
    name: "Olivia Brown",
    email: "olivia.b@example.com",
    role: "User",
    status: "Inactive",
    plan: "Free",
    avatar: "/avatar-5.jpg",
    joined: "May 5, 2024",
    lastActive: "2 weeks ago",
  },
  {
    id: 6,
    name: "James Wilson",
    email: "james.w@example.com",
    role: "User",
    status: "Active",
    plan: "Free",
    avatar: "/avatar-6.jpg",
    joined: "Jun 18, 2024",
    lastActive: "1 hour ago",
  },
]

const stats = [
  {
    label: "Total Users",
    value: "2,845",
    change: "+12.5%",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    label: "Active Today",
    value: "1,234",
    change: "+8.2%",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    label: "New This Week",
    value: "156",
    change: "+23.1%",
    icon: UserPlus,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    label: "Premium Users",
    value: "892",
    change: "+15.3%",
    icon: Crown,
    gradient: "from-orange-500 to-amber-500",
  },
]

export default function UsersPage() {
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 blur-xl opacity-50" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Users</h1>
              <p className="text-muted-foreground">
                Manage and monitor your user base
              </p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
            <UserPlus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs text-green-500">{stat.change}</p>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-border/40 bg-card/50 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Users</CardTitle>
                  <CardDescription>
                    A complete list of all registered users
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search users..."
                      className="pl-10 w-[300px] bg-accent/50 border-border/40"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user, index) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="group"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10 ring-2 ring-border/40 ring-offset-2 ring-offset-background">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-500 text-white">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            user.role === "Admin"
                              ? "border-red-500/20 bg-red-500/10 text-red-500"
                              : user.role === "Moderator"
                              ? "border-blue-500/20 bg-blue-500/10 text-blue-500"
                              : "border-gray-500/20 bg-gray-500/10 text-gray-500"
                          }
                        >
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={user.status === "Active" ? "default" : "secondary"}
                          className={
                            user.status === "Active"
                              ? "bg-green-500/10 text-green-500 border-green-500/20"
                              : "bg-gray-500/10 text-gray-500 border-gray-500/20"
                          }
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            user.plan === "Enterprise"
                              ? "border-purple-500/20 bg-purple-500/10 text-purple-500"
                              : user.plan === "Pro"
                              ? "border-blue-500/20 bg-blue-500/10 text-blue-500"
                              : "border-gray-500/20 bg-gray-500/10 text-gray-500"
                          }
                        >
                          {user.plan}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {user.joined}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {user.lastActive}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              Send Email
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit User
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Shield className="mr-2 h-4 w-4" />
                              Change Role
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-orange-600">
                              <Ban className="mr-2 h-4 w-4" />
                              Suspend User
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash className="mr-2 h-4 w-4" />
                              Delete User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
