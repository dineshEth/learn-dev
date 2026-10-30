"use client";

import Link from "next/link";
import {
  Code2,
  Cpu,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Network,
  GraduationCap,
  Lightbulb,
  Server,
  FileText,
} from "lucide-react";

export default function LLDPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card-bg border-b border-card-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-lld" />
              <h1 className="text-2xl font-bold">
                <span className="text-lld">Learn</span>
                <span className="text-hld">Dev</span>
              </h1>
            </Link>
            <nav className="flex gap-6">
              <Link href="/lld" className="font-medium text-lld border-b-2 border-lld pb-1 inline-flex items-center gap-1">
                <Cpu className="w-4 h-4" /> LLD
              </Link>
              <Link href="/hld" className="font-medium text-text-secondary hover:text-hld transition-colors inline-flex items-center gap-1">
                <Server className="w-4 h-4" /> HLD
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-lld bg-opacity-10 rounded-2xl flex items-center justify-center">
                <Cpu className="w-10 h-10 text-lld" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-lld mb-4">Low-Level Design</h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Master the fundamentals of software design at the component level.
            </p>
          </div>

          {/* Topic Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-lld bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lld group-hover:bg-opacity-20 transition-colors">
                <Code2 className="w-7 h-7 text-lld group-hover:text-lld group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Classes & Objects</h2>
              <p className="text-text-muted mb-6">
                Understand the building blocks of OOP: classes, objects, inheritance, polymorphism, encapsulation, and abstraction.
              </p>
              <Link
                href="/lld/classes"
                className="inline-block px-6 py-3 bg-lld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore Classes <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-lld bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lld group-hover:bg-opacity-20 transition-colors">
                <Network className="w-7 h-7 text-lld group-hover:text-lld group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Design Patterns</h2>
              <p className="text-text-muted mb-6">
                Learn reusable solutions to common design problems: Singleton, Factory, Observer, Strategy, and more.
              </p>
              <Link
                href="/lld/patterns"
                className="inline-block px-6 py-3 bg-lld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore Patterns <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-lld bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lld group-hover:bg-opacity-20 transition-colors">
                <GraduationCap className="w-7 h-7 text-lld group-hover:text-lld group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">SOLID Principles</h2>
              <p className="text-text-muted mb-6">
                Write maintainable and scalable code with Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.
              </p>
              <Link
                href="/lld/solid"
                className="inline-block px-6 py-3 bg-lld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore SOLID <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-lld bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lld group-hover:bg-opacity-20 transition-colors">
                <FileText className="w-7 h-7 text-lld group-hover:text-lld group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">UML Diagrams</h2>
              <p className="text-text-muted mb-6">
                Visualize your designs with class diagrams, sequence diagrams, use case diagrams, and activity diagrams.
              </p>
              <Link
                href="/lld/uml"
                className="inline-block px-6 py-3 bg-lld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore UML <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Visualization Section */}
          <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-card-border">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-2 inline-flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-lld" />
                Interactive LLD Visualizations
              </h2>
              <p className="text-text-muted">
                Visual representations to help you understand LLD concepts better.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="font-bold text-text-primary mb-2 inline-flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-lld" />
                  Class Diagram
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  Visualize class relationships and inheritance hierarchies.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-48 flex items-center justify-center text-text-muted">
                  <Network className="w-12 h-12 opacity-50" />
                </div>
              </div>
              <div className="bg-white dark:bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="font-bold text-text-primary mb-2 inline-flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-lld" />
                  Sequence Diagram
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  Understand object interactions over time.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-48 flex items-center justify-center text-text-muted">
                  <Cpu className="w-12 h-12 opacity-50" />
                </div>
              </div>
            </div>
          </section>

          {/* Back Link */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-lld transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
