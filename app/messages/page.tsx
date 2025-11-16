"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  Search,
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Phone,
  Video,
} from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/avatar-1.jpg",
    lastMessage: "Thanks for the update!",
    time: "2m ago",
    unread: 3,
    online: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/avatar-2.jpg",
    lastMessage: "Can we schedule a call?",
    time: "15m ago",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "Emma Williams",
    avatar: "/avatar-3.jpg",
    lastMessage: "Perfect, see you then!",
    time: "1h ago",
    unread: 1,
    online: false,
  },
  {
    id: 4,
    name: "Alex Martinez",
    avatar: "/avatar-4.jpg",
    lastMessage: "The report looks great",
    time: "3h ago",
    unread: 0,
    online: true,
  },
  {
    id: 5,
    name: "Olivia Brown",
    avatar: "/avatar-5.jpg",
    lastMessage: "I'll send the files over",
    time: "1d ago",
    unread: 0,
    online: false,
  },
];

const messages = [
  {
    id: 1,
    sender: "Sarah Johnson",
    content: "Hey! How are you doing?",
    time: "10:30 AM",
    isMine: false,
  },
  {
    id: 2,
    sender: "Me",
    content: "Hi Sarah! I'm doing great, thanks for asking. How about you?",
    time: "10:32 AM",
    isMine: true,
  },
  {
    id: 3,
    sender: "Sarah Johnson",
    content:
      "I'm good! I wanted to follow up on the project we discussed yesterday.",
    time: "10:33 AM",
    isMine: false,
  },
  {
    id: 4,
    sender: "Me",
    content:
      "Of course! I've made some progress. Let me share the latest updates with you.",
    time: "10:35 AM",
    isMine: true,
  },
  {
    id: 5,
    sender: "Sarah Johnson",
    content: "Thanks for the update!",
    time: "10:37 AM",
    isMine: false,
  },
];

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          {/* <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-teal-500 to-cyan-500 blur-xl opacity-50" />
            <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
          </div> */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
            <p className="text-muted-foreground">Chat with your team members</p>
          </div>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-border/40 bg-card/50 backdrop-blur-xl overflow-hidden py-0">
            <div className="grid lg:grid-cols-[350px_1fr] h-[600px]">
              {/* Conversations List */}
              <div className="border-r border-border/40">
                <div className="p-[18px] border-b border-border/40">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search conversations..."
                      className="pl-10 bg-accent/50 border-border/40"
                    />
                  </div>
                </div>
                <ScrollArea className="h-[calc(600px-73px)]">
                  <div className="p-2 space-y-1">
                    {conversations.map((conv, index) => (
                      <motion.div
                        key={conv.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        onClick={() => setSelectedChat(conv)}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedChat.id === conv.id
                            ? "bg-accent"
                            : "hover:bg-accent/50"
                        }`}
                      >
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={conv.avatar} alt={conv.name} />
                            <AvatarFallback className="bg-linear-to-br from-violet-500 to-purple-500 text-white">
                              {conv.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {conv.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold truncate">
                              {conv.name}
                            </p>
                            <span className="text-xs text-muted-foreground">
                              {conv.time}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground truncate">
                              {conv.lastMessage}
                            </p>
                            {conv.unread > 0 && (
                              <Badge className="ml-2 bg-linear-to-r from-violet-500 to-purple-500 text-white border-0">
                                {conv.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Chat Area */}
              <div className="flex flex-col">
                {/* Chat Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/40">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          src={selectedChat.avatar}
                          alt={selectedChat.name}
                        />
                        <AvatarFallback className="bg-linear-to-br from-violet-500 to-purple-500 text-white">
                          {selectedChat.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {selectedChat.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{selectedChat.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {selectedChat.online ? "Active now" : "Offline"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((msg, index) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        className={`flex gap-3 ${
                          msg.isMine ? "flex-row-reverse" : ""
                        }`}
                      >
                        {!msg.isMine && (
                          <Avatar className="w-8 h-8 shrink-0">
                            <AvatarImage
                              src={selectedChat.avatar}
                              alt={msg.sender}
                            />
                            <AvatarFallback className="bg-linear-to-br from-violet-500 to-purple-500 text-white text-xs">
                              {msg.sender
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`max-w-[70%] ${
                            msg.isMine ? "items-end" : "items-start"
                          }`}
                        >
                          <div
                            className={`rounded-2xl px-4 py-2 ${
                              msg.isMine
                                ? "bg-linear-to-r from-violet-500 to-purple-500 text-white"
                                : "bg-accent"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">
                              {msg.content}
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 px-2">
                            {msg.time}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Message Input */}
                <div className="p-4 border-t border-border/40">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <Paperclip className="w-5 h-5" />
                    </Button>
                    <Input
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-accent/50 border-border/40"
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && messageInput.trim()) {
                          // Handle send
                          setMessageInput("");
                        }
                      }}
                    />
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <Smile className="w-5 h-5" />
                    </Button>
                    <Button
                      size="icon"
                      className="shrink-0 bg-linear-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600"
                      disabled={!messageInput.trim()}
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
