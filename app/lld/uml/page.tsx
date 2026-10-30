"use client";

import Link from "next/link";

export default function UmlPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card-bg border-b border-card-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">
                  <span className="text-lld">Learn</span>
                  <span className="text-hld">Dev</span>
                </h1>
              </Link>
              <span className="text-text-muted">/ LLD / UML Diagrams</span>
            </div>
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
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Link href="/lld" className="hover:text-lld transition-colors">LLD</Link>
              <span>/</span>
              <span className="text-text-primary font-medium">UML Diagrams</span>
            </div>
          </nav>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-black text-lld mb-4">UML Diagrams</h1>
            <p className="text-xl text-text-secondary">
              Unified Modeling Language for visualizing, specifying, constructing, and documenting software systems.
            </p>
          </div>

          {/* Diagram Types */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8">Types of UML Diagrams</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Class Diagram */}
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center">
                    <span className="text-lld font-bold text-sm">CD</span>
                  </div>
                  <h3 className="text-lg font-bold text-lld">Class Diagram</h3>
                </div>
                <p className="text-sm text-text-muted mb-4">
                  Shows the static structure of a system: classes, interfaces, associations, and inheritance relationships.
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-card-border">
                  <pre className="text-xs whitespace-pre-wrap">
{`+----------------+       +----------------+       +----------------+
|     Animal     |       |      Dog       |       |      Cat       |
+----------------+       +----------------+       +----------------+
| - name: String |       | - breed: String|       | - age: Number  |
+----------------+       +----------------+       +----------------+
| + speak(): void|       | + speak(): void|       | + speak(): void|
+----------------+       | + fetch(): void|       +----------------+
       ^                  +----------------+              ^
       |                         ^                     |
       +-------------------------+---------------------+
                     Inheritance / Extension`}
                  </pre>
                </div>
                <p className="text-xs text-text-muted mt-4"><strong>Use Case:</strong> OOP design, database schema design</p>
              </div>

              {/* Sequence Diagram */}
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center">
                    <span className="text-lld font-bold text-sm">SD</span>
                  </div>
                  <h3 className="text-lg font-bold text-lld">Sequence Diagram</h3>
                </div>
                <p className="text-sm text-text-muted mb-4">
                  Shows how objects interact in a time-ordered sequence. Illustrates the flow of messages between objects.
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-card-border">
                  <pre className="text-xs whitespace-pre-wrap">
{`User       :Customer      :Order        :Payment
  |            |             |              |
  |--&gt;Login--&gt;|             |              |
  |            |--&gt;Create--&gt;|              |
  |            |            |--&gt;Process--&gt;|
  |            |            |&lt;--Success--|
  |            |&lt;--Confirm-|              |
  |&lt;--Receipt-|             |              |
  |            |             |              |`}
                  </pre>
                </div>
                <p className="text-xs text-text-muted mt-4"><strong>Use Case:</strong> Understanding object interactions, debugging</p>
              </div>

              {/* Use Case Diagram */}
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center">
                    <span className="text-lld font-bold text-sm">UCD</span>
                  </div>
                  <h3 className="text-lg font-bold text-lld">Use Case Diagram</h3>
                </div>
                <p className="text-sm text-text-muted mb-4">
                  Describes the functionality of a system from the user's perspective. Shows actors and their interactions with the system.
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-card-border">
                  <pre className="text-xs whitespace-pre-wrap">
{`      +-----------+       +----------------+
      |   User    |       |   Admin        |
      +-----------+       +----------------+
           |                     |
           | Place Order         | Manage Products
           v                     v
      +-----------+       +----------------+
      | Place     |       | Manage         |
      | Order     |       | Products       |
      +-----------+       +----------------+
           |
           | View Status
           v
      +-----------+
      | View      |
      | Order     |
      +-----------+`}
                  </pre>
                </div>
                <p className="text-xs text-text-muted mt-4"><strong>Use Case:</strong> Requirement analysis, system feature documentation</p>
              </div>

              {/* Activity Diagram */}
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center">
                    <span className="text-lld font-bold text-sm">AD</span>
                  </div>
                  <h3 className="text-lg font-bold text-lld">Activity Diagram</h3>
                </div>
                <p className="text-sm text-text-muted mb-4">
                  Represents workflows of stepwise activities and actions in a system. Similar to flowcharts.
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-card-border">
                  <pre className="text-xs whitespace-pre-wrap">
{`      +------+     +--------+     +-------+
      | Start|----&gt;| Login  |----&gt;|Home   |
      +------+     +--------+     +-------+
                           |
                           v
                     +------------+ 
                     | Validate   | 
                     | Credentials|
                     +------------+
                           |
          +----------------+----------------+
          |                |                |
    +-----------+ +---------+ +------------+
    | Success   | | Retry   | | Account    |
    | Path      | | Path    | | Locked     |
    +-----------+ +---------+ +------------+`}
                  </pre>
                </div>
                <p className="text-xs text-text-muted mt-4"><strong>Use Case:</strong> Business process modeling, workflow design</p>
              </div>

              {/* State Diagram */}
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center">
                    <span className="text-lld font-bold text-sm">STD</span>
                  </div>
                  <h3 className="text-lg font-bold text-lld">State Diagram</h3>
                </div>
                <p className="text-sm text-text-muted mb-4">
                  Shows how an object changes state in response to events. Represents the lifecycle of an object.
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-card-border">
                  <pre className="text-xs whitespace-pre-wrap">
{`      +-----------+     +------------+     +-----------+
      |           |     |            |     |           |
      |   Idle    |----&gt;| Processing |----&gt;|  Complete |
      |           |     |            |     |           |
      +-----------+     +------------+     +-----------+
          ^                    |                |
          |                    |                |
          +--------------------+                |
                      Error / Retry            |
                   +--------------------------+
                            |
                    +------------------+
                    |     Failed       |
                    +------------------+`}
                  </pre>
                </div>
                <p className="text-xs text-text-muted mt-4"><strong>Use Case:</strong> Object lifecycle modeling, state management</p>
              </div>

              {/* Component Diagram */}
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center">
                    <span className="text-lld font-bold text-sm">COMP</span>
                  </div>
                  <h3 className="text-lg font-bold text-lld">Component Diagram</h3>
                </div>
                <p className="text-sm text-text-muted mb-4">
                  Shows the physical components of a system (files, libraries, modules) and their dependencies.
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-card-border">
                  <pre className="text-xs whitespace-pre-wrap">
{`      +--------------+     +---------------+     +------------+
      |   Frontend  |     |    Backend    |     |  Database  |
      |   Module    |     |    Module     |     |   Module   |
      +--------------+     +---------------+     +------------+
           |                      |                    |
           | HTML/CSS/JS          | API Endpoints      | MySQL     |
           |                      | Business Logic     |           |
           v                      v                    v
      +------------------------+     +----------------+
      |       Web Server        |     |   MySQL Server |
      +------------------------+     +----------------+`}
                  </pre>
                </div>
                <p className="text-xs text-text-muted mt-4"><strong>Use Case:</strong> System architecture, module decomposition</p>
              </div>
            </div>
          </section>

          {/* Tools for UML */}
          <section className="bg-card-bg rounded-xl p-8 border border-card-border mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Popular UML Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-lld mb-4">Open Source</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center text-lld font-bold text-sm">1</span>
                    <span><strong>PlantUML:</strong> Text-based UML diagramming tool</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center text-lld font-bold text-sm">2</span>
                    <span><strong>Draw.io (diagrams.net):</strong> Free online diagramming tool</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center text-lld font-bold text-sm">3</span>
                    <span><strong>StarUML:</strong> Comprehensive UML modeling tool</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center text-lld font-bold text-sm">4</span>
                    <span><strong>Modelio:</strong> Open source modeling platform</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-lld mb-4">Commercial</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-hld bg-opacity-10 rounded-lg flex items-center justify-center text-hld font-bold text-sm">1</span>
                    <span><strong>Enterprise Architect:</strong> Full lifecycle modeling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-hld bg-opacity-10 rounded-lg flex items-center justify-center text-hld font-bold text-sm">2</span>
                    <span><strong>Visual Paradigm:</strong> Agile UML modeling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-hld bg-opacity-10 rounded-lg flex items-center justify-center text-hld font-bold text-sm">3</span>
                    <span><strong>Lucidchart:</strong> Collaborative diagramming</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-hld bg-opacity-10 rounded-lg flex items-center justify-center text-hld font-bold text-sm">4</span>
                    <span><strong>Rational Software Architect:</strong> IBM's enterprise solution</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-card-border">
            <Link
              href="/lld/solid"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-lld transition-colors"
            >
              &lt; Previous: SOLID Principles
            </Link>
            <Link
              href="/lld"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-lld transition-colors"
            >
              Back to LLD Topics &rarr;
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
