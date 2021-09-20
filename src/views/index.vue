<template>
    <main class="index">
        <div class="index__header">
            <input type="text" v-model="value" />
            <div class="index__buttons">
                <button @click="orientation = 'left'" :class="{ 'is-active': orientation === 'left' }">
                    <ResourceIcon name="mdiRotateLeft" />
                </button>
                <button @click="orientation = 'right'" :class="{ 'is-active': orientation === 'right' }">
                    <ResourceIcon name="mdiRotateRight" />
                </button>
                <button @click="$refs.matrix.controller()">Rotate</button>
            </div>
        </div>
        <div class="index__main">
            <ProcessMatrix ref="matrix" v-model="value" :orientation="orientation" />
        </div>
        <div class="index__footer">
            <button @click="value = '[[1,2],[3,4]]'">Example 1</button>
            <button @click="value = '[[1,2,3],[4,5,6],[7,8,9]]'">Example 2</button>
        </div>
    </main>
</template>

<script lang="ts">
    import Vue from 'vue'

    import ProcessMatrix from '@/components/ProcessMatrix.vue'
    import ResourceIcon from '@/components/ResourceIcon.vue'

    export default Vue.extend({
        components: {
            ProcessMatrix,
            ResourceIcon,
        },
        data() {
            return {
                value: '[[1,2],[3,4]]',
                orientation: 'left',
            }
        },
    })
</script>

<style lang="scss">
    .index {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__header {
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;

            input {
                margin-right: 0.5rem;
            }
        }

        &__buttons {
            display: flex;
            align-items: center;
            justify-content: center;

            button {
                margin-right: 0.5rem;

                &:nth-of-type(1),
                &:nth-of-type(2) {
                    width: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                &:nth-of-type(3) {
                    padding-left: 1rem;
                    padding-right: 1rem;
                }

                &:last-child {
                    margin: 0;
                }

                &.is-active {
                    background-color: cyan;
                }
            }
        }

        &__main {
            margin-bottom: 2rem;
        }

        &__footer {
            display: flex;
            align-items: center;
            justify-content: center;

            button {
                margin-right: 0.5rem;
                padding-left: 1rem;
                padding-right: 1rem;
            }
        }
    }
</style>
