import { writable, get } from 'svelte/store'
import { redirect } from '@sveltejs/kit'
import { browser } from '$app/environment'

export const isAuthorized = writable(false)

export function protect(pathname?: string) {
  if (browser && !get(isAuthorized) && !pathname?.includes('/auth'))  {
    throw redirect(301, '/auth')
  }
}