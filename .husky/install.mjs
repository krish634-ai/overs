// .husky/install.mjs
// Skip Husky install in CI and production (Vercel sets CI=true)
if (process.env.CI === 'true' || process.env.NODE_ENV === 'production' || process.env.VERCEL) {
  process.exit(0)
}

const husky = (await import('husky')).default
// run husky install (silent)
try {
  await husky()
} catch (e) {
  // If husky install fails locally, just show it but don't crash CI
  console.error('husky install error:', e)
}
