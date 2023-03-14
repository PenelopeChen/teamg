<template>
    <div>
        <div class="drawform">
            <h2>Create the draw!</h2>
            <br />
            <p>With TeamG, you can create singles or doubles draws for a casual table tennis match or even a whole league!</p>
            <Draw />
        </div>
    </div>
</template>

<script>
    import Draw from '@/components/Draw.vue'

    export default { 
        name: 'DrawFormView',
        components: {
            Draw: Draw
        }
    }
</script>

<style scoped>
    h2{
        margin: 0 30% 0 30%;
    }

    p{
        margin: 0 8% 0 8%;
    }
</style>
