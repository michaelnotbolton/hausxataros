import styles from './Footer.module.css'

const socialLinks = [
  { label: 'Substack', href: '#' },
  { label: 'Bluesky', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav aria-label="Social media links" className={styles.nav}>
        {socialLinks.map(({ label, href }) => (
          <a className={styles.link} key={label} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ))}
      </nav>
      <p className={styles.copy}>© Haus Xataros</p>
    </footer>
  )
}
