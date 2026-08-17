"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { AnimateIn } from "@/components/animate-in"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle2, ChevronRight, Activity, BrainCircuit, Rocket } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { industries, Industry, QuizQuestion, getQuestionsForIndustry, getSummaryByScore } from "./quiz-data"

export default function AIReadinessQuiz() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Small delay to ensure we are mounted on client before rendering to avoid hydration mismatch
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  const handleIndustrySelect = (industry: Industry) => {
    setSelectedIndustry(industry)
    setQuestions(getQuestionsForIndustry(industry))
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
  }

  const handleSelect = (questionId: number, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }))
    
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1)
      } else {
        // Save to localStorage
        const totalScore = Object.values({ ...answers, [questionId]: score }).reduce((a, b) => a + b, 0)
        const resultData = {
          industry: selectedIndustry,
          answers: { ...answers, [questionId]: score },
          questions: questions,
          score: totalScore,
          date: new Date().toISOString()
        }
        try {
          localStorage.setItem('widle_ai_quiz_results', JSON.stringify(resultData))
        } catch (e) {
          console.error("Failed to save quiz results", e)
        }
        setShowResults(true)
      }
    }, 400)
  }

  const calculateScore = () => {
    return Object.values(answers).reduce((acc, curr) => acc + curr, 0)
  }

  const renderIndustrySelection = () => {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-sm">
        <div className="mb-8 mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm font-medium text-muted-foreground gap-4">
          <span>Step 1 of 2: Industry Selection</span>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Tailored AI Assessment</span>
        </div>

        <h3 className="text-2xl font-semibold mb-3">
          Select Your Industry
        </h3>
        <p className="text-muted-foreground mb-8">
          Choose the industry that best matches your organization to receive customized questions and recommendations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industries.map((industry, idx) => (
            <button
              key={idx}
              onClick={() => handleIndustrySelect(industry)}
              className="text-left p-4 rounded-xl border-2 border-border hover:border-primary/40 hover:bg-muted/50 transition-all duration-200 flex items-center justify-between group"
            >
              <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                {industry}
              </span>
              <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" />
            </button>
          ))}
        </div>
      </div>
    )
  }

  const renderQuestions = () => {
    if (!questions.length) return null

    return (
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="mb-8 mt-2 flex justify-between items-center text-sm font-medium text-muted-foreground">
          <span>Question {currentStep + 1} of {questions.length}</span>
          <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Completed</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-8">
              {questions[currentStep].question}
            </h3>

            <div className="space-y-4">
              {questions[currentStep].options.map((option, idx) => {
                const isSelected = answers[questions[currentStep].id] === option.score
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(questions[currentStep].id, option.score)}
                    className={cn(
                      "w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group",
                      isSelected
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-border hover:border-primary/40 hover:bg-muted/50"
                    )}
                  >
                    <span className={cn(
                      "text-lg",
                      isSelected ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"
                    )}>
                      {option.text}
                    </span>
                    {isSelected ? (
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 ml-4" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" />
                    )}
                  </button>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    )
  }

  const renderResult = () => {
    const totalScore = calculateScore()
    const summary = getSummaryByScore(totalScore)
    
    let Icon = Activity
    let colorClass = "text-blue-500 bg-blue-500/10 border-blue-500/20"

    if (totalScore > 24) {
      Icon = Rocket
      colorClass = "text-purple-500 bg-purple-500/10 border-purple-500/20"
    } else if (totalScore > 16) {
      Icon = BrainCircuit
      colorClass = "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
    }

    return (
      <AnimateIn direction="up">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg text-center">
            <div className={cn("inline-flex p-4 rounded-2xl mb-6 border", colorClass)}>
              <Icon className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold mb-4">{summary.title}</h2>
            <div className="inline-block bg-muted px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-border">
              Industry: {selectedIndustry}
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              {summary.description}
            </p>
            <div className="bg-muted p-6 rounded-xl text-left mb-8 border border-border/50">
              <h4 className="font-semibold mb-2">Our Recommendation:</h4>
              <p className="text-muted-foreground">{summary.recommendation}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              Discuss Your Results with an Expert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Your Assessment Summary</h3>
            <div className="space-y-6">
              {questions.map((q, idx) => {
                const selectedScore = answers[q.id]
                const selectedOption = q.options.find(opt => opt.score === selectedScore)

                return (
                  <div key={q.id} className="pb-6 border-b border-border last:border-0 last:pb-0">
                    <p className="font-medium mb-2 text-foreground">
                      <span className="text-muted-foreground mr-2">{idx + 1}.</span>
                      {q.question}
                    </p>
                    <div className="flex items-start gap-2 text-muted-foreground bg-muted/50 p-3 rounded-lg border border-border/50">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{selectedOption?.text || "No answer recorded"}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </AnimateIn>
    )
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {!showResults && (
            <SectionHeader
              eyebrow="Assessment"
              headline="Enterprise AI Readiness Quiz"
              subtext="Take this comprehensive assessment to evaluate your organization's infrastructure and discover the best path forward for your AI initiatives."
            />
          )}

          <div className="mt-12">
            {!selectedIndustry && !showResults && renderIndustrySelection()}
            {selectedIndustry && !showResults && renderQuestions()}
            {showResults && renderResult()}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { AnimateIn } from "@/components/animate-in"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle2, ChevronRight, Activity, BrainCircuit, Rocket } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const questions = [
  {
    id: 1,
    question: "How would you describe your organization's current data infrastructure?",
    options: [
      { text: "Data is siloed across different departments and hard to access.", score: 1 },
      { text: "We have centralized databases/warehouses, but data quality is inconsistent.", score: 2 },
      { text: "We have clean, unified data pipelines (e.g., Snowflake, BigQuery) ready for analysis.", score: 3 },
    ]
  },
  {
    id: 2,
    question: "What is your primary goal for adopting Artificial Intelligence?",
    options: [
      { text: "We're just exploring; we want to see what's possible.", score: 1 },
      { text: "Automating internal workflows and reducing operational costs.", score: 2 },
      { text: "Building custom, core-product AI features (e.g., predictive models, computer vision).", score: 3 },
    ]
  },
  {
    id: 3,
    question: "Does your organization currently have in-house technical talent?",
    options: [
      { text: "No dedicated software engineering or data science team.", score: 1 },
      { text: "We have software engineers, but no specialized AI/ML talent.", score: 2 },
      { text: "We have an internal data science team looking to scale and deploy models faster.", score: 3 },
    ]
  },
  {
    id: 4,
    question: "What is your timeline for implementing an AI solution?",
    options: [
      { text: "12+ months (Researching)", score: 1 },
      { text: "3-6 months (Planning)", score: 2 },
      { text: "Immediate (Ready to build)", score: 3 },
    ]
  }
]

export default function AIReadinessQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (questionId: number, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }))

    // Automatically advance to the next step after a short delay
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1)
      } else {
        setShowResults(true)
      }
    }, 400)
  }

  const calculateScore = () => {
    return Object.values(answers).reduce((acc, curr) => acc + curr, 0)
  }

  const renderResult = () => {
    const totalScore = calculateScore()

    let profile = {
      title: "",
      icon: Activity,
      description: "",
      recommendation: "",
      color: ""
    }

    if (totalScore <= 6) {
      profile = {
        title: "Foundation Phase",
        icon: Activity,
        color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
        description: "Your organization is at the beginning of its AI journey. The immediate focus should be on digital transformation, data centralization, and identifying high-value use cases.",
        recommendation: "We recommend starting with an AI Strategy Consulting session. Widle.ai can help audit your existing infrastructure and create a roadmap to make your data 'AI-ready'."
      }
    } else if (totalScore <= 9) {
      profile = {
        title: "Pilot & Integration Phase",
        icon: BrainCircuit,
        color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
        description: "Your data infrastructure is maturing, and you have clear goals. You are perfectly positioned to build and deploy your first major AI implementation.",
        recommendation: "We recommend focusing on high-ROI automation or Internal Tooling. Widle.ai can help you deploy custom LLM wrappers, Retool dashboards, or predictive models to prove value quickly."
      }
    } else {
      profile = {
        title: "Enterprise Scaling Phase",
        icon: Rocket,
        color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
        description: "You have strong technical foundations and immediate, complex needs. Your challenge isn't 'if' AI works, but how to deploy it reliably at scale.",
        recommendation: "You are ready for advanced Cloud-Native Architectures and MLOps. Widle.ai can partner with your engineering team to build fault-tolerant inference pipelines, custom Computer Vision models, or Agentic RAG systems."
      }
    }

    const Icon = profile.icon

    return (
      <AnimateIn direction="up">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-lg text-center">
          <div className={cn("inline-flex p-4 rounded-2xl mb-6 border", profile.color)}>
            <Icon className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">{profile.title}</h2>
          <p className="text-lg text-muted-foreground mb-6">
            {profile.description}
          </p>
          <div className="bg-muted p-6 rounded-xl text-left mb-8 border border-border/50">
            <h4 className="font-semibold mb-2">Our Recommendation:</h4>
            <p className="text-muted-foreground">{profile.recommendation}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
          >
            Discuss Your Results with an Expert
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </AnimateIn>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {!showResults && (
            <SectionHeader
              eyebrow="Assessment"
              headline="Enterprise AI Readiness Quiz"
              subtext="Take this 2-minute assessment to evaluate your organization's infrastructure and discover the best path forward for your AI initiatives."
            />
          )}

          <div className="mt-12">
            {showResults ? (
              renderResult()
            ) : (
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-muted">
                  <div
                    className="h-full bg-primary transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>

                <div className="mb-8 mt-2 flex justify-between items-center text-sm font-medium text-muted-foreground">
                  <span>Question {currentStep + 1} of {questions.length}</span>
                  <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Completed</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-semibold mb-8">
                      {questions[currentStep].question}
                    </h3>

                    <div className="space-y-4">
                      {questions[currentStep].options.map((option, idx) => {
                        const isSelected = answers[questions[currentStep].id] === option.score
                        return (
                          <button
                            key={idx}
                            onClick={() => handleSelect(questions[currentStep].id, option.score)}
                            className={cn(
                              "w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group",
                              isSelected
                                ? "border-primary bg-primary/5 shadow-md"
                                : "border-border hover:border-primary/40 hover:bg-muted/50"
                            )}
                          >
                            <span className={cn(
                              "text-lg",
                              isSelected ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"
                            )}>
                              {option.text}
                            </span>
                            {isSelected ? (
                              <CheckCircle2 className="h-6 w-6 text-primary shrink-0 ml-4" />
                            ) : (
                              <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" />
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
