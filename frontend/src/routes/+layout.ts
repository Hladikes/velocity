import type { Load } from '@sveltejs/kit'
import { protect } from '$lib/auth'

export const prerender = true
export const ssr = false
export const trailingSlash = 'always'

export const load: Load = async ({ url }) => {
  protect(url.pathname)
  return {}
}