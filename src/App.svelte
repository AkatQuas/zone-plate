<script lang="ts">
  import { onMount } from 'svelte';
  import List from './components/List.svelte';
  import { subscribe, next } from './plates';

  let list: string[] = [];
  subscribe((value) => {
    list = value;
  })

	onMount(next);
</script>

<main>
  <h1>Hello <br />Zone Plate!</h1>
  <button on:click={next}>Next Random</button>
  <List list={list} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }
</style>
