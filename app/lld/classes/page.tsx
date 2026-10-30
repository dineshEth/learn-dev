"use client";

import Link from "next/link";

export default function ClassesPage() {
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
              <span className="text-text-muted">/ LLD / Classes</span>
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
              <span className="text-text-primary font-medium">Classes & Objects</span>
            </div>
          </nav>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-black text-lld mb-4">Classes & Objects</h1>
            <p className="text-xl text-text-secondary">
              The fundamental building blocks of Object-Oriented Programming.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4">What is a Class?</h2>
              <p className="text-text-muted leading-relaxed">
                A class is a blueprint or template for creating objects. It defines the properties (attributes) and behaviors (methods) that its objects will have.
              </p>
              <pre className="mt-6 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-x-auto">
                <code>
{`class Car {
  // Properties
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method
  getDescription(): string {
    return \`\${this.year} \${this.make} \${this.model}\`;
  }
}`}
                </code>
              </pre>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4">What is an Object?</h2>
              <p className="text-text-muted leading-relaxed">
                An object is an instance of a class. It contains actual values for the properties defined in the class.
              </p>
              <pre className="mt-6 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-x-auto">
                <code>
{`// Creating objects from the Car class
const myCar = new Car('Toyota', 'Camry', 2023);
const yourCar = new Car('Honda', 'Civic', 2022);

console.log(myCar.getDescription());
// Output: "2023 Toyota Camry"`}
                </code>
              </pre>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Four Pillars of OOP</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                  <h3 className="text-xl font-bold text-lld mb-3">Encapsulation</h3>
                  <p className="text-text-muted">
                    Bundling data and methods that operate on that data within a single unit (class), while restricting direct access to some of the object&apos;s components.
                  </p>
                </div>
                <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                  <h3 className="text-xl font-bold text-lld mb-3">Inheritance</h3>
                  <p className="text-text-muted">
                    Creating a new class (child) from an existing class (parent). The child class inherits all properties and methods from the parent class.
                  </p>
                </div>
                <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                  <h3 className="text-xl font-bold text-lld mb-3">Polymorphism</h3>
                  <p className="text-text-muted">
                    The ability of an object to take on many forms. Allows methods to perform different tasks based on the object that is acting upon them.
                  </p>
                </div>
                <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                  <h3 className="text-xl font-bold text-lld mb-3">Abstraction</h3>
                  <p className="text-text-muted">
                    Hiding complex implementation details and showing only the essential features of the object. Helps reduce programming complexity and effort.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Practical Example</h2>
              <pre className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-x-auto">
                <code>
{`class Animal {
  constructor(public name: string) {}

  speak(): string {
    throw new Error('Method speak() must be implemented');
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }

  speak(): string {
    return \`\${this.name} the \${this.breed} says Woof!\`;
  }

  fetch(): string {
    return \`\${this.name} is fetching\`;
  }
}

class Cat extends Animal {
  speak(): string {
    return \`\${this.name} says Meow!\`;
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
const cat = new Cat('Whiskers');

console.log(dog.speak()); // "Buddy the Golden Retriever says Woof!"
console.log(cat.speak()); // "Whiskers says Meow!"
console.log(dog.fetch()); // "Buddy is fetching"`}
                </code>
              </pre>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-card-border">
              <Link
                href="/lld"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-lld transition-colors"
              >
                &lt; Back to LLD Topics
              </Link>
              <Link
                href="/lld/patterns"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-lld transition-colors"
              >
                Next: Design Patterns &rarr;
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
