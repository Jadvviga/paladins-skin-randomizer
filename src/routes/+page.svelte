<h1>Welcome to SvelteKit</h1>
<h2>skins count: {skins.length}</h2>
{#each skins as skin}
    <span>{skin.champion} - {skin.name}</span>
{/each}


<script lang="ts">
	import { onMount } from "svelte";
    import { Champions, skins } from "../data/skinsData";
    import type { Skin } from "../data/skinsData";

    function getFileName(skin: Skin) {
        const champ = String(skin.champion).toLowerCase().replaceAll(' ', '_');
        const name = String(skin.name).toLowerCase().replaceAll(' ', '_');
        return champ.concat('_', name)
    }

    function getIconName(champion: string) {
        const name = String(champion).toLowerCase().replaceAll(' ', '_');
        return name.concat('_', 'icon');
    }



    onMount(() => {
        let count = 0;
        for (const champ in Champions) {
            //CHAMPION ICONS SHOULD ALL BE 256x256
            console.log(getIconName(champ))
            count++
            // if (skin.champion === Champions.Androxus) {
            //     count++;
            //     console.log(getFileName(skin))
            // }
            
            
        }
        console.log(count)
    })


</script>
