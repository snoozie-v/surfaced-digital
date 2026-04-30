import { readFileSync, writeFileSync, rmSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const { render } = await import(path.resolve(root, 'dist/server/entry-server.js'))
const template = readFileSync(path.resolve(root, 'dist/index.html'), 'utf-8')
const html = template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
writeFileSync(path.resolve(root, 'dist/index.html'), html)

rmSync(path.resolve(root, 'dist/server'), { recursive: true })
console.log('Pre-render complete.')
