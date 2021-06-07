<script lang="ts">
  import GithubIcon from './components/GithubIcon.svelte';
  import MediaQuery from './components/MediaQuery.svelte';
  import Plates from './Plates.svelte';
</script>

<main>
  <h1>Hello <br />Zone Plate!</h1>
  <MediaQuery query="(min-width: 1281px)" let:matches>
    {#if matches}
      <Plates total={20} />
    {/if}
  </MediaQuery>

  <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
    {#if matches}
      <Plates total={10} />
    {/if}
  </MediaQuery>

  <MediaQuery query="(max-width: 480px)" let:matches>
    {#if matches}
      <Plates total={5} />
    {/if}
  </MediaQuery>

  <GithubIcon url="https://github.com/AkatQuas/zone-plate" />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
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
