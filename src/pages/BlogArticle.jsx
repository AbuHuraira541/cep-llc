import { Link, useParams } from 'react-router-dom'
import CTA from '../components/CTA.jsx'
import Icon from '../components/Icon.jsx'
import { getPostBySlug } from '../data/blog.js'

export default function BlogArticle() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <section className="section article-empty smooth-fade-in">
        <div className="container text-center">
          <h1>Article Not Found</h1>
          <p className="text-muted mb-4">The article may have been moved or removed.</p>
          <Link className="btn btn-primary" to="/insights">Browse All Insights</Link>
        </div>
      </section>
    )
  }

  return (
    <article className="article-page smooth-fade-in">
      {/* CINEMATIC HERO HEADER */}
      <header className="article-hero">
        <div className="container article-hero-container">
          <Link className="article-back" to="/insights">
            <Icon name="arrow-right" size={14} style={{transform: 'rotate(180deg)'}} /> Back to Insights
          </Link>
          <span className="article-category-badge">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="article-dek">{post.excerpt}</p>
          <div className="article-meta">
            <span>By <strong>{post.author}</strong></span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* FEATURED UNIQUE IMAGE */}
      <div className="container article-img-wrapper">
        <img className="article-image shadow-lg" src={post.image} alt={post.title} />
      </div>

      {/* RICH ARTICLE BODY */}
      <div className="container article-body">
        <div className="article-content-main">
          {post.body && post.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <aside className="article-sidebar-box shadow-sm">
          <div className="sidebar-icon">
            <Icon name="check" size={20} />
          </div>
          <div>
            <strong>Need a project-specific estimate review?</strong>
            <p>CEP helps contractors organize quantities, clear up drawing ambiguities, and build a fully bid-ready package.</p>
          </div>
        </aside>
      </div>

      <CTA title="Ready to streamline your next construction bid?" />

      <style>{`
        .article-hero {
          padding: 160px 0 60px;
          background: #0f172a;
          color: #ffffff;
          position: relative;
        }
        .article-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.7);
          font: 600 0.9rem var(--font-display);
          text-decoration: none;
          margin-bottom: 24px;
          transition: color 0.2s;
        }
        .article-back:hover { color: #F59E0B; }

        .article-category-badge {
          display: inline-block;
          background: #F59E0B;
          color: #0f172a;
          font: 700 0.75rem var(--font-display);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 4px;
          margin-bottom: 16px;
        }

        .article-hero h1 {
          font-size: 2.75rem;
          max-width: 20ch;
          line-height: 1.2;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .article-dek {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.75);
          max-width: 65ch;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .article-meta {
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .article-meta strong { color: rgba(255, 255, 255, 0.9); }

        .article-img-wrapper {
          margin-top: -40px;
          position: relative;
          z-index: 2;
          margin-bottom: 50px;
        }

        .article-image {
          width: 100%;
          max-height: 480px;
          object-fit: cover;
          border-radius: 12px;
          border: 4px solid #ffffff;
        }

        .article-body {
          max-width: 820px;
          padding-bottom: 80px;
        }

        .article-content-main p {
          font-size: 1.1rem;
          line-height: 1.85;
          color: #334155;
          margin-bottom: 28px;
        }

        .article-sidebar-box {
          margin-top: 50px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-left: 5px solid #F59E0B;
          padding: 32px;
          border-radius: 8px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .sidebar-icon {
          width: 40px;
          height: 40px;
          background: #0f172a;
          color: #F59E0B;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .article-sidebar-box strong {
          display: block;
          font-size: 1.1rem;
          color: #0f172a;
          margin-bottom: 6px;
          font-family: var(--font-display);
        }

        .article-sidebar-box p {
          color: #64748B;
          margin: 0;
          font-size: 0.98rem;
          line-height: 1.6;
        }

        .article-empty {
          padding-top: 170px;
          min-height: 60vh;
        }

        /* Smooth Cinematic Fade-in Animation */
        .smooth-fade-in {
          animation: fadeInSmooth 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInSmooth {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media(max-width: 768px) {
          .article-hero { padding: 130px 0 40px; }
          .article-hero h1 { font-size: 2rem; }
          .article-image { max-height: 300px; border-width: 2px; }
          .article-sidebar-box { flex-direction: column; gap: 14px; padding: 24px; }
        }
      `}</style>
    </article>
  )
}