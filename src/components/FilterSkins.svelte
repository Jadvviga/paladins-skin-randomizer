<h3>Skins' filters:</h3>
<div class="checkbox_list">
    {#each skinFilters as filter}
        {#if filter.children}
            <SkinCheckboxGroup
                checkboxParent={filter}
                checkboxChildren={filter.children}
                on:toggle={handleFilters}
            />
        {:else if filter.display !== false}
            <SkinCheckbox
                label={filter.label}
                tooltip={filter.tooltip}
                on:toggle={handleFilters}
            />
        {/if}
        
    {/each}
    

</div>




<script lang="ts">
    import {  SkinType, Availability } from "../data/skinsData";
    import SkinCheckbox from "./SkinCheckbox.svelte";
    import SkinCheckboxGroup from "./SkinCheckboxGroup.svelte";

    
    const skinFilters = [
        {
            label: "Default skins",
            filter: SkinType.default
        },
        {
            label: "Recolors",
            tooltip: "Recolors of default model of champion, including recolors of old models.\nDOES NOT INCLUDE LIMITED SKINS\n(like recolors from season passes)",
            filter: SkinType.recolor
        },
        {
            label: "'Special' skins",
            tooltip: "Special skins available only via special means and not via purchase - for example by having a specific account or getting a stream drop.\nExamples: X Androxus, TF2 Barik, Mixer Khan.\n  DOES NOT INCLUDE LIMITED SKINS",
            filter: SkinType.special,
        },
        {
            label: "'Hat' skins",
            tooltip: "Skins where the only change is character hat or other clothing part.\nDOES NOT INCLUDE LIMITED SKINS",
            filter: SkinType.hat
        },
        {
            label: "Mastery skins",
            filter: Availability.mastery,
            children: [
                {
                    label: "Cosmic skins",
                    filter: SkinType.cosmic
                    
                },
                {
                    label: "Obsidian skins",
                    filter: SkinType.obsidian
                    
                },
                {
                    label: "Golden skins",
                    filter: SkinType.golden
                    
                }
            ]
        },
        {
            label: "Cosmic skins",
            display: false,
            filter: SkinType.cosmic
            
        },
        {
            label: "Obsidian skins",
            display: false,
            filter: SkinType.obsidian
            
        },
        {
            label: "Golden skins",
            display: false,
            filter: SkinType.golden
            
        },
        {
            label: "Limited skins",
            tooltip: "Skins available only during limited time (season pass, event pass etc.)",
            filter: Availability.limited
            
        },
        {
            label: "Everything else"
        }
       
    ];
    
    export let selectedFilters = [...skinFilters];

    function handleFilters(event: any) {
        const { checked, label } = event.detail;
        const filter = skinFilters.find(f => f.label === label);
        if (!filter) {
            return;
        }
        if (checked) { 
            selectedFilters.push(filter);
            if (filter.children) {
                filter?.children.forEach(child => {
                    selectedFilters.push(child)
                })
            }
        } else { 
            selectedFilters = selectedFilters.filter(f => f.label !== label);
            if (filter.children) {
                filter?.children.forEach(child => {
                    selectedFilters = selectedFilters.filter(f => f.label !== child.label);
                })
            }
        }
    } 



</script>

<style>
    .checkbox_list {
        display: flex;
        align-items: start;
        flex-direction: column;
        justify-content: center;
        margin-left: 10em;
    }
    

</style>