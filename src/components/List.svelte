<script>
  export let list;
  import Card from './Card.svelte';
</script>

<style>
  ul {
    padding: 1rem;
    border-radius: 0.5rem;
    background: #eee;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1rem;
  }
  li {
    list-style: none;
  }
</style>

<ul>
  {#each list as no (no)}
    <li>
      <Card no={no} />
    </li>
  {/each}
</ul>
