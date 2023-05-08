<script>
  import '../app.css' 
  import { beforeNavigate, afterNavigate, goto } from '$app/navigation'
  import { isAuthorized } from '$lib/auth'

  afterNavigate((navigation) => {
    if (navigation.from === null || navigation.to?.route.id === '/') {
      goto('/auth')
    }
  })

  beforeNavigate((navigation) => {
    if (!$isAuthorized && navigation.to?.route.id !== '/auth') {
      navigation.cancel()
    }

    if ($isAuthorized && navigation.to?.route.id === '/auth') {
      navigation.cancel()
    }
  })
</script>

<main class="h-screen flex items-center justify-center select-none">
  <slot></slot>
</main>