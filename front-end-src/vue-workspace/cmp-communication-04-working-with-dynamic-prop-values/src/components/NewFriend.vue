<template>
<section>
<form @submit.prevent="submitData">
        <div>
            <label> Name </label>
            <input type="text" v-model="enteredName"/>
        </div>
        <div>
            <label> Phone </label>
            <input type="text" v-model="enteredPhone"/>
        </div>

        <div>
            <label> E-Mail </label>
            <input type="text" v-model="enteredEmail"/>
        </div>

        <div>
            <button>Add Friend</button>
        </div>

    </form>
  </section>
</template>
<script>

export default {
    emits:['add-contact'],
    data(){
      return{
        enteredName:'',
        enteredPhone:'',
        enteredEmail:'',
      }
    },
    methods:{
      submitData(){
        this.$emit("add-contact", this.enteredName, this.enteredPhone, this.enteredEmail);
      }
    }
}

</script>

<style>

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}

</style>