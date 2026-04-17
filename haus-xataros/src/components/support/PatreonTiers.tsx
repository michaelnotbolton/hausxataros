import styles from './PatreonTiers.module.css'

interface Tier {
  name: string
  includes: string[]
}

interface PatreonTiersProps {
  tiers: Tier[]
}

export default function PatreonTiers({ tiers }: PatreonTiersProps) {
  return (
    <section className={styles.grid} data-testid="patreon-tiers">
      {tiers.map(({ name, includes }) => (
        <article className={styles.card} key={name} data-testid="patreon-tier">
          <h3 className={styles.title}>{name}</h3>
          <ul className={styles.list} data-testid="tier-includes">
            {includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}
