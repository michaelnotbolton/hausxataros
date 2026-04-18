import { Link } from 'react-router-dom'
import { useState } from 'react'
import WikiSearch from '../components/wiki/WikiSearch'
import WikiSidebar from '../components/wiki/WikiSidebar'
import { getDefaultWikiPage, searchWikiPages } from '../data/wiki'
import styles from './Wiki.module.css'

export default function Wiki() {
  const [searchQuery, setSearchQuery] = useState('')
  const results = searchWikiPages(searchQuery)
  const defaultPage = getDefaultWikiPage()
  const browseSections = defaultPage?.sidebarSections.map((section) => ({
    ...section,
    isActive: false,
    pages: section.pages.map((page) => ({
      ...page,
      isActive: false,
    })),
  }))

  if (!defaultPage || !browseSections) {
    return null
  }

  return (
    <section className={styles.shell}>
      <WikiSidebar sections={browseSections} />

      <section className={styles.main}>
        <div className={styles.hero}>
          <p className={styles.kicker}>Obsidian Vault Wiki</p>
          <h1>The Wiki</h1>
          <p className={styles.summary}>
            Browse the published vault like a reference manual, then search when you know what
            you need.
          </p>
        </div>

        <WikiSearch value={searchQuery} onSearch={setSearchQuery} />

        {searchQuery ? (
          <section className={styles.resultSection}>
            <h2>Search Results</h2>
            <div className={styles.resultList} data-testid="wiki-search-results">
              {results.map((page) => (
                <Link className={styles.resultRow} key={page.routePath} to={page.routePath}>
                  <span className={styles.resultTitle}>{page.title}</span>
                  <span className={styles.resultMeta}>{page.sectionTitle}</span>
                  <span className={styles.resultSummary}>{page.summary}</span>
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <section className={styles.intro}>
            <h2>Start With {defaultPage.sectionTitle}</h2>
            <p>
              Use the sidebar to move through sections and pages. The article surface keeps
              hierarchy on the left and connected references nearby so the wiki stays readable.
            </p>
            <div className={styles.resultList} data-testid="wiki-search-results">
              {defaultPage.childPages.slice(0, 8).map((page) => (
                <Link className={styles.resultRow} key={page.routePath} to={page.routePath}>
                  <span className={styles.resultTitle}>{page.title}</span>
                  <span className={styles.resultSummary}>{page.summary}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </section>
    </section>
  )
}
