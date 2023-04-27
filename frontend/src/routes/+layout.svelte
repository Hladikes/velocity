<script>
  import '../app.css' 
  import { isAuthorized } from '$lib/auth'
</script>

<main class="h-screen flex items-center justify-center select-none">
  {#if $isAuthorized}
    <slot></slot>
  {:else}
    <div class="bg-white rounded-lg border border-gray-300 px-10 py-8 shadow-md flex flex-col space-y-7">
      <h1 class="text-4xl">Unauthorized 👮</h1>
      <button 
        on:click={() => isAuthorized.set(true)}
        class="px-3 py-2 bg-stone-950 hover:bg-opacity-80 text-white shadow-md rounded-lg font-medium">Authorize me</button>
    </div>
  {/if}
</main>