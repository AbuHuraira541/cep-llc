import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import CTA from '../components/CTA.jsx'
import { blogCategories, posts } from '../data/blog.js'

export default function Blog() {
  const [active, setActive] = useState('All')
  const filtered = useMemo(() => active === 'All' ? posts : posts.filter((post) => post.category === active), [active])
  return <>
    <PageBanner kicker="Construction Insights" title="Useful estimating perspective for better bids" description="Practical articles about takeoffs, estimating workflows, bid scope and early project planning." />
    <section className="section">
      <div className="container">
        <div className="blog-filters" aria-label="Blog categories">{blogCategories.map((category) => <button className={active === category ? 'active' : ''} onClick={() => setActive(category)} key={category}>{category}</button>)}</div>
        <div className="grid grid-2 blog-grid">
          {filtered.map((post) => <article className="blog-card" key={post.slug}>
            <img src={post.image} alt="" />
            <div className="blog-card-body"><span>{post.category}</span><h2>{post.title}</h2><p>{post.excerpt}</p><div className="blog-meta">{post.date} <i /> {post.readTime}</div><Link to={`/insights/${post.slug}`} className="text-link">Read article →</Link></div>
          </article>)}
        </div>
      </div>
    </section>
    <CTA title="Need estimating support for an active bid?" description="Share your plan set and scope. We’ll help you identify the right estimating service." />
    <style>{`
      .blog-filters{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:36px}.blog-filters button{border:1px solid var(--line);background:var(--white);padding:9px 15px;color:var(--ink);font:600 .85rem var(--font-display)}.blog-filters button.active,.blog-filters button:hover{background:var(--ink);border-color:var(--ink);color:var(--white)}
      .blog-grid{gap:28px}.blog-card{display:grid;grid-template-columns:220px 1fr;background:var(--white);border:1px solid var(--line);transition:transform .2s ease,box-shadow .2s ease}.blog-card:hover{transform:translateY(-3px);box-shadow:0 18px 36px rgba(14,27,43,.09)}.blog-card img{width:100%;height:100%;min-height:240px;object-fit:cover}.blog-card-body{padding:28px}.blog-card-body>span{font:700 .75rem var(--font-display);color:var(--safety);text-transform:uppercase;letter-spacing:.07em}.blog-card h2{font-size:1.4rem;margin:9px 0 12px}.blog-meta{font-size:.8rem;color:var(--ink-50);margin:18px 0}.blog-meta i{display:inline-block;width:3px;height:3px;background:currentColor;border-radius:50%;vertical-align:middle;margin:0 8px}.text-link{font:700 .9rem var(--font-display);color:var(--steel)}.text-link:hover{color:var(--safety)}@media(max-width:700px){.blog-card{grid-template-columns:1fr}.blog-card img{height:220px;min-height:0}}
    `}</style>
  </>
}
