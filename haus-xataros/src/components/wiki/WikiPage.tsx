import { Link } from 'react-router-dom'
import type { WikiPageRecord } from '../../data/wiki'
import WikiContentRenderer from './WikiContentRenderer'
import WikiReferenceGroups from './WikiReferenceGroups'
import WikiSidebar from './WikiSidebar'
import styles from './WikiPage.module.css'

export default function WikiPage({ page }: { page: WikiPageRecord }) {
  return (
    <section className={styles.shell}>
      <WikiSidebar sections={page.sidebarSections} />

      <article className={styles.page} data-testid="wiki-entry">
        <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
          {page.breadcrumbs.map(({ label, href }, index) => (
            <span key={href}>
              {index > 0 && <span className={styles.separator}>/</span>}
              <Link to={href}>{label}</Link>
            </span>
          ))}
        </nav>

        <div className={styles.hero}>
          <p className={styles.kicker}>{page.sectionTitle}</p>
          <h1 className={styles.title} data-testid="wiki-page-title">{page.title}</h1>
          {page.summary && <p className={styles.summary}>{page.summary}</p>}
        </div>

        {page.isSectionIndex && page.childPages.length > 0 && (
          <section className={styles.directory}>
            <h2 className={styles.childHeading}>Pages in this section</h2>
            <div className={styles.directoryList} data-testid="wiki-search-results">
              {page.childPages.map((childPage) => (
                <Link className={styles.directoryRow} data-testid="wiki-article-card" key={childPage.routePath} to={childPage.routePath}>
                  <span className={styles.directoryTitle}>{childPage.title}</span>
                  <span className={styles.directorySummary}>{childPage.summary}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <WikiContentRenderer content={page.content} pageTitle={page.title} />
      </article>

      <WikiReferenceGroups groups={page.relatedGroups} />
    </section>
  )
}
