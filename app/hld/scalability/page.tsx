"use client";

import Link from "next/link";

export default function ScalabilityPage() {
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
              <span className="text-text-muted">/ HLD / Scalability</span>
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
              <span className="text-text-primary font-medium">Scalability</span>
            </div>
          </nav>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-black text-hld mb-4">Scalability</h1>
            <p className="text-xl text-text-secondary">
              The ability of a system to handle increased load by adding resources.
            </p>
          </div>

          {/* Vertical vs Horizontal Scaling */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8">Vertical vs Horizontal Scaling</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card-bg rounded-xl p-8 border border-card-border">
                <h3 className="text-xl font-bold text-hld mb-4">Vertical Scaling (Scale Up)</h3>
                <p className="text-text-muted mb-6">
                  Adding more resources (CPU, RAM, storage) to a single machine to handle increased load.
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 mb-6 border border-card-border">
                  <div className="flex items-center justify-center h-32">
                    <svg viewBox="0 0 200 100" className="w-full h-full">
                      <rect x="20" y="30" width="60" height="40" fill="#22577a" opacity="0.3" rx="5" ry="5"/>
                      <text x="50" y="55" textAnchor="middle" fill="#22577a" fontSize="14" fontWeight="bold">Server</text>
                      <text x="50" y="25" textAnchor="middle" fill="#666" fontSize="12">Before</text>
                      <text x="140" y="25" textAnchor="middle" fill="#666" fontSize="12">After</text>
                      <rect x="110" y="30" width="80" height="50" fill="#22577a" opacity="0.6" rx="5" ry="5"/>
                      <text x="150" y="58" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Bigger</text>
                      <text x="150" y="70" textAnchor="middle" fill="white" fontSize="10">Server</text>
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <p><strong className="text-text-primary">Pros:</strong></p>
                  <ul className="list-disc list-inside text-sm text-text-muted space-y-1">
                    <li>Simple to implement</li>
                    <li>No changes to application code</li>
                    <li>Data consistency is easy</li>
                  </ul>
                  <p className="pt-2"><strong className="text-text-primary">Cons:</strong></p>
                  <ul className="list-disc list-inside text-sm text-text-muted space-y-1">
                    <li>Single point of failure</li>
                    <li>Limited by maximum hardware capacity</li>
                    <li>Downtime required for upgrades</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-card-bg rounded-xl p-8 border border-card-border">
                <h3 className="text-xl font-bold text-hld mb-4">Horizontal Scaling (Scale Out)</h3>
                <p className="text-text-muted mb-6">
                  Adding more machines to a pool of resources to handle increased load.
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 mb-6 border border-card-border">
                  <div className="flex items-center justify-center h-32">
                    <svg viewBox="0 0 200 100" className="w-full h-full">
                      <rect x="30" y="30" width="40" height="40" fill="#22577a" opacity="0.6" rx="5" ry="5"/>
                      <rect x="80" y="30" width="40" height="40" fill="#22577a" opacity="0.6" rx="5" ry="5"/>
                      <rect x="130" y="30" width="40" height="40" fill="#22577a" opacity="0.6" rx="5" ry="5"/>
                      <text x="50" y="25" textAnchor="middle" fill="#666" fontSize="10">Before</text>
                      <text x="150" y="25" textAnchor="middle" fill="#666" fontSize="10">After</text>
                      <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10">1</text>
                      <text x="100" y="55" textAnchor="middle" fill="white" fontSize="10">2</text>
                      <text x="150" y="55" textAnchor="middle" fill="white" fontSize="10">3</text>
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <p><strong className="text-text-primary">Pros:</strong></p>
                  <ul className="list-disc list-inside text-sm text-text-muted space-y-1">
                    <li>No theoretical limit to scale</li>
                    <li>Better fault tolerance</li>
                    <li>Can handle more traffic</li>
                    <li>No downtime for scaling</li>
                  </ul>
                  <p className="pt-2"><strong className="text-text-primary">Cons:</strong></p>
                  <ul className="list-disc list-inside text-sm text-text-muted space-y-1">
                    <li>Complex to implement</li>
                    <li>Requires load balancing</li>
                    <li>Data consistency challenges</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Sharding and Partitioning */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8">Sharding & Partitioning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card-bg rounded-xl p-8 border border-card-border">
                <h3 className="text-xl font-bold text-hld mb-4">Sharding</h3>
                <p className="text-text-muted mb-6">
                  Horizontal partitioning of data across multiple databases or servers. Each shard contains a subset of the data.
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 mb-6 border border-card-border">
                  <div className="text-center">
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-hld bg-opacity-20 rounded p-2 text-xs">Shard 1</div>
                      <div className="bg-hld bg-opacity-20 rounded p-2 text-xs">Shard 2</div>
                      <div className="bg-hld bg-opacity-20 rounded p-2 text-xs">Shard 3</div>
                      <div className="bg-hld bg-opacity-20 rounded p-2 text-xs">Shard 4</div>
                      <div className="bg-hld bg-opacity-20 rounded p-2 text-xs">Shard 5</div>
                      <div className="bg-hld bg-opacity-20 rounded p-2 text-xs">Shard 6</div>
                    </div>
                    <p className="text-xs text-text-muted">Data distributed across multiple shards</p>
                  </div>
                </div>
                <p className="text-sm text-text-muted">
                  <strong>Key:</strong> Different shards contain different data (e.g., by user ID, by region).
                </p>
              </div>
              
              <div className="bg-card-bg rounded-xl p-8 border border-card-border">
                <h3 className="text-xl font-bold text-hld mb-4">Partitioning</h3>
                <p className="text-text-muted mb-6">
                  Dividing a database into smaller, more manageable pieces while still keeping the data in the same database instance.
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 mb-6 border border-card-border">
                  <div className="text-center">
                    <div className="space-y-2 mb-4">
                      <div className="bg-hld bg-opacity-20 rounded p-2 text-xs">Partition A: Users 1-1000</div>
                      <div className="bg-hld bg-opacity-20 rounded p-2 text-xs">Partition B: Users 1001-2000</div>
                      <div className="bg-hld bg-opacity-20 rounded p-2 text-xs">Partition C: Users 2001-3000</div>
                    </div>
                    <p className="text-xs text-text-muted">Single database, multiple partitions</p>
                  </div>
                </div>
                <p className="text-sm text-text-muted">
                  <strong>Key:</strong> Same database, data divided into partitions based on ranges or hashes.
                </p>
              </div>
            </div>
          </section>

          {/* Load Balancing */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8">Load Balancing Strategies</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="text-lg font-bold text-hld mb-3">Round Robin</h3>
                <p className="text-sm text-text-muted">
                  Distributes requests sequentially across all servers. Each server gets one request in turn.
                </p>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="text-lg font-bold text-hld mb-3">Random</h3>
                <p className="text-sm text-text-muted">
                  Randomly selects a server for each request. Simple but may lead to uneven distribution.
                </p>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="text-lg font-bold text-hld mb-3">Least Connections</h3>
                <p className="text-sm text-text-muted">
                  Sends new requests to the server with the fewest active connections.
                </p>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="text-lg font-bold text-hld mb-3">IP Hash</h3>
                <p className="text-sm text-text-muted">
                  Uses client IP address to determine which server gets the request. Ensures same client goes to same server.
                </p>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="text-lg font-bold text-hld mb-3">Weighted Round Robin</h3>
                <p className="text-sm text-text-muted">
                  Assigns weights to servers. Higher weight servers get more requests.
                </p>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="text-lg font-bold text-hld mb-3">Least Response Time</h3>
                <p className="text-sm text-text-muted">
                  Sends requests to the server with the fastest response time.
                </p>
              </div>
            </div>
          </section>

          {/* Real-world Example */}
          <section className="bg-card-bg rounded-xl p-8 border border-card-border mb-16">
            <h2 className="text-2xl font-bold text-hld mb-6">Real-world Scaling Architecture</h2>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-card-border">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-hld bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-hld font-bold">LB</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Load Balancer</p>
                    <p className="text-sm text-text-muted">Distributes incoming traffic</p>
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="w-px h-8 bg-gray-300"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-hld bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-hld font-bold">S1</span>
                  </div>
                  <div className="w-12 h-12 bg-hld bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-hld font-bold">S2</span>
                  </div>
                  <div className="w-12 h-12 bg-hld bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-hld font-bold">S3</span>
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="w-px h-8 bg-gray-300"></div>
                </div>
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-hld bg-opacity-20 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-hld font-bold">DB</span>
                    </div>
                    <p className="text-sm text-text-muted">Database</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-hld bg-opacity-20 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-hld font-bold">CDN</span>
                    </div>
                    <p className="text-sm text-text-muted">CDN</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-hld bg-opacity-20 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-hld font-bold">Cache</span>
                    </div>
                    <p className="text-sm text-text-muted">Cache</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-muted mt-4 text-center">
                Modern scalable architecture with horizontal scaling, load balancing, and caching
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-card-border">
            <Link
              href="/hld"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-hld transition-colors"
            >
              ← Back to HLD Topics
            </Link>
            <Link
              href="/hld/distributed"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-hld transition-colors"
            >
              Next: Distributed Systems →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
