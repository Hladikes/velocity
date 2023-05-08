<script lang="ts">
  import { isAuthorized } from '$lib/auth'
  import { goto } from '$app/navigation'
  import { fly } from 'svelte/transition'

  export let data
</script>

<section transition:fly={{ y: 20 }} class="bg-white w-full h-full xl:h-auto xl:w-2/5 absolute rounded-lg border border-gray-300 p-10 shadow-md">
  <h1 class="text-5xl mb-8">
    <span class="text-orange-600">SvelteKit</span>
    <span class="text-emerald-600">Tailwind</span>
    <span class="text-cyan-600">TRPC</span>
    <span>Prisma</span>
  </h1>

  <div class="space-y-2">
    <h3 class="text-2xl space-x-3">
      <span class="font-mono">✅</span>
      <span>{data.trpcMsg}</span>
    </h3>
    
    <h3 class="text-2xl space-x-3">
      <span class="font-mono">✅</span>
      <span>{data.prismaMsg?.msg}</span>
    </h3>
  </div>

  <hr class="my-5">

  <button
    class="hover:underline"
    on:click={() => {
      isAuthorized.set(false)
      goto('/auth')
    }}>⬅️ Logout</button>
</section>