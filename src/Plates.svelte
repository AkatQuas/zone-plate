<script lang="ts">

  import { onMount } from 'svelte';
  import List from './components/List.svelte';
  import { next,subscribe } from './plates';

  export let total = 20;

  let list: string[] = [];
  subscribe((value) => {
    list = value;
  })

  function makeNext() {
    next(total)
  }

	onMount(makeNext);
</script>

<section>
  <button on:click={makeNext}>Next Random</button>
  <List list={list} col={total/5} />
</section>

<style>
  button {
    outline: none;
    border: none;
    cursor: pointer;
    padding: .5rem;
    border-radius: .2rem;
    background-color: #eee;
  }
</style>
