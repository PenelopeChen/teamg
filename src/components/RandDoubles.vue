<template>
    <div>
        <h2>Random Doubles Matches (2 v 2)</h2>
        <ul class="randDoublesList">
            <li v-for="(team, index) in teams" :key="index">
                    {{ team[0][0].name }} & {{ team[0][1].name }} vs {{ team[1][0].name }} & {{ team[1][1].name }}
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
    const teams = ref([])

    async function getPlayers() {
        const { data } = await supabase.from('players').select()
        players.value = _(data).shuffle()

        // Random Singles 
        const mid = Math.floor(players.value.length / 2)
        const left = players.value.slice(0, mid)
        const right = players.value.slice(mid)
        // .zip combines 2 different arrays
        pairs.value = _(left).zip(right)

        // Random Doubles
        const midOfPairs = Math.floor(pairs.value.length / 2)
        const leftOfPairs = pairs.value.slice(0, midOfPairs)
        const rightOfPairs = pairs.value.slice(midOfPairs)
        teams.value = _(leftOfPairs).zip(rightOfPairs)
        console.log(teams.value)
    }

    onMounted(() => {
    getPlayers()
    })
</script>

<style scoped>
    .randDoublesList{
        background-color: lightsalmon;
        list-style: none;
        padding: 10%;
        line-height: 2em;
        color: mintcream;
    }
</style>