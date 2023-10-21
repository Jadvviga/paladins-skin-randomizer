<h2>Welcome to Paladins skin randomizer</h2>
<div id="rand_container">
    {#if randSkin && randBtnBorderColor === BORDER_DEFAULT}
        <h3>{randSkin.name} {randSkin.champion}</h3>
    {:else}
        <h3>{text}</h3>
    {/if}
    {#if showRandomGif}
        <img
            class="rand_button rand_img"
            style="--background-col:{randBtnBorderColor}"
            src={`${$page.url}/img/randomize${randomizeImgId}.gif`}
            alt="Randomized champion">
    {:else}
        <img
            class="rand_button"
            on:click={randomizeSkin}
            src={randSkin ? getFilePath(randSkin) : RAND_BTN_PATH}
            alt="Randomized champion">
    {/if}
    

    
</div>


<script lang="ts">
	import { onMount } from "svelte";
    import { Champions, skins, getFileName, getIconName, getChampForFile } from "../data/skinsData";
    import type { Skin } from "../data/skinsData";
    import { page } from '$app/stores';

    const COLORS = ["red", "orange", "yellow", "yellowgreen", "green", "aqua", "dodgerblue", "blue", "indigo", "darkmagenta", "deeppink"]
    const SKINS_COUNT = skins.length;
    const BORDER_DEFAULT = "black";
    const TEXT_DEFAULT = "Click below to get random skin!";
    const RAND_BTN_PATH = `${$page.url}/img/random_btn.png`;

    let randSkin: Skin;
    let randNumber: number;
    let randBtnBorderColor = "orange";
    let colorCounter = 0;
    let borderColorInterval = null;
    let stopInterval = null;
    let text = TEXT_DEFAULT;
    let showRandomGif = false;
    let randomizeImgId = 0;


    function setRandomSkin() {
        randNumber = Math.floor(Math.random() * SKINS_COUNT);
        while (skins[randNumber] === randSkin) {
            randNumber = Math.floor(Math.random() * SKINS_COUNT);
        }
        randSkin = skins[randNumber];
        
    }
    
    function setBorderColor() {
        randBtnBorderColor = COLORS[colorCounter];
        colorCounter++;
        if (colorCounter >= COLORS.length) {
            colorCounter = 0;
        }
    }

    function stopRandomizing() {
        randBtnBorderColor = BORDER_DEFAULT;
        showRandomGif = false;
        randomizeImgId = Math.floor(Math.random() * 3);
        window.clearInterval(borderColorInterval);
        window.clearInterval(stopInterval)
        borderColorInterval = null;
        stopInterval = null;
    }

    function randomizeSkin() {
        if (borderColorInterval) {
            return;
        }
        setRandomSkin();
        text = "Randomizing...";
        showRandomGif = true;
        borderColorInterval = window.setInterval(setBorderColor, 100);
        stopInterval = window.setInterval(stopRandomizing, 3000)
    }

    function getFilePath(skin: Skin): string {
        const fileName = getFileName(skin);
        const champ = getChampForFile(skin.champion);
        return `${$page.url}/img/skins_img/${champ}/${fileName}.png`;
    }





</script>

<style>
	#rand_container {
		display: flex;
        flex-direction: column;
        align-items: center;
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
        display: block;
        text-align: center;
        padding: 5px;
    }

    .rand_button:hover {
       opacity: 0.85;
    }
    .rand_button:active {
       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
       
    }

    .rand_img {
        background-color: var(--background-col);
    }


</style>