"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Plus, CheckCircle, Clock, X } from "lucide-react"

interface Problem {
  id: string
  title: string
  difficulty: "Easy" | "Medium" | "Hard"
  topic: string
  status: "Solved" | "Attempted" | "Todo"
  notes: string
  dateAdded: string
}

export function LeetCodeTracker() {
  const [problems, setProblems] = useState<Problem[]>([
    {
      id: "1",
      title: "Two Sum",
      difficulty: "Easy",
      topic: "Array",
      status: "Solved",
      notes: "Used hash map approach for O(n) solution",
      dateAdded: "2024-01-15",
    },
    {
      id: "2",
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      topic: "String",
      status: "Solved",
      notes: "Expand around centers approach",
      dateAdded: "2024-01-14",
    },
    {
      id: "3",
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      topic: "Linked List",
      status: "Attempted",
      notes: "Need to review divide and conquer approach",
      dateAdded: "2024-01-13",
    },
  ])

  const [filterDifficulty, setFilterDifficulty] = useState<string>("all")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newProblem, setNewProblem] = useState({
    title: "",
    difficulty: "Easy" as Problem["difficulty"],
    topic: "",
    status: "Todo" as Problem["status"],
    notes: "",
  })

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch =
      problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.topic.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = filterDifficulty === "all" || problem.difficulty === filterDifficulty
    const matchesStatus = filterStatus === "all" || problem.status === filterStatus

    return matchesSearch && matchesDifficulty && matchesStatus
  })

  const addProblem = () => {
    if (newProblem.title.trim()) {
      const problem: Problem = {
        id: Date.now().toString(),
        ...newProblem,
        dateAdded: new Date().toISOString().split("T")[0],
      }
      setProblems([...problems, problem])
      setNewProblem({
        title: "",
        difficulty: "Easy",
        topic: "",
        status: "Todo",
        notes: "",
      })
      setIsAddDialogOpen(false)
    }
  }

  const updateProblemStatus = (id: string, status: Problem["status"]) => {
    setProblems(problems.map((p) => (p.id === id ? { ...p, status } : p)))
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Solved":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "Attempted":
        return <Clock className="w-4 h-4 text-yellow-600" />
      default:
        return <X className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>LeetCode Problem Tracker</CardTitle>
              <CardDescription>Track your coding problem solving progress</CardDescription>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Problem
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Problem</DialogTitle>
                  <DialogDescription>Add a new LeetCode problem to track</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Problem Title</Label>
                    <Input
                      id="title"
                      value={newProblem.title}
                      onChange={(e) => setNewProblem({ ...newProblem, title: e.target.value })}
                      placeholder="e.g., Two Sum"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="difficulty">Difficulty</Label>
                      <Select
                        value={newProblem.difficulty}
                        onValueChange={(value: Problem["difficulty"]) =>
                          setNewProblem({ ...newProblem, difficulty: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Easy">Easy</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select
                        value={newProblem.status}
                        onValueChange={(value: Problem["status"]) => setNewProblem({ ...newProblem, status: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Todo">Todo</SelectItem>
                          <SelectItem value="Attempted">Attempted</SelectItem>
                          <SelectItem value="Solved">Solved</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="topic">Topic</Label>
                    <Input
                      id="topic"
                      value={newProblem.topic}
                      onChange={(e) => setNewProblem({ ...newProblem, topic: e.target.value })}
                      placeholder="e.g., Array, String, Dynamic Programming"
                    />
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      value={newProblem.notes}
                      onChange={(e) => setNewProblem({ ...newProblem, notes: e.target.value })}
                      placeholder="Add any notes about your approach or solution"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={addProblem}>Add Problem</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Input
              placeholder="Search problems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
              <SelectTrigger className="w-full sm:w-[140px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Todo">Todo</SelectItem>
                <SelectItem value="Attempted">Attempted</SelectItem>
                <SelectItem value="Solved">Solved</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {filteredProblems.map((problem) => (
              <div
                key={problem.id}
                className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getStatusIcon(problem.status)}
                      <h3 className="font-semibold">{problem.title}</h3>
                      <Badge className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</Badge>
                      <Badge variant="outline">{problem.topic}</Badge>
                    </div>
                    {problem.notes && <p className="text-sm text-muted-foreground mb-2">{problem.notes}</p>}
                    <p className="text-xs text-muted-foreground">Added: {problem.dateAdded}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={problem.status === "Attempted" ? "default" : "outline"}
                      onClick={() => updateProblemStatus(problem.id, "Attempted")}
                    >
                      Attempted
                    </Button>
                    <Button
                      size="sm"
                      variant={problem.status === "Solved" ? "default" : "outline"}
                      onClick={() => updateProblemStatus(problem.id, "Solved")}
                    >
                      Solved
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
