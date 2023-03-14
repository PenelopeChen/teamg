<template>
    <div>
        <h2>Random Singles Matches (1 v 1)</h2>
        <ul class="randSinglesList">
            <li v-for="(pair, index) in pairs" :key="index">
                    {{ pair[0].name }} vs {{ pair[1].name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { supabase } from '@/lib/supabaseClient'
    import _ from 'underscore'

    const players = ref([])
    const pairs = ref([])

    async function getPlayers() {
        const { data } = await supabase.from('players').select()
        players.value = _(data).shuffle()

        // Random Singles 
        const mid = Math.floor(players.value.length / 2)
        const left = players.value.slice(0, mid)
        const right = players.value.slice(mid)
        // .zip combines 2 different arrays
        pairs.value = _(left).zip(right)
    }

    onMounted(() => {
    getPlayers()
    })
</script>

<style scoped>
    .randSinglesList{
        background-color: lightsalmon;
        list-style: none;
        padding: 10%;
        line-height: 2em;
        color: mintcream;
    }
</style>