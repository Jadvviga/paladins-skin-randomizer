<h2>Welcome to Paladins skin randomizer</h2>
<div id="rand_container">
    {#if randSkin && randBtnBorderColor === BORDER_DEFAULT}
        <h3>{randSkin.name} {randSkin.champion}</h3>
    {:else}
        <h3>{text}</h3>
    {/if}
    <img
        class="rand_button rand_img"
        style="--background-col:{randBtnBorderColor}"
        on:click={randomizeSkin}
        src={randSkin ? getFilePath(randSkin) : RAND_BTN_PATH}
        alt="Randomized champion">
    
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

    let randSkin: Skin;
    let randNumber: number;
    let randBtnBorderColor = BORDER_DEFAULT;
    let colorCounter = 0;
    let borderColorInterval = null;
    let stopInterval = null;
    let text = TEXT_DEFAULT;

    const RAND_BTN_PATH = `${$page.url}/img/random_btn.png`

    function setRandomSkin() {
        randNumber = Math.floor(Math.random() * SKINS_COUNT);
        while (skins[randNumber] === randSkin) {
            randNumber = Math.floor(Math.random() * SKINS_COUNT);
        }
        
    }
    
    function setBorderAndImg() {
        randBtnBorderColor = COLORS[colorCounter];
        console.log(randBtnBorderColor)
        colorCounter++;
        if (colorCounter >= COLORS.length) {
            colorCounter = 0;
        }

        const r = Math.floor(Math.random() * SKINS_COUNT);
        randSkin = skins[r];
    }

    function stopRandomizing() {
        randBtnBorderColor = BORDER_DEFAULT;
        randSkin = skins[randNumber];
        window.clearInterval(borderColorInterval);
        window.clearInterval(stopInterval)
    }

    function randomizeSkin() {
        setRandomSkin();
        text = "Randomizing..."
        borderColorInterval = window.setInterval(setBorderAndImg, 100);
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
        width: 510px;
        height: 510px;
        border-radius: 20px;
        background-color: var(--background-col);
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


</style>