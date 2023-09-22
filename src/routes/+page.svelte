<h1>Welcome to SvelteKit</h1>
<h2>skins count: {skins.length}</h2>
{#each skins as skin}
    <span>{skin.champion} - {skin.name}</span>
{/each}


<script lang="ts">
    import { skins } from "../data/skinsData";


</script>
