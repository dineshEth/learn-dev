"use client";

import Link from "next/link";

export default function SolidPage() {
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
              <span className="text-text-muted">/ LLD / SOLID Principles</span>
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
              <span className="text-text-primary font-medium">SOLID Principles</span>
            </div>
          </nav>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-black text-lld mb-4">SOLID Principles</h1>
            <p className="text-xl text-text-secondary">
              Five design principles to make software more understandable, flexible, and maintainable.
            </p>
          </div>

          {/* SOLID Principles Grid */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Single Responsibility Principle */}
              <div className="bg-card-bg rounded-xl p-8 border border-card-border">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-lld">Single Responsibility</h2>
                  <p className="text-sm text-text-muted mt-2">SRP</p>
                </div>
                <p className="text-text-muted mb-6">
                  A class should have only one reason to change, meaning it should have only one job or responsibility.
                </p>
                <pre className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-x-auto">
                  <code>
{`// Bad: Class with multiple responsibilities
class User {
  constructor(public name: string, public email: string) {}

  saveToDatabase(): void {
    // Database logic
  }
  
  sendEmail(): void {
    // Email logic
  }
}

// Good: Separate responsibilities
class User {
  constructor(public name: string, public email: string) {}
}

class UserRepository {
  save(user: User): void {
    // Database logic
  }
}

class EmailService {
  send(user: User): void {
    // Email logic
  }
}`}
                  </code>
                </pre>
              </div>

              {/* Open/Closed Principle */}
              <div className="bg-card-bg rounded-xl p-8 border border-card-border">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-lld">Open/Closed</h2>
                  <p className="text-sm text-text-muted mt-2">OCP</p>
                </div>
                <p className="text-text-muted mb-6">
                  Software entities (classes, modules, functions) should be open for extension but closed for modification.
                </p>
                <pre className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-x-auto">
                  <code>
{`// Bad: Need to modify when adding new shapes
class AreaCalculator {
  calculate(shape: { type: string, width?: number, height?: number, radius?: number }): number {
    if (shape.type === 'rectangle') {
      return shape.width! * shape.height!;
    } else if (shape.type === 'circle') {
      return Math.PI * shape.radius! ** 2;
    }
    return 0;
  }
}

// Good: Extend without modifying
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  area(): number { return this.width * this.height; }
}

class Circle implements Shape {
  constructor(public radius: number) {}
  area(): number { return Math.PI * this.radius ** 2; }
}`}
                  </code>
                </pre>
              </div>

              {/* Liskov Substitution Principle */}
              <div className="bg-card-bg rounded-xl p-8 border border-card-border">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-lld">Liskov Substitution</h2>
                  <p className="text-sm text-text-muted mt-2">LSP</p>
                </div>
                <p className="text-text-muted mb-6">
                  Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.
                </p>
                <pre className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-x-auto">
                  <code>
{`// Bad: Square is not substitutable for Rectangle
class Rectangle {
  constructor(public width: number, public height: number) {}
  
  setWidth(width: number): void { this.width = width; }
  setHeight(height: number): void { this.height = height; }
  area(): number { return this.width * this.height; }
}

class Square extends Rectangle {
  setWidth(width: number): void {
    this.width = width;
    this.height = width;
  }
  setHeight(height: number): void {
    this.width = height;
    this.height = height;
  }
}

// Good: Better hierarchy
abstract class Shape {
  abstract area(): number;
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  area(): number { return this.width * this.height; }
}

class Square extends Shape {
  constructor(public side: number) { super(); }
  area(): number { return this.side ** 2; }
}`}
                  </code>
                </pre>
              </div>

              {/* Interface Segregation Principle */}
              <div className="bg-card-bg rounded-xl p-8 border border-card-border">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-lld">Interface Segregation</h2>
                  <p className="text-sm text-text-muted mt-2">ISP</p>
                </div>
                <p className="text-text-muted mb-6">
                  Clients should not be forced to depend on interfaces they do not use. Split large interfaces into smaller, specific ones.
                </p>
                <pre className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-x-auto">
                  <code>
{`// Bad: Fat interface
interface Machine {
  print(): void;
  scan(): void;
  fax(): void;
}

// Good: Segregated interfaces
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

interface FaxMachine {
  fax(): void;
}

// Can implement only needed interfaces
class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
  print(): void { /* ... */ }
  scan(): void { /* ... */ }
  fax(): void { /* ... */ }
}

class SimplePrinter implements Printer {
  print(): void { /* ... */ }
}`}
                  </code>
                </pre>
              </div>

              {/* Dependency Inversion Principle */}
              <div className="bg-card-bg rounded-xl p-8 border border-card-border md:col-span-2">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-lld">Dependency Inversion</h2>
                  <p className="text-sm text-text-muted mt-2">DIP</p>
                </div>
                <p className="text-text-muted mb-6">
                  High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
                </p>
                <pre className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-x-auto">
                  <code>
{`// Bad: High-level module depends on low-level module
class MySQLDatabase {
  connect(): void {
    // MySQL specific connection
  }
}

class PasswordReminder {
  constructor(private db: MySQLDatabase) {}
  
  remind(): void {
    this.db.connect();
    // ...
  }
}

// Good: Both depend on abstraction
interface Database {
  connect(): void;
}

class MySQLDatabase implements Database {
  connect(): void {
    // MySQL specific connection
  }
}

class MongoDB implements Database {
  connect(): void {
    // MongoDB specific connection
  }
}

class PasswordReminder {
  constructor(private db: Database) {}
  
  remind(): void {
    this.db.connect();
    // ...
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="bg-card-bg rounded-xl p-8 border border-card-border mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">SOLID Summary</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center text-lld font-bold text-sm flex-shrink-0">S</span>
                <span><strong>Single Responsibility:</strong> One class, one responsibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center text-lld font-bold text-sm flex-shrink-0">O</span>
                <span><strong>Open/Closed:</strong> Open for extension, closed for modification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center text-lld font-bold text-sm flex-shrink-0">L</span>
                <span><strong>Liskov Substitution:</strong> Subtypes must be substitutable for their base types</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center text-lld font-bold text-sm flex-shrink-0">I</span>
                <span><strong>Interface Segregation:</strong> Many small interfaces are better than one large interface</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center text-lld font-bold text-sm flex-shrink-0">D</span>
                <span><strong>Dependency Inversion:</strong> Depend on abstractions, not on concretions</span>
              </li>
            </ul>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-card-border">
            <Link
              href="/lld/patterns"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-lld transition-colors"
            >
              &lt; Previous: Design Patterns
            </Link>
            <Link
              href="/lld/uml"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-lld transition-colors"
            >
              Next: UML Diagrams &rarr;
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
