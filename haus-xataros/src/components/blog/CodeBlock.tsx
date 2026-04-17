import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section role="region" aria-label="code block">
      {language && <span>{language}</span>}
      <pre><code>{code}</code></pre>
      <button onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </section>
  )
}
