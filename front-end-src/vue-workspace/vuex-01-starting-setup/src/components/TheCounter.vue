<template>
    <div>
        <h1>{{ storeCounter }}</h1>
    </div>
</template>

<script>
export default {
    computed:{
    storeCounter(){
      return this.$store.state.counter;
    }
  },
}
</script>