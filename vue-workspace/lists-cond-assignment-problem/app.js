const app = Vue.createApp({
    data() {
        return {
        task:'',
        taskArray: [],
        isShown: true,
        
    };
    },
    methods:{
        addTask() {
            console.log(this.task);
            this.taskArray.push(this.task);
        },
        toggleDisplay(){
            this.isShown = !this.isShown;
        }
    }
});

app.mount("#assignment");