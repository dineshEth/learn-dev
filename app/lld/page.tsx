"use client";

import Link from "next/link";

export default function LLDPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card-bg border-b border-card-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">
                <span className="text-lld">Learn</span>
                <span className="text-hld">Dev</span>
              </h1>
            </Link>
            <nav className="flex gap-6">
              <Link href="/lld" className="font-medium text-lld border-b-2 border-lld pb-1">LLD</Link>
              <Link href="/hld" className="font-medium text-text-secondary hover:text-hld transition-colors">HLD</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-lld mb-4">Low-Level Design</h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Master the fundamentals of software design at the component level.
            </p>
          </div>

          {/* Topic Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-lld bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-lld text-3xl font-bold">C</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Classes & Objects</h2>
              <p className="text-text-muted mb-6">
                Understand the building blocks of OOP: classes, objects, inheritance, polymorphism, encapsulation, and abstraction.
              </p>
              <Link
                href="/lld/classes"
                className="inline-block px-6 py-3 bg-lld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Explore Classes →
              </Link>
            </div>

            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-lld bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-lld text-3xl font-bold">D</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Design Patterns</h2>
              <p className="text-text-muted mb-6">
                Learn reusable solutions to common design problems: Singleton, Factory, Observer, Strategy, and more.
              </p>
              <Link
                href="/lld/patterns"
                className="inline-block px-6 py-3 bg-lld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Explore Patterns →
              </Link>
            </div>

            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-lld bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-lld text-3xl font-bold">S</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">SOLID Principles</h2>
              <p className="text-text-muted mb-6">
                Write maintainable and scalable code with Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.
              </p>
              <Link
                href="/lld/solid"
                className="inline-block px-6 py-3 bg-lld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Explore SOLID →
              </Link>
            </div>

            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-lld bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-lld text-3xl font-bold">U</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">UML Diagrams</h2>
              <p className="text-text-muted mb-6">
                Visualize your designs with class diagrams, sequence diagrams, use case diagrams, and activity diagrams.
              </p>
              <Link
                href="/lld/uml"
                className="inline-block px-6 py-3 bg-lld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Explore UML →
              </Link>
            </div>
          </div>

          {/* Visualization Section */}
          <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-card-border">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-2">Interactive LLD Visualizations</h2>
              <p className="text-text-muted">
                Visual representations to help you understand LLD concepts better.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="font-bold text-text-primary mb-2">Class Diagram</h3>
                <p className="text-sm text-text-muted mb-4">
                  Visualize class relationships and inheritance hierarchies.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-48 flex items-center justify-center text-text-muted">
                  <p>Class Diagram Visualization</p>
                </div>
              </div>
              <div className="bg-white dark:bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="font-bold text-text-primary mb-2">Sequence Diagram</h3>
                <p className="text-sm text-text-muted mb-4">
                  Understand object interactions over time.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-48 flex items-center justify-center text-text-muted">
                  <p>Sequence Diagram Visualization</p>
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
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
