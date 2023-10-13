<h1>Welcome to SvelteKit</h1>
<h2>skins count: {skins.length}</h2>
<h2>champs: {champsSize}</h2>


<script lang="ts">
	import { onMount } from "svelte";
    import { Champions, skins } from "../../data/skinsData"; 
    import type { Skin } from "../../data/skinsData";

    function getFileName(skin: Skin) {
        const champ = String(skin.champion).toLowerCase().replaceAll(' ', '_');
        const name = String(skin.name).toLowerCase().replaceAll(' ', '_');
        return champ.concat('_', name)
    }

    function getIconName(champion: string) {
        const name = String(champion).toLowerCase().replaceAll(' ', '_');
        return name.concat('_', 'icon');
    }

    $:  champsSize = Object.keys(Champions).length;


    onMount(() => {
       // champsSize = Champions.length;
       
    })


</script>
