"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { LeetCodeTracker } from "@/components/leetcode-tracker"
import { FlashcardSection } from "@/components/flashcard-section"
import { StatsOverview } from "@/components/stats-overview"
import { Code, BookOpen, BarChart3, Target } from "lucide-react"

export default function StudyTrackerApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Study Tracker Pro</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track your LeetCode progress and master concepts with flashcards
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="leetcode" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              LeetCode
            </TabsTrigger>
            <TabsTrigger value="flashcards" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Flashcards
            </TabsTrigger>
            <TabsTrigger value="goals" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Goals
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <StatsOverview />
          </TabsContent>

          <TabsContent value="leetcode">
            <LeetCodeTracker />
          </TabsContent>

          <TabsContent value="flashcards">
            <FlashcardSection />
          </TabsContent>

          <TabsContent value="goals">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Study Goals</CardTitle>
                  <CardDescription>Set and track your coding interview preparation goals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Daily LeetCode Problems</span>
                      <span>2/3</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Weekly Flashcard Reviews</span>
                      <span>15/20</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Monthly Problem Target</span>
                      <span>45/60</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
