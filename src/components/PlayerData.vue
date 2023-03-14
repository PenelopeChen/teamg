<template>
    <div class="playerdata">
        <h2>All Players</h2>
        <ul class="list">
            <li v-for="(player, index) in players" :key="player.id">
                    {{ index + 1 }} : {{ player.name }} 
            </li>
        </ul> 
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { supabase } from '@/lib/supabaseClient'
    import _ from 'underscore'

    const players = ref([])

    async function getPlayers() {
        const { data } = await supabase.from('players').select()
        players.value = _(data).shuffle()
    }

    onMounted(() => {
    getPlayers()
    })
</script>

<style scoped>
    .playerdata{
        background-color: lightsalmon;
        color: mintcream;
    }

    .list{
        padding: 10% 10% 14% 10%;
        list-style: none;
        line-height: 1.5em;
    }
</style>