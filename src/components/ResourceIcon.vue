<template>
    <svg class="resource-icon" viewBox="0 0 24 24">
        <path :d="drawn" />
    </svg>
</template>

<script lang="ts">
    import Vue from 'vue'

    import { mdiRotateLeft, mdiRotateRight } from '@mdi/js'

    export default Vue.extend({
        props: {
            name: String,
        },
        computed: {
            drawn() {
                const drawns: any = { mdiRotateLeft, mdiRotateRight }
                const drawn = drawns[this.name]
                return drawn
            },
        },
    })
</script>

<style lang="scss">
    .resource-icon {
        width: 24px;
        height: 24px;
    }
</style>
