import { useState } from 'react'
import Icon from './Icon.jsx'

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.q}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <Icon name="chevron-down" size={18} className="faq-chevron" />
            </button>
            {isOpen && <p className="faq-answer">{item.a}</p>}
          </div>
        )
      })}

      <style>{`
        .faq-list { border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-question {
          width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px;
          background: none; border: none;
          padding: 22px 4px;
          text-align: left;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1rem;
          color: var(--ink);
        }
        .faq-chevron { transition: transform 0.2s ease; color: var(--steel); flex-shrink: 0; }
        .faq-item.open .faq-chevron { transform: rotate(180deg); color: var(--safety); }
        .faq-answer { padding: 0 4px 22px; max-width: 70ch; }
      `}</style>
    </div>
  )
}
