import { Link } from 'react-router-dom'
import type { WikiContentBlock, WikiTextSpan } from '../../data/wiki'
import styles from './WikiPage.module.css'

function renderSpans(spans: WikiTextSpan[]) {
  return spans.map((span, index) => {
    if (span.type === 'wiki-link') {
      if (span.status === 'resolved' && span.href) {
        return (
          <Link key={`${span.text}-${index}`} to={span.href}>
            {span.text}
          </Link>
        )
      }

      return (
        <span key={`${span.text}-${index}`} className={styles.unresolvedLink} data-testid="wiki-unresolved-link">
          {span.text}
        </span>
      )
    }

    if (span.type === 'strong') {
      return <strong key={`${span.text}-${index}`}>{span.text}</strong>
    }

    if (span.type === 'emphasis') {
      return <em key={`${span.text}-${index}`}>{span.text}</em>
    }

    return <span key={`${span.text}-${index}`}>{span.text}</span>
  })
}

export default function WikiContentRenderer({
  content,
  pageTitle,
}: {
  content: WikiContentBlock[]
  pageTitle: string
}) {
  return (
    <div className={styles.body} data-testid="wiki-entry-body">
      {content.map((block, index) => {
        if (block.type === 'heading') {
          if (block.level === 1 && block.text === pageTitle) {
            return null
          }
          if (block.level === 1) return <h1 key={`${block.id}-${index}`}>{block.text}</h1>
          if (block.level === 2) return <h2 key={`${block.id}-${index}`}>{block.text}</h2>
          return <h3 key={`${block.id}-${index}`}>{block.text}</h3>
        }

        if (block.type === 'paragraph') {
          return <p key={`paragraph-${index}`}>{renderSpans(block.spans)}</p>
        }

        if (block.type === 'blockquote') {
          return (
            <blockquote key={`quote-${index}`} className={styles.callout} data-testid="wiki-callout">
              {renderSpans(block.spans)}
            </blockquote>
          )
        }

        if (block.type === 'list') {
          return (
            <ul key={`list-${index}`}>
              {block.items.map((item, itemIndex) => (
                <li key={`item-${itemIndex}`}>{renderSpans(item)}</li>
              ))}
            </ul>
          )
        }

        if (block.type === 'table') {
          return (
            <div className={styles.tableWrap} key={`table-${index}`}>
              <table>
                <thead>
                  <tr>
                    {block.header.map((cell) => (
                      <th key={cell}>{cell}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`}>
                      {row.map((cell, cellIndex) => (
                        <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }

        return (
          <pre key={`code-${index}`}>
            <code>{block.code}</code>
          </pre>
        )
      })}
    </div>
  )
}
