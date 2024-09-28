<template>
    <section>
        Filter
    </section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as a Coach</router-link>
        </div>
        <ul v-if="hasCoaches">
            <li v-for="coach in filteredCoaches" :key="coach.id">
                {{ coach.firstName }}
            </li>
        </ul>
        <h3 v-else>No coaches found</h3>
    </section>
</template>

<script>
export default {
    computed: {
        filteredCoaches(){
            console.log(this.$store.getters);
            return this.$store.getters['coachNamespace/coaches'];

        },
        hasCoaches(){
            return this.$store.getters['coachNamespace/hasCoaches'];
        }
    }
}
</script>