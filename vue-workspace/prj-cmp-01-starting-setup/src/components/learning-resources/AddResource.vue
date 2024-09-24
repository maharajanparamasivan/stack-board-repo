<template>
    <base-dialog v-if="isInValidInput" title="Invalid Input" @close="confirmError">
    <template #default>
        <p>Unfortunately atleast on of the input is empty</p>
        <p>Please provide with appropriate value</p>
    </template>
    <template #actions>
        <base-button @click="confirmError">Try Again</base-button>
    </template>
    </base-dialog>
    <base-card>
        <h2> Add Resource</h2>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" ref="descriptioInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" ref="linkInput">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue'
import BaseCard from '../UI/BaseCard.vue'
import BaseDialog from '../UI/BaseDialog.vue';
export default {
    inject: ['addResource'],
    components: { BaseCard, BaseButton, BaseDialog },
    methods: {
        submitData() {
            console.log(this.$refs.titleInput.value);
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDescription = this.$refs.descriptioInput.value;
            const enteredLink = this.$refs.linkInput.value;

            if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredLink.trim() === '') {
                this.isInValidInput = true;
                return;
            }


            this.addResource(enteredTitle, enteredDescription, enteredLink);

        },
        confirmError(){
            this.isInValidInput = false;
        }
    },
    data() {
        return {
            isInValidInput: false
        };
    }


}
</script>
<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>