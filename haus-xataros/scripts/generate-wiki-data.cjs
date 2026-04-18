const path = require('node:path')

async function main() {
  const { writeGeneratedWikiData } = await import('./wiki/generateWikiContent.mjs')

  writeGeneratedWikiData({
    rootDir: path.resolve(__dirname, '..', 'wiki-content'),
    outputFile: path.resolve(__dirname, '..', 'src', 'data', 'wiki.generated.ts'),
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
