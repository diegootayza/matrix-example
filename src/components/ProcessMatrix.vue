<template>
    <div class="process-matrix">
        <table class="process-matrix__table">
            <tbody>
                <tr v-for="(a, ia) in matrix" :key="ia">
                    <td v-for="(b, ib) in a" :key="ib">{{ b }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props: {
            value: String,
            orientation: String,
        },
        model: {
            prop: 'value',
            event: 'change',
        },
        data() {
            return {
                matrix: [] as any[],
            }
        },
        watch: {
            value: {
                immediate: true,
                handler(text) {
                    this.matrix = JSON.parse(text)
                },
            },
        },
        methods: {
            controller() {
                const n = this.matrix.length

                let array: any[] = []
                for (let a = 0; a < n; a++) array.push([])

                for (let a = 0; a < n; a++) {
                    for (let b = 0; b < n; b++) {
                        if (this.orientation === 'left') array[n - 1 - a][b] = this.matrix[b][a]
                        if (this.orientation === 'right') array[b][n - 1 - a] = this.matrix[a][b]
                    }
                }

                this.$emit('change', JSON.stringify(array))
                this.matrix = array
            },
        },
    })
</script>

<style lang="scss">
    .process-matrix {
        &__table {
            border-collapse: collapse;
            border: 1px solid black;

            td {
                height: 40px;
                width: 40px;
                text-align: center;
                border: 1px solid black;
            }
        }
    }
</style>
