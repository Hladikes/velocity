<script lang="ts">
  import { goto } from '$app/navigation'
  import { fly } from 'svelte/transition'
  import { isAuthorized } from '$lib/auth'

  function authorize() {
    isAuthorized.set(true)
    goto('/home')
  }
</script>

<div transition:fly={{ y: -20, }} class="bg-white w-full h-full xl:h-auto xl:w-2/5 absolute rounded-lg border border-gray-300 p-10 shadow-md">
  <h1 class="text-4xl mb-6">Authorize</h1>
  <button 
    class="w-full py-3 px-4 bg-stone-950 text-white rounded-md shadow-md font-medium hover:bg-opacity-70"
    on:click={authorize}>Login</button>
</div>