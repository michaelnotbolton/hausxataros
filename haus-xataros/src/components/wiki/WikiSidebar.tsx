import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { WikiSidebarSection } from '../../data/wiki'
import styles from './WikiSidebar.module.css'

export default function WikiSidebar({ sections }: { sections: WikiSidebarSection[] }) {
  const visibleSections = sections.filter((section) => section.pages.length > 0)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    Object.fromEntries(visibleSections.map((section) => [section.slug, section.isActive])),
  )

  function toggleSection(slug: string) {
    setExpandedSections((current) => ({
      ...current,
      [slug]: !current[slug],
    }))
  }

  return (
    <aside className={styles.sidebar} data-testid="wiki-sidebar">
      <Link className={styles.homeLink} to="/wiki">Main Wiki</Link>
      <p className={styles.kicker}>Browse the vault</p>
      {visibleSections.map((section) => {
        const isExpanded = expandedSections[section.slug] ?? false

        return (
          <section className={styles.section} data-testid="wiki-sidebar-section" key={section.slug}>
            <div className={styles.sectionHeader}>
              <button
                className={styles.toggle}
                type="button"
                aria-expanded={isExpanded}
                onClick={() => toggleSection(section.slug)}
              >
                {section.title}
              </button>
              <Link className={styles.sectionLink} to={section.routePath}>
                Open
              </Link>
            </div>
            {isExpanded && (
              <div className={styles.pageList}>
                {section.pages.map((page) => (
                  <Link
                    key={page.routePath}
                    className={page.isActive ? styles.activePage : styles.pageLink}
                    data-testid={page.isActive ? 'wiki-sidebar-active' : undefined}
                    to={page.routePath}
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            )}
          </section>
        )
      })}
    </aside>
  )
}
