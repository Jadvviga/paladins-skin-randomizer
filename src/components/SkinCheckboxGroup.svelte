
<SkinCheckbox
    label={checkboxParent.label}
    indeterminate={parentIndeterminate}
    bind:checked={parentChecked}
    on:toggle={(event) => setAllChildrenValue(event)}/>
<div class="checkbox_group_children">
    {#each checkboxChildren as child, index}
        <SkinCheckbox
            label={child.label}
            bind:checked={child.checked}
            on:toggle={(event) => setChildChecked(event, index)}/>
    {/each}
</div>

<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";


    import SkinCheckbox from "./SkinCheckbox.svelte";

    export let checkboxParent: any;
    export let checkboxChildren: Array<any> = [];

    let parentChecked = true
    let parentIndeterminate = false;

    const dispatcher = createEventDispatcher();

    function setChildChecked(event: any, index: number) {
        const { checked, label } = event.detail;
        checkboxChildren[index].checked = checked;
        parentIndeterminate = setParentIndeterminate(checkboxChildren)
        dispatcher("toggle", {checked, label})
    }

    function setParentIndeterminate(children: Array<any> ) {
        const allChecked = children.every(child => child.checked === true);
        const allUnchecked = children.every(child => child.checked === false);
        parentChecked = !allUnchecked;
        return allChecked || allUnchecked ? false : true;
    }

    function setAllChildrenValue(event: any) {
        const { checked, label } = event.detail;
        checkboxChildren.forEach(child => {
            child.checked = checked;
        });
        checkboxChildren = checkboxChildren;
        parentIndeterminate = false;
        dispatcher("toggle", {checked, label})
    }

    onMount(() => {
        checkboxChildren.forEach(child => {
            child.checked = true;
        });
    
    });


</script>
<style>
    .checkbox_group_children {
        padding-left: 25px;
        display: flex;
        align-items:start;
        flex-direction: column;
        justify-content: center;
    }

</style>
    