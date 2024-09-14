const app = Vue.createApp({
    data() {
        return {
        number: 0,
        
        
    };
    },
    methods:{
        addOne() {this.number++},
        addFive() {this.number = this.number + 5 },

    },
    watch:{
        result(){
            const that = this;
            setTimeout(function(){
                console.log("executing watch")
                that.number = 0;
            },5000)
        }
        

    },
    computed:{
        result(){
            console.log("output")
            if(this.number < 37)
            return 'Not there yet!';
            else if(this.number === 37)
            return this.number;
            else
            return 'Too Much!';
        }
    }

});

app.mount("#assignment");