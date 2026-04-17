import type { HTMLAttributes } from 'react'
import styles from './Tag.module.css'

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'gold' | 'muted'
}

export default function Tag({ tone = 'gold', className, ...props }: TagProps) {
  const classes = [styles.tag, tone === 'muted' ? styles.muted : styles.gold, className]
    .filter(Boolean)
    .join(' ')

  return <span className={classes} {...props} />
}
