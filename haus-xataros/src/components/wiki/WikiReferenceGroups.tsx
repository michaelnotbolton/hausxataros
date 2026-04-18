import { Link } from 'react-router-dom'
import type { WikiReferenceGroup } from '../../data/wiki'
import styles from './WikiReferenceGroups.module.css'

export default function WikiReferenceGroups({ groups }: { groups: WikiReferenceGroup[] }) {
  if (groups.length === 0) return null

  return (
    <aside className={styles.panel}>
      {groups.map((group) => (
        <section className={styles.group} data-testid="wiki-reference-group" key={group.title}>
          <h2 className={styles.heading}>{group.title}</h2>
          <div className={styles.cards}>
            {group.items.map((item) => (
              item.href ? (
                <Link className={styles.card} data-testid="wiki-reference-card" key={`${group.title}-${item.targetSlug}`} to={item.href}>
                  <span className={styles.label}>{item.label}</span>
                </Link>
              ) : (
                <div className={styles.cardMuted} data-testid="wiki-reference-card" key={`${group.title}-${item.targetSlug}`}>
                  <span className={styles.label}>{item.label}</span>
                </div>
              )
            ))}
          </div>
        </section>
      ))}
    </aside>
  )
}
