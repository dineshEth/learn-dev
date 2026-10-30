"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-dark-bg dark:via-001233 dark:to-dark-bg">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDEyMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span className="text-lld">Learn</span>
              <span className="text-hld">Dev</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-4 font-medium">
              Free Open Source Community
            </p>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12">
              Learn about system design with interactive visualizations. Master Low-Level Design (LLD) and High-Level Design (HLD) concepts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#lld"
                className="px-8 py-4 bg-lld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore LLD
              </Link>
              <Link
                href="#hld"
                className="px-8 py-4 bg-hld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore HLD
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-20"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#001233"
              className="dark:fill-background"
            />
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* LLD Section */}
        <section id="lld" className="mb-24">
          <div className="bg-card-bg rounded-2xl shadow-xl overflow-hidden border border-card-border">
            <div className="bg-gradient-lld p-8 md:p-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-bold">LLD</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Low-Level Design</h2>
              </div>
              <p className="text-xl text-white text-opacity-90 mb-8">
                Master the art of designing individual components and classes. Learn OOP principles, design patterns, and how to structure your code for maintainability and scalability.
              </p>
            </div>
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* LLD Cards */}
                <div className="bg-white dark:bg-card-bg rounded-xl p-6 shadow-md border border-card-border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-lld text-2xl font-bold">C</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Classes & Objects</h3>
                  <p className="text-text-muted mb-4">
                    Learn about encapsulation, inheritance, polymorphism, and abstraction.
                  </p>
                  <Link
                    href="/lld/classes"
                    className="text-lld font-medium hover:text-lld inline-flex items-center gap-2"
                  >
                    Learn More →
                  </Link>
                </div>
                
                <div className="bg-white dark:bg-card-bg rounded-xl p-6 shadow-md border border-card-border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-lld text-2xl font-bold">D</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Design Patterns</h3>
                  <p className="text-text-muted mb-4">
                    Explore Singleton, Factory, Observer, and other essential patterns.
                  </p>
                  <Link
                    href="/lld/patterns"
                    className="text-lld font-medium hover:text-lld inline-flex items-center gap-2"
                  >
                    Learn More →
                  </Link>
                </div>
                
                <div className="bg-white dark:bg-card-bg rounded-xl p-6 shadow-md border border-card-border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-lld bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-lld text-2xl font-bold">S</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">SOLID Principles</h3>
                  <p className="text-text-muted mb-4">
                    Single Responsibility, Open/Closed, Liskov Substitution, and more.
                  </p>
                  <Link
                    href="/lld/solid"
                    className="text-lld font-medium hover:text-lld inline-flex items-center gap-2"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
              
              {/* Visualization placeholder */}
              <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-card-border">
                <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-lld rounded-full"></span>
                  Interactive Visualization
                </h4>
                <p className="text-text-muted mb-6">
                  Visual representations of LLD concepts coming soon!
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-dashed border-gray-300 dark:border-gray-600 text-center text-text-muted">
                  <p>LLD Visualization Area</p>
                  <p className="text-sm mt-2">Class diagrams, sequence diagrams, and more</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HLD Section */}
        <section id="hld" className="mb-24">
          <div className="bg-card-bg rounded-2xl shadow-xl overflow-hidden border border-card-border">
            <div className="bg-gradient-hld p-8 md:p-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-bold">HLD</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">High-Level Design</h2>
              </div>
              <p className="text-xl text-white text-opacity-90 mb-8">
                Understand system architecture at scale. Learn about distributed systems, databases, caching, load balancing, and how to design scalable applications.
              </p>
            </div>
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* HLD Cards */}
                <div className="bg-white dark:bg-card-bg rounded-xl p-6 shadow-md border border-card-border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-hld bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-hld text-2xl font-bold">S</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Scalability</h3>
                  <p className="text-text-muted mb-4">
                    Learn vertical vs horizontal scaling, sharding, and partitioning strategies.
                  </p>
                  <Link
                    href="/hld/scalability"
                    className="text-hld font-medium hover:text-hld inline-flex items-center gap-2"
                  >
                    Learn More →
                  </Link>
                </div>
                
                <div className="bg-white dark:bg-card-bg rounded-xl p-6 shadow-md border border-card-border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-hld bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-hld text-2xl font-bold">D</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Distributed Systems</h3>
                  <p className="text-text-muted mb-4">
                    Explore CAP theorem, consistency models, and distributed consensus.
                  </p>
                  <Link
                    href="/hld/distributed"
                    className="text-hld font-medium hover:text-hld inline-flex items-center gap-2"
                  >
                    Learn More →
                  </Link>
                </div>
                
                <div className="bg-white dark:bg-card-bg rounded-xl p-6 shadow-md border border-card-border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-hld bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-hld text-2xl font-bold">C</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Caching</h3>
                  <p className="text-text-muted mb-4">
                    CDN, Redis, Memcached, and cache invalidation strategies.
                  </p>
                  <Link
                    href="/hld/caching"
                    className="text-hld font-medium hover:text-hld inline-flex items-center gap-2"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
              
              {/* Visualization placeholder */}
              <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-card-border">
                <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-hld rounded-full"></span>
                  Interactive Visualization
                </h4>
                <p className="text-text-muted mb-6">
                  Visual representations of HLD concepts coming soon!
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-dashed border-gray-300 dark:border-gray-600 text-center text-text-muted">
                  <p>HLD Visualization Area</p>
                  <p className="text-sm mt-2">System architecture diagrams, flow charts, and more</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Join the Community
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            Learn-Dev is free and open source. Contribute, ask questions, and help others learn system design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-text-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2 justify-center"
            >
              <span className="text-xl">⚡</span>
              View on GitHub
            </a>
            <a
              href="#"
              className="px-8 py-4 border-2 border-text-primary text-text-primary font-bold rounded-lg hover:bg-text-primary hover:text-white transition-all duration-300"
            >
              Contribute
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-bg text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-lld">Learn</span>
                <span className="text-hld">Dev</span>
              </h3>
              <p className="text-white text-opacity-70">
                Open Source System Design Learning Platform
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="hover:text-lld transition-colors">Home</Link>
              <Link href="#lld" className="hover:text-lld transition-colors">LLD</Link>
              <Link href="#hld" className="hover:text-lld transition-colors">HLD</Link>
              <Link href="#" className="hover:text-lld transition-colors">About</Link>
              <Link href="#" className="hover:text-lld transition-colors">Contact</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-center text-sm text-white text-opacity-50">
            <p>© 2024 Learn-Dev. All rights reserved. MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
