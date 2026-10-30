"use client";

import Link from "next/link";

export default function HLDPage() {
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
              <Link href="/lld" className="font-medium text-text-secondary hover:text-lld transition-colors">LLD</Link>
              <Link href="/hld" className="font-medium text-hld border-b-2 border-hld pb-1">HLD</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-hld mb-4">High-Level Design</h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Understand system architecture and design at scale.
            </p>
          </div>

          {/* Topic Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-hld bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-hld text-3xl font-bold">S</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Scalability</h2>
              <p className="text-text-muted mb-6">
                Learn vertical vs horizontal scaling, sharding, partitioning, and how to design systems that handle millions of users.
              </p>
              <Link
                href="/hld/scalability"
                className="inline-block px-6 py-3 bg-hld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Explore Scalability →
              </Link>
            </div>

            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-hld bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-hld text-3xl font-bold">D</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Distributed Systems</h2>
              <p className="text-text-muted mb-6">
                Understand CAP theorem, consistency models, distributed consensus (Paxos, Raft), and distributed databases.
              </p>
              <Link
                href="/hld/distributed"
                className="inline-block px-6 py-3 bg-hld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Explore Distributed Systems →
              </Link>
            </div>

            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-hld bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-hld text-3xl font-bold">C</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Caching</h2>
              <p className="text-text-muted mb-6">
                Learn about CDN, Redis, Memcached, cache invalidation strategies, and caching at different levels.
              </p>
              <Link
                href="/hld/caching"
                className="inline-block px-6 py-3 bg-hld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Explore Caching →
              </Link>
            </div>

            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-hld bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-hld text-3xl font-bold">D</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Databases</h2>
              <p className="text-text-muted mb-6">
                SQL vs NoSQL, indexing, transactions, replication, partitioning, and database optimization techniques.
              </p>
              <Link
                href="/hld/databases"
                className="inline-block px-6 py-3 bg-hld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Explore Databases →
              </Link>
            </div>

            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-hld bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-hld text-3xl font-bold">L</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Load Balancing</h2>
              <p className="text-text-muted mb-6">
                Understand round robin, consistent hashing, DNS load balancing, and CDN load balancing strategies.
              </p>
              <Link
                href="/hld/load-balancing"
                className="inline-block px-6 py-3 bg-hld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Explore Load Balancing →
              </Link>
            </div>

            <div className="bg-card-bg rounded-xl p-8 shadow-md border border-card-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-hld bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-hld text-3xl font-bold">M</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Microservices</h2>
              <p className="text-text-muted mb-6">
                Learn about service decomposition, inter-service communication, API gateways, and service discovery.
              </p>
              <Link
                href="/hld/microservices"
                className="inline-block px-6 py-3 bg-hld text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Explore Microservices →
              </Link>
            </div>
          </div>

          {/* Visualization Section */}
          <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-card-border">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-2">Interactive HLD Visualizations</h2>
              <p className="text-text-muted">
                Visual representations to help you understand HLD concepts better.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="font-bold text-text-primary mb-2">System Architecture</h3>
                <p className="text-sm text-text-muted mb-4">
                  Visualize microservices architecture and component interactions.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-48 flex items-center justify-center text-text-muted">
                  <p>System Architecture Diagram</p>
                </div>
              </div>
              <div className="bg-white dark:bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="font-bold text-text-primary mb-2">Request Flow</h3>
                <p className="text-sm text-text-muted mb-4">
                  Understand how requests flow through a distributed system.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-48 flex items-center justify-center text-text-muted">
                  <p>Request Flow Visualization</p>
                </div>
              </div>
            </div>
          </section>

          {/* Back Link */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-hld transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
