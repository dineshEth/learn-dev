"use client";

import Link from "next/link";

export default function PatternsPage() {
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
              <span className="text-text-muted">/ LLD / Design Patterns</span>
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
              <span className="text-text-primary font-medium">Design Patterns</span>
            </div>
          </nav>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-black text-lld mb-4">Design Patterns</h1>
            <p className="text-xl text-text-secondary">
              Reusable solutions to common design problems in software development.
            </p>
          </div>

          {/* Pattern Categories */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Pattern Categories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="text-xl font-bold text-lld mb-3">Creational Patterns</h3>
                <p className="text-text-muted mb-4">
                  Deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.
                </p>
                <ul className="text-sm text-text-muted space-y-1">
                  <li>• Singleton</li>
                  <li>• Factory Method</li>
                  <li>• Abstract Factory</li>
                  <li>• Builder</li>
                  <li>• Prototype</li>
                </ul>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="text-xl font-bold text-lld mb-3">Structural Patterns</h3>
                <p className="text-text-muted mb-4">
                  Concern class and object composition. Use inheritance to compose interfaces and define ways to compose objects.
                </p>
                <ul className="text-sm text-text-muted space-y-1">
                  <li>• Adapter</li>
                  <li>• Decorator</li>
                  <li>• Facade</li>
                  <li>• Proxy</li>
                  <li>• Composite</li>
                </ul>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="text-xl font-bold text-lld mb-3">Behavioral Patterns</h3>
                <p className="text-text-muted mb-4">
                  Define communication between objects and assign responsibilities between objects.
                </p>
                <ul className="text-sm text-text-muted space-y-1">
                  <li>• Observer</li>
                  <li>• Strategy</li>
                  <li>• Command</li>
                  <li>• State</li>
                  <li>• Chain of Responsibility</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Featured Patterns */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Featured Patterns</h2>
            
            <div className="bg-card-bg rounded-xl p-8 border border-card-border mb-8">
              <h3 className="text-xl font-bold text-lld mb-4">Singleton Pattern</h3>
              <p className="text-text-muted mb-6">
                Ensures a class has only one instance and provides a global point of access to it.
              </p>
              <pre className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-x-auto">
                <code>
{`class Database {
  private static instance: Database | null = null;
  
  private constructor() {
    // Private constructor to prevent direct construction
  }
  
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

// Usage
const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2); // true - same instance`}
                </code>
              </pre>
              <p className="text-sm text-text-muted mt-4">
                <strong>Use Case:</strong> Configuration management, Database connections, Logging services
              </p>
            </div>

            <div className="bg-card-bg rounded-xl p-8 border border-card-border mb-8">
              <h3 className="text-xl font-bold text-lld mb-4">Factory Method Pattern</h3>
              <p className="text-text-muted mb-6">
                Defines an interface for creating an object, but lets subclasses decide which class to instantiate.
              </p>
              <pre className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-x-auto">
                <code>
{`// Creator
abstract class Creator {
  public abstract factoryMethod(): Product;
  
  public someOperation(): string {
    const product = this.factoryMethod();
    return \`Creator: The same creator\'s code has just worked with \${product.operation()}\`;
  }
}

// Concrete Creator
class ConcreteCreator extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct();
  }
}

// Product interface
interface Product {
  operation(): string;
}

// Concrete Product
class ConcreteProduct implements Product {
  public operation(): string {
    return 'Result of ConcreteProduct';
  }
}`}
                </code>
              </pre>
              <p className="text-sm text-text-muted mt-4">
                <strong>Use Case:</strong> Framework design, Dependency injection, Product creation flexibility
              </p>
            </div>

            <div className="bg-card-bg rounded-xl p-8 border border-card-border">
              <h3 className="text-xl font-bold text-lld mb-4">Observer Pattern</h3>
              <p className="text-text-muted mb-6">
                Allows an object (subject) to maintain a list of its dependents (observers) and notify them automatically of any state changes.
              </p>
              <pre className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-x-auto">
                <code>
{`class Subject {
  private observers: Observer[] = [];
  private state: string = '';

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.state);
    }
  }

  setState(state: string): void {
    this.state = state;
    this.notify();
  }
}

interface Observer {
  update(state: string): void;
}

class ConcreteObserver implements Observer {
  constructor(private name: string) {}

  update(state: string): void {
    console.log(\`\${this.name}: State updated to \${state}\`);
  }
}`}
                </code>
              </pre>
              <p className="text-sm text-text-muted mt-4">
                <strong>Use Case:</strong> Event handling systems, Publish-subscribe systems, Model-View-Controller (MVC)
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-card-border">
            <Link
              href="/lld/classes"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-lld transition-colors"
            >
              &lt; Previous: Classes &amp; Objects
            </Link>
            <Link
              href="/lld/solid"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-lld transition-colors"
            >
              Next: SOLID Principles &rarr;
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
