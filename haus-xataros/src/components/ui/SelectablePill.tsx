import type { ButtonHTMLAttributes } from 'react'
import styles from './SelectablePill.module.css'

interface SelectablePillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
}

export default function SelectablePill({
  className,
  selected = false,
  type = 'button',
  ...props
}: SelectablePillProps) {
  const classes = [styles.pill, selected ? styles.selected : '', className].filter(Boolean).join(' ')

  return <button aria-pressed={selected} className={classes} type={type} {...props} />
}
