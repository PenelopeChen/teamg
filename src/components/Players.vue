<template>
    <div>
        <!-- <h1>Players(component) in progress...</h1> -->

        <!-- <form>
            <label>How many players?</label>
            <input type="number" min="1" required />
        </form> -->
        <!-- <ul>{{name}}</ul> -->
    </div>
</template>

<script>
    import PlayerData from "@/components/PlayerData.vue"

    export default {
        component: PlayerData,
        name: 'Players',
        props: {
            name: String
        },
        data() {
            return {
                number: Number
            }
        }, 
        methods: {
        }
    }
</script>
