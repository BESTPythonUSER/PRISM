import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo"><span>PRISM</span></div>
        <div className="nav-links">
          <Link href="#features" className="nav-link">Features</Link>
          <Link href="/login" className="btn btn-secondary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
            Log In
          </Link>
          <Link href="/signup" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
        <div className="hero-content">
          <div className="hero-badge animate-in animate-delay-1">
            <span className="hero-badge-dot" />
            AI-Powered Adaptive Learning
          </div>
          <h1 className="hero-title animate-in animate-delay-2">
            Master Chemistry<br />
            <span className="hero-title-gradient">Like Never Before</span>
          </h1>
          <p className="hero-subtitle animate-in animate-delay-3">
            PRISM adapts to how you learn. AI-generated questions target your weak spots,
            track your progress in real-time, and build a personalised path to mastery.
          </p>
          <div className="hero-actions animate-in animate-delay-4">
            <Link href="/signup" className="btn btn-primary">
              Start Learning Free →
            </Link>
            <Link href="#features" className="btn btn-secondary">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="features-header">
          <p className="features-label">Why PRISM</p>
          <h2 className="features-title">Learning that adapts to you</h2>
        </div>
        <div className="features-grid">
          <div className="glass-card feature-card">
            <div className="feature-icon">🧠</div>
            <h3 className="feature-title">Adaptive Questions</h3>
            <p className="feature-desc">
              AI analyses your performance and generates questions that target exactly where you need to improve. No more wasted time on what you already know.
            </p>
          </div>
          <div className="glass-card feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Real-Time Analytics</h3>
            <p className="feature-desc">
              Track your mastery across every topic with detailed performance dashboards. See your strengths, weaknesses, and growth over time.
            </p>
          </div>
          <div className="glass-card feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Smart Study Paths</h3>
            <p className="feature-desc">
              PRISM builds a personalised study plan based on your goals, pace, and learning style. Stay on track with intelligent recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center', padding: '40px 32px', borderTop: '1px solid var(--border-subtle)',
        color: 'var(--text-muted)', fontSize: '0.85rem'
      }}>
        <p>© 2026 PRISM. Built for smarter learning.</p>
      </footer>
    </>
  );
}
