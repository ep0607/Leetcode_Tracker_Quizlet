"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, CheckCircle, Clock, Brain } from "lucide-react"

export function StatsOverview() {
  const stats = [
    {
      title: "Problems Solved",
      value: "127",
      change: "+12 this week",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "Current Streak",
      value: "8 days",
      change: "Personal best: 15 days",
      icon: TrendingUp,
      color: "text-blue-600",
    },
    {
      title: "Study Time",
      value: "24.5h",
      change: "This month",
      icon: Clock,
      color: "text-purple-600",
    },
    {
      title: "Flashcards Mastered",
      value: "89",
      change: "+7 this week",
      icon: Brain,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Problem Difficulty Breakdown</CardTitle>
            <CardDescription>Your progress across different difficulty levels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Easy</span>
                <Badge variant="secondary">67/150</Badge>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Medium</span>
                <Badge variant="secondary">45/300</Badge>
              </div>
              <Progress value={15} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Hard</span>
                <Badge variant="secondary">15/200</Badge>
              </div>
              <Progress value={7.5} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest study sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Solved "Two Sum"</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <Badge variant="outline">Easy</Badge>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Reviewed Binary Tree flashcards</p>
                  <p className="text-xs text-muted-foreground">4 hours ago</p>
                </div>
                <Badge variant="outline">Flashcards</Badge>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Solved "Longest Palindromic Substring"</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
                <Badge variant="outline">Medium</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
