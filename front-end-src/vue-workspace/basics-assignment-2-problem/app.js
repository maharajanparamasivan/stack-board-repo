const app = Vue.createApp({
    
    data(){
        return{
            text:'',
            secondText:''
        };
    },
    methods: {
        showAlert(){alert("HI");},
        captureKeyDown(event){this.text = event.target.value},
        captureKeyDownEnter(event){this.secondText = event.target.value},
        
    }
});

app.mount("#assignment");