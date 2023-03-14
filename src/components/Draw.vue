<template>
    <div>
        <form @submit.prevent="handleSubmit" class="form">
            <div>
                <label>Draw Title</label>
                <input type="text" placeholder="Type draw title here~" required />
            </div>

            <div>
                <label>Draw Type</label>
                <select v-model="singlesOrDoubles">
                    <option value="singles">
                        random singles matches(1 v 1)
                    </option>
                    <option value ="doubles">
                        random doubles matches(2 v 2)
                    </option>
                    <!-- <option>
                        coming soon...single round robin (1 v 1)
                    </option> -->
                    <!-- <option>
                        coming soon...double round robin fixed partners (2 v 2)
                    </option>
                    <option>
                        coming soon...double round robin all various partners (2 v 2)
                    </option> -->
                </select>
            </div>

            <button type="submit">Submit</button>
            <button @click="reset" type="reset">Reset</button>
        </form> 

        <!-- line below is for when save works
        <p>To save your draws, please <router-link to="login">log in</router-link> or <router-link to="signup">sign up</router-link> to a TeamG account.</p> -->
        <Players v-if="showPlayers" /> 
        <PlayerData v-if="showPlayers" />
        <RandSingles v-if="showRandSingles" />
        <RandDoubles v-if="showRandDoubles" />
        <!-- <Teams /> -->
    </div>
    
</template>

<script>
import Players from '@/components/Players.vue'
import PlayerData from '@/components/PlayerData.vue'
import RandSingles from '@/components/RandSingles.vue'
import RandDoubles from '@/components/RandDoubles.vue'
// import Teams from '@/components/Teams.vue'

export default {
    name: 'Draw',
    components: {
        Players, 
        PlayerData, 
        RandSingles,
        RandDoubles,
        // Teams,
    },
    data() {
        return {
            showPlayers: false,
            showRandSingles: false,
            showRandDoubles: false,
            singlesOrDoubles: "singles"
        }
    },
    methods: {
        handleSubmit: function () {
            this.showPlayers = true
            console.log(this.singlesOrDoubles)
            if (this.singlesOrDoubles === "singles") {
                this.showRandSingles = true
            } else {
                this.showRandDoubles = true
            }
        },
        // all data return is back to their OG states
        reset: function () {
            this.showPlayers = false
            this.showRandSingles = false
            this.showRandDoubles = false
            this.singlesOrDoubles = "singles"
        }
    }
}
</script>

<style scoped>
    .form{
        padding: 30px;
        background-color: rebeccapurple;
        opacity: 0.95;
        line-height: 1.5em;
        margin: 3em;
    }

    label{
        font-weight: 600;
    }

    input{
        padding: 8px 15px;
        border-radius: 10em;
    }

    select{
        padding: 8px 15px;
        border-radius: 10em;
    }

    button{
        /* border: 3px salmon; */
        padding: 0.5em;
        background-color: mediumaquamarine;
        color: mintcream;
        font-weight:bolder;
        border-radius: 0.3em;
    }
</style>