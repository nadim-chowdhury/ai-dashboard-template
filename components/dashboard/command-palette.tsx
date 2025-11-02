"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  FileText,
  Brain,
  TrendingUp,
  Calendar,
  MessageSquare,
  ShoppingCart,
  Sparkles,
  Database,
  Moon,
  Sun,
  LogOut,
} from "lucide-react"
import { useTheme } from "next-themes"

const pages = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "AI Insights", href: "/insights", icon: Brain },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Users", href: "/users", icon: Users },
  { name: "Sales", href: "/sales", icon: ShoppingCart },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Settings", href: "/settings", icon: Settings },
]

const actions = [
  { name: "View Predictions", href: "/predictions", icon: TrendingUp },
  { name: "AI Assistant", href: "/assistant", icon: Sparkles },
  { name: "Data Analysis", href: "/analysis", icon: Database },
]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { setTheme } = useTheme()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = (callback: () => void) => {
    setOpen(false)
    callback()
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Pages">
          {pages.map((page) => {
            const Icon = page.icon
            return (
              <CommandItem
                key={page.href}
                onSelect={() => handleSelect(() => router.push(page.href))}
                className="cursor-pointer"
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{page.name}</span>
              </CommandItem>
            )
          })}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="AI Features">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <CommandItem
                key={action.href}
                onSelect={() => handleSelect(() => router.push(action.href))}
                className="cursor-pointer"
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{action.name}</span>
              </CommandItem>
            )
          })}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => handleSelect(() => setTheme("light"))} className="cursor-pointer">
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect(() => setTheme("dark"))} className="cursor-pointer">
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Account">
          <CommandItem onSelect={() => handleSelect(() => router.push("/settings"))} className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect(() => console.log("Logout"))} className="cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
