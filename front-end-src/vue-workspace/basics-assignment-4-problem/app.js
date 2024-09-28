const app = Vue.createApp({
    data() {
        return {
        styleClass:'',
        isVisible: true,
        bgColor: ''
        
        
    };
    },
    methods:{
        setClass(event) {
            this.styleClass = event.target.value;
        },
        toggleParagraph(){
            this.isVisible = !this.isVisible;
        },
        setBgColor(event){
            this.bgColor = event.target.value;
        }
    }
});

app.mount("#assignment");