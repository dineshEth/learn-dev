"use client";

import Link from "next/link";

export default function CachingPage() {
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
              <span className="text-text-muted">/ HLD / Caching</span>
            </div>
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
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Link href="/hld" className="hover:text-hld transition-colors">HLD</Link>
              <span>/</span>
              <span className="text-text-primary font-medium">Caching</span>
            </div>
          </nav>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-black text-hld mb-4">Caching</h1>
            <p className="text-xl text-text-secondary">
              Store frequently accessed data in fast memory to reduce latency and improve performance.
            </p>
          </div>

          <p className="text-center text-text-muted py-16">
            Caching page content coming soon! This will cover CDN, Redis, Memcached, cache invalidation strategies, and caching at different levels.
          </p>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-card-border">
            <Link
              href="/hld/distributed"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-hld transition-colors"
            >
              ← Previous: Distributed Systems
            </Link>
            <Link
              href="/hld/databases"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-hld transition-colors"
            >
              Next: Databases →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
