<div id="wrapper">
    <div class="container">
        <FilterSkins
            bind:selectedFilters={selectedSkinFilters}/>
    </div>
    <div class=" container rand_container">
        {#if showText}
            <h3>{text}</h3>
        {:else}
            <h3>{randSkin.name} {randSkin.champion}</h3>
        {/if}
        <img
            class="rand_button {showRandomGif? 'hidden': ''}"
            on:click={randomizeSkin}
            src={randSkin ? getFilePath(randSkin) : RAND_BTN_PATH}
            alt="Randomized champion">
        <img
            class="rand_button rand_img {showRandomGif? '': 'hidden'}"
            style="--background-col:{randBtnBorderColor}"
            src={`${$page.url}/img/randomize${randomizeImgId}.gif`}
            alt="Randomized champion">
    </div>
    <div class="container">
        champion filters will go here
    </div>
    

</div>


<script lang="ts">
	import { onMount } from "svelte";
    import { Champions, skins, getFileName, getIconName, getChampForFile } from "../data/skinsData";
    import type { Skin } from "../data/skinsData";
    import { page } from '$app/stores';
    import FilterSkins from "../components/FilterSkins.svelte";

    const COLORS = ["red", "orange", "yellow", "yellowgreen", "green", "aqua", "dodgerblue", "blue", "indigo", "darkmagenta", "deeppink"];
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
    let showText = true;

    let selectedSkinFilters: Array<any>;

    $: filteredSkins = getFilteredSkins(selectedSkinFilters);
    $: {console.log(filteredSkins)}


    function getFilteredSkins(skinFilters: Array<any>): Array<Skin> {
        if (!skinFilters) {
            return [];
        }

        //TODO
        const ifFilteredOut = (skin: Skin) => {
            return skinFilters.some(skinFilter => {
                return skinFilter.filter === skin.availability
                    || skinFilter.filter === skin.type;
            })
        }
        const skinsCopy = [...skins]

        return skinsCopy.filter(skin => !ifFilteredOut(skin))
    }



    function setRandomSkin() {
        const SKINS_COUNT = skins.length;

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
        showText = false;
    }

    function randomizeSkin() {
        if (borderColorInterval) {
            return;
        }
        text = "Randomizing...";
        showText = true;
        showRandomGif = true;
        borderColorInterval = window.setInterval(setBorderColor, 100);
        stopInterval = window.setInterval(stopRandomizing, 3000);
        setRandomSkin();
    }

    function getFilePath(skin: Skin): string {
        const fileName = getFileName(skin);
        const champ = getChampForFile(skin.champion);
        return `${$page.url}/img/skins_img/${champ}/${fileName}.png`;
    }





</script>

<style>

    #wrapper {
        margin-top: 2em;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }
	.rand_container {
		display: flex;
        flex-direction: column;
        align-items: center;
	}
    .container:not(:nth-child(2)) {
        flex-basis: 0%;
        flex-grow: 1;
        max-width: 30%;
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

    .hidden {
        display: none;
    }


</style>