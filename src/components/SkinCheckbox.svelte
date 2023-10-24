<div class="checkbox_container">
    <input id={label} type="checkbox" class="checkbox">
    <label for={label}> {label}</label>
    {#if tooltip}
        <div class="tooltip">
            <span class="tooltip_simbol">?</span>
            <span class="tooltiptext">{tooltip}</span>
        </div> 
    {/if}
</div>



<script lang="ts">
	import { onMount } from "svelte";
    import { Champions, skins, getFileName, getIconName, getChampForFile } from "../data/skinsData";
    import type { Skin } from "../data/skinsData";
    import { page } from '$app/stores';
    import SkinCheckbox from "./SkinCheckbox.svelte";

    const COLORS = ["red", "orange", "yellow", "yellowgreen", "green", "aqua", "dodgerblue", "blue", "indigo", "darkmagenta", "deeppink"]
    const SKINS_COUNT = skins.length;
    const BORDER_DEFAULT = "black";
    const TEXT_DEFAULT = "Click below to get random skin!";
    const RAND_BTN_PATH = `${$page.url}/img/random_btn.png`;


    export let tooltip = "";
    export let label = "Checkbox"





</script>

<style>

    .checkbox_container {
        display: flex;
        align-items: start;
        flex-direction: row;
        justify-content: center;
        gap: 0.5em
    }

    label {
        text-align: left;
    }
    input[type="checkbox"]:checked::before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        background-color: white;
    }

    input[type="checkbox"]:hover {
        border: 2px solid cadetblue;
    }

    input[type="checkbox"]:checked {
        border: 2px solid cadetblue;
        background-color: cadetblue;
    }

    

    input[type="checkbox"] {
        appearance: none;
        cursor: pointer;
        width: 20px;
        height: 20px;
        border: 2px solid black;
        border-radius: 15%;
        color: white;
        margin: auto;
    }

    /* Tooltip container */
    .tooltip {
        text-align: left;
        position: relative;
        display: inline-block;
        cursor: pointer;
       
    }
    .tooltip_simbol {
        display: block;
        text-align: center;
        background-color: cadetblue;
        color: white;
        border-radius: 50%;
        width: 1em;
        height: 1em;
        font-weight: 600;
        font-size: 0.8em;
        padding: 2px;
    }

    /* Tooltip text */
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: #555;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;

        /* Position the tooltip text */
        position: absolute;
        z-index: 1;
        top: -5px;
        left: 125%;

        /* Fade in tooltip */
        opacity: 0;
        transition: opacity 0.3s;
    }

    .tooltiptext {
        font-weight: 200;
        font-size: 0.8em;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 0.9;
    } 
        

</style>