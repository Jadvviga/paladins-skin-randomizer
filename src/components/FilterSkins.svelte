<h3>Filter skins:</h3>
<div class="checkbox_list">
    <SkinCheckbox
        tooltip="Here will go text aa aa aa aa aa aa aaa aa a a aaa a aaa aa aa aaaa aaa aa a aaaa aaa aa"
    />

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


    //export let selectedFilters = [];





</script>

<style>
.checkbox_list {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    

</style>