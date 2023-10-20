<h1>Welcome to Paladins skin randomizer</h1>
<div id="rand_container">
    {#if randSkin}
        <h3>{randSkin.name} {randSkin.champion}</h3>
    {:else}
        <h3>Click below to get random skin!</h3>
    {/if}
    <button
        id="rand_button"
        on:click={getRandomSkin}>
        
        {#if randSkin}
            <img src="src/data/skins_img/{String(randSkin.champion).toLowerCase().replaceAll(' ', '_')}/{randSkin.fileName}" alt="Randomized champion">
        {:else}
            gimmie random skin!
        {/if}
    </button>
    
</div>





<script lang="ts">
	import { onMount } from "svelte";
    import { Champions, assignFileNames, skins } from "../data/skinsData";
    import type { Skin } from "../data/skinsData";

    const  SKINS_COUNT = skins.length;
    let randSkin: Skin;

   

    function getRandomSkin() {
        const rand = Math.floor(Math.random() * SKINS_COUNT);
        randSkin = skins[rand];
    }

    onMount(() => {
        assignFileNames();
    })



</script>

<style>
	#rand_container {
		text-align: center;
	}

    #rand_button {
        width: 650px;
        height: 650px;
        font-size: 5em;
    }

</style>