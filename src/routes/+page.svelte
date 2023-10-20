<h2>Welcome to Paladins skin randomizer</h2>
<div id="rand_container">
    {#if randSkin}
        <h3>{randSkin.name} {randSkin.champion}</h3>
    {:else}
        <h3>Click below to get random skin!</h3>
    {/if}
    <button
        class="rand_button btn"
        on:click={getRandomSkin}>
        
        {#if randSkin}
            <img class="rand_button rand_img" src={getFilePath(randSkin)} alt="Randomized champion">
        {:else}
            gimmie random skin!
        {/if}
    </button>
    
</div>





<script lang="ts">
	import { onMount } from "svelte";
    import { Champions, skins, getFileName, getIconName, getChampForFile } from "../data/skinsData";
    import type { Skin } from "../data/skinsData";
    import { page } from '$app/stores';

    const  SKINS_COUNT = skins.length;
    let randSkin: Skin;

    function getRandomSkin() {
        const rand = Math.floor(Math.random() * SKINS_COUNT);
        randSkin = skins[rand];
    }

    function getFilePath(skin: Skin): string {
        const fileName = getFileName(skin);
        const champ = getChampForFile(skin.champion);
        return `${$page.url}/img/skins_img/${champ}/${fileName}.png`;
    }




</script>

<style>
	#rand_container {
		text-align: center;
	}

    .rand_button {
        cursor: pointer;
        font-size: 5em;
        padding: 0;
        margin: 0;
        width: 500px;
        height: 500px;
        border-radius: 20px;
        background-color: black;
    }

    .rand_button:hover {
       opacity: 0.85;
    }
    .rand_button:active {
       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
       color: rgba(0, 0, 0, 0.5);
    }

    .rand_img {
        display: block;
    }

</style>