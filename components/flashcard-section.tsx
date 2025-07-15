"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Eye, ChevronLeft, ChevronRight } from "lucide-react"

interface Flashcard {
  id: string
  front: string
  back: string
  category: string
  difficulty: "Easy" | "Medium" | "Hard"
  lastReviewed: string
  correctCount: number
  totalReviews: number
}

export function FlashcardSection() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([
    {
      id: "1",
      front: "What is the time complexity of binary search?",
      back: "O(log n) - Binary search eliminates half of the remaining elements in each iteration",
      category: "Algorithms",
      difficulty: "Easy",
      lastReviewed: "2024-01-15",
      correctCount: 8,
      totalReviews: 10,
    },
    {
      id: "2",
      front: "Explain the difference between BFS and DFS",
      back: "BFS explores nodes level by level using a queue, while DFS explores as far as possible along each branch using a stack or recursion",
      category: "Graph Theory",
      difficulty: "Medium",
      lastReviewed: "2024-01-14",
      correctCount: 6,
      totalReviews: 8,
    },
    {
      id: "3",
      front: "What is dynamic programming?",
      back: "A method for solving complex problems by breaking them down into simpler subproblems and storing the results to avoid redundant calculations",
      category: "Dynamic Programming",
      difficulty: "Medium",
      lastReviewed: "2024-01-13",
      correctCount: 4,
      totalReviews: 6,
    },
  ])

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isStudyMode, setIsStudyMode] = useState(false)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [newCard, setNewCard] = useState({
    front: "",
    back: "",
    category: "",
    difficulty: "Easy" as Flashcard["difficulty"],
  })

  const categories = Array.from(new Set(flashcards.map((card) => card.category)))
  const filteredCards =
    selectedCategory === "all" ? flashcards : flashcards.filter((card) => card.category === selectedCategory)

  const addFlashcard = () => {
    if (newCard.front.trim() && newCard.back.trim()) {
      const card: Flashcard = {
        id: Date.now().toString(),
        ...newCard,
        lastReviewed: new Date().toISOString().split("T")[0],
        correctCount: 0,
        totalReviews: 0,
      }
      setFlashcards([...flashcards, card])
      setNewCard({
        front: "",
        back: "",
        category: "",
        difficulty: "Easy",
      })
      setIsAddDialogOpen(false)
    }
  }

  const startStudyMode = () => {
    setIsStudyMode(true)
    setCurrentCardIndex(0)
    setShowAnswer(false)
  }

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % filteredCards.length)
    setShowAnswer(false)
  }

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length)
    setShowAnswer(false)
  }

  const markAnswer = (correct: boolean) => {
    const cardId = filteredCards[currentCardIndex].id
    setFlashcards((prev) =>
      prev.map((card) =>
        card.id === cardId
          ? {
              ...card,
              correctCount: correct ? card.correctCount + 1 : card.correctCount,
              totalReviews: card.totalReviews + 1,
              lastReviewed: new Date().toISOString().split("T")[0],
            }
          : card,
      ),
    )
    nextCard()
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

  if (isStudyMode && filteredCards.length > 0) {
    const currentCard = filteredCards[currentCardIndex]

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={() => setIsStudyMode(false)}>
            Exit Study Mode
          </Button>
          <div className="text-sm text-muted-foreground">
            Card {currentCardIndex + 1} of {filteredCards.length}
          </div>
        </div>

        <Card className="min-h-[400px]">
          <CardHeader>
            <div className="flex justify-between items-center">
              <Badge className={getDifficultyColor(currentCard.difficulty)}>{currentCard.difficulty}</Badge>
              <Badge variant="outline">{currentCard.category}</Badge>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center text-center space-y-6">
            <div className="text-lg font-medium">{showAnswer ? currentCard.back : currentCard.front}</div>

            <div className="flex gap-4">
              {!showAnswer ? (
                <Button onClick={() => setShowAnswer(true)}>
                  <Eye className="w-4 h-4 mr-2" />
                  Show Answer
                </Button>
              ) : (
                <div className="flex gap-4">
                  <Button variant="destructive" onClick={() => markAnswer(false)}>
                    Incorrect
                  </Button>
                  <Button variant="default" onClick={() => markAnswer(true)}>
                    Correct
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" onClick={prevCard}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button variant="outline" onClick={nextCard}>
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Flashcards</CardTitle>
              <CardDescription>Create and study flashcards for coding concepts</CardDescription>
            </div>
            <div className="flex gap-2">
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Card
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Flashcard</DialogTitle>
                    <DialogDescription>Add a new flashcard to your study deck</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="front">Front (Question)</Label>
                      <Textarea
                        id="front"
                        value={newCard.front}
                        onChange={(e) => setNewCard({ ...newCard, front: e.target.value })}
                        placeholder="Enter the question or concept"
                      />
                    </div>
                    <div>
                      <Label htmlFor="back">Back (Answer)</Label>
                      <Textarea
                        id="back"
                        value={newCard.back}
                        onChange={(e) => setNewCard({ ...newCard, back: e.target.value })}
                        placeholder="Enter the answer or explanation"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Input
                          id="category"
                          value={newCard.category}
                          onChange={(e) => setNewCard({ ...newCard, category: e.target.value })}
                          placeholder="e.g., Algorithms, Data Structures"
                        />
                      </div>
                      <div>
                        <Label htmlFor="difficulty">Difficulty</Label>
                        <Select
                          value={newCard.difficulty}
                          onValueChange={(value: Flashcard["difficulty"]) =>
                            setNewCard({ ...newCard, difficulty: value })
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
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={addFlashcard}>Create Card</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button onClick={startStudyMode} disabled={filteredCards.length === 0}>
                Start Studying
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCards.map((card) => (
              <Card key={card.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge className={getDifficultyColor(card.difficulty)}>{card.difficulty}</Badge>
                    <Badge variant="outline">{card.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium line-clamp-2">{card.front}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">{card.back}</p>
                    <div className="flex justify-between text-xs text-muted-foreground pt-2">
                      <span>
                        Accuracy:{" "}
                        {card.totalReviews > 0 ? Math.round((card.correctCount / card.totalReviews) * 100) : 0}%
                      </span>
                      <span>Reviews: {card.totalReviews}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCards.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No flashcards found. Create your first flashcard to get started!
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
