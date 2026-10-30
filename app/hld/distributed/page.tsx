"use client";

import Link from "next/link";

export default function DistributedPage() {
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
              <span className="text-text-muted">/ HLD / Distributed Systems</span>
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
              <span className="text-text-primary font-medium">Distributed Systems</span>
            </div>
          </nav>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-black text-hld mb-4">Distributed Systems</h1>
            <p className="text-xl text-text-secondary">
              A collection of independent computers that appear to users as a single coherent system.
            </p>
          </div>

          {/* Why Distributed Systems */}
          <section className="bg-card-bg rounded-xl p-8 border border-card-border mb-16">
            <h2 className="text-2xl font-bold text-hld mb-6">Why Distributed Systems?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-hld bg-opacity-20 rounded-full flex items-center justify-center text-hld text-xs font-bold flex-shrink-0">✓</span>
                    <span><strong>Scalability:</strong> Can handle more users and data by adding more nodes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-hld bg-opacity-20 rounded-full flex items-center justify-center text-hld text-xs font-bold flex-shrink-0">✓</span>
                    <span><strong>Fault Tolerance:</strong> System continues to work even if some nodes fail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-hld bg-opacity-20 rounded-full flex items-center justify-center text-hld text-xs font-bold flex-shrink-0">✓</span>
                    <span><strong>Performance:</strong> Parallel processing across multiple nodes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-hld bg-opacity-20 rounded-full flex items-center justify-center text-hld text-xs font-bold flex-shrink-0">✓</span>
                    <span><strong>Geographic Distribution:</strong> Can place nodes close to users for better latency</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center text-red-600 text-xs font-bold flex-shrink-0">✗</span>
                    <span><strong>Complexity:</strong> Harder to design, implement, and debug</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center text-red-600 text-xs font-bold flex-shrink-0">✗</span>
                    <span><strong>Consistency:</strong> Keeping data synchronized across nodes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center text-red-600 text-xs font-bold flex-shrink-0">✗</span>
                    <span><strong>Network Latency:</strong> Communication between nodes adds delay</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center text-red-600 text-xs font-bold flex-shrink-0">✗</span>
                    <span><strong>Security:</strong> More attack surface with multiple nodes</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CAP Theorem */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">CAP Theorem</h2>
            <p className="text-text-muted mb-8">
              In a distributed system, you can only guarantee <strong>two out of three</strong> of the following properties:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card-bg rounded-xl p-8 border-2 border-hld border-opacity-50">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-hld bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-hld text-2xl font-bold">C</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-hld text-center mb-3">Consistency</h3>
                <p className="text-text-muted text-center">
                  All nodes see the same data at the same time. After a write, all reads return the latest value.
                </p>
              </div>
              <div className="bg-card-bg rounded-xl p-8 border-2 border-hld border-opacity-50">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-hld bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-hld text-2xl font-bold">A</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-hld text-center mb-3">Availability</h3>
                <p className="text-text-muted text-center">
                  Every request receives a response, even if it's not the most recent data. No single point of failure.
                </p>
              </div>
              <div className="bg-card-bg rounded-xl p-8 border-2 border-hld border-opacity-50">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-hld bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-hld text-2xl font-bold">P</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-hld text-center mb-3">Partition Tolerance</h3>
                <p className="text-text-muted text-center">
                  The system continues to work despite network partitions (communication failures between nodes).
                </p>
              </div>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h4 className="font-bold text-text-primary mb-2">CA Systems</h4>
                <p className="text-sm text-text-muted mb-3">
                  Consistency + Availability (but not Partition Tolerant)
                </p>
                <p className="text-xs text-text-muted">
                  Single-node databases, some traditional RDBMS in single-node mode
                </p>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h4 className="font-bold text-text-primary mb-2">CP Systems</h4>
                <p className="text-sm text-text-muted mb-3">
                  Consistency + Partition Tolerance (but not Available)
                </p>
                <p className="text-xs text-text-muted">
                  MongoDB (default), Redis, many NoSQL databases
                </p>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h4 className="font-bold text-text-primary mb-2">AP Systems</h4>
                <p className="text-sm text-text-muted mb-3">
                  Availability + Partition Tolerance (but not Consistent)
                </p>
                <p className="text-xs text-text-muted">
                  Cassandra, DynamoDB, CouchDB, most distributed databases
                </p>
              </div>
            </div>
          </section>

          {/* Distributed Consensus */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Distributed Consensus Algorithms</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card-bg rounded-xl p-8 border border-card-border">
                <h3 className="text-xl font-bold text-hld mb-4">Paxos</h3>
                <p className="text-text-muted mb-4">
                  Family of algorithms for achieving consensus in a distributed system. Guarantees safety (no two nodes decide differently) but may not guarantee liveness (progress).
                </p>
                <div className="space-y-2 mb-6">
                  <p><strong className="text-text-primary">Phases:</strong></p>
                  <ol className="list-decimal list-inside text-sm text-text-muted space-y-1">
                    <li>Prepare: Proposer sends prepare request with proposal number</li>
                    <li>Promise: Acceptors promise not to accept proposals with lower numbers</li>
                    <li>Accept: Proposer sends accept request with value</li>
                    <li>Accepted: Acceptors accept the value if proposal number is highest</li>
                  </ol>
                </div>
                <p className="text-sm text-text-muted">
                  <strong>Used by:</strong> Chubby, Google Spanner
                </p>
              </div>
              
              <div className="bg-card-bg rounded-xl p-8 border border-card-border">
                <h3 className="text-xl font-bold text-hld mb-4">Raft</h3>
                <p className="text-text-muted mb-4">
                  Consensus algorithm designed to be more understandable than Paxos. Guarantees both safety and liveness. Uses a leader-based approach.
                </p>
                <div className="space-y-2 mb-6">
                  <p><strong className="text-text-primary">Roles:</strong></p>
                  <ul className="list-disc list-inside text-sm text-text-muted space-y-1">
                    <li><strong>Leader:</strong> Handles all client requests, manages log replication</li>
                    <li><strong>Follower:</strong> Passively replicates logs from leader</li>
                    <li><strong>Candidate:</strong> Requests votes during leader election</li>
                  </ul>
                </div>
                <p className="text-sm text-text-muted">
                  <strong>Used by:</strong> etcd, Kubernetes, Consul
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-card-bg rounded-xl p-6 border border-card-border">
              <h3 className="text-lg font-bold text-text-primary mb-4">Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-card-border">
                      <th className="text-left p-2">Algorithm</th>
                      <th className="text-left p-2">Complexity</th>
                      <th className="text-left p-2">Understandability</th>
                      <th className="text-left p-2">Liveness Guarantee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-card-border">
                      <td className="p-2">Paxos</td>
                      <td className="p-2 text-text-muted">High</td>
                      <td className="p-2 text-text-muted">Low</td>
                      <td className="p-2 text-text-muted">No</td>
                    </tr>
                    <tr>
                      <td className="p-2">Raft</td>
                      <td className="p-2 text-text-muted">Moderate</td>
                      <td className="p-2 text-text-muted">High</td>
                      <td className="p-2 text-text-muted">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Consistency Models */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Consistency Models</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="text-lg font-bold text-hld mb-3">Strong Consistency</h3>
                <p className="text-sm text-text-muted">
                  All reads return the most recent write. System appears as a single, atomic unit.
                </p>
                <p className="text-xs text-text-muted mt-4"><strong>Use Case:</strong> Banking systems, financial transactions</p>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="text-lg font-bold text-hld mb-3">Eventual Consistency</h3>
                <p className="text-sm text-text-muted">
                  If no new updates are made, eventually all reads will return the last written value.
                </p>
                <p className="text-xs text-text-muted mt-4"><strong>Use Case:</strong> Social media, content management systems</p>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-card-border">
                <h3 className="text-lg font-bold text-hld mb-3">Causal Consistency</h3>
                <p className="text-sm text-text-muted">
                  If operation A causally affects operation B, then all nodes see A before B.
                </p>
                <p className="text-xs text-text-muted mt-4"><strong>Use Case:</strong> Collaborative editing, messaging systems</p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-card-border">
            <Link
              href="/hld/scalability"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-hld transition-colors"
            >
              ← Previous: Scalability
            </Link>
            <Link
              href="/hld/caching"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-hld transition-colors"
            >
              Next: Caching →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
