<script>
  import { onMount } from 'svelte';
  import Card from './Card.svelte';

  export let col = 0;
  export let list;

  onMount(() => {
    console.log('mount', col);
  })
</script>

<style>
  ul {
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: #eee;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    overflow: hidden;
  }
  ul.col-1 {
    padding: 0.5rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.25rem;
  }
  ul.col-2 {
    padding: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
  }
  li {
    list-style: none;
  }
</style>

<ul class="{col > 0 ? `col-${col}` : ''}">
  {#each list as no (no)}
    <li>
      <Card no={no} />
    </li>
  {/each}
</ul>
