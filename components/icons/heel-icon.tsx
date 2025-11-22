interface HeelIconProps {
  className?: string
  fill?: boolean
}

export function HeelIcon({ className = "w-5 h-5", fill = false }: HeelIconProps) {
  if (fill) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M21 18H3v2h18v-2zM19.5 16H4.5l1-3h.5l2-6c.3-1 1.2-2 2.5-2.5l5-2c1.2-.4 2.5 0 3.2.8l3.3 4c.7.8.8 2 .3 3l-2.8 5.7z" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 18h18" />
      <path d="M5 16h14" />
      <path d="M6 16l2-6c.3-1 1.2-2 2.5-2.5l5-2c1.2-.4 2.5 0 3.2.8l3.3 4c.7.8.8 2 .3 3L19 16" />
    </svg>
  )
}
