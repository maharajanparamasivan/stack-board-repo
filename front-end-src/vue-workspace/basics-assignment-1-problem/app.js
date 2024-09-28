const app = Vue.createApp({
    
    data(){
        return{
            name: 'Maharajan Paramasivan',
            age: 32,
            image: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Josh_Brolin_as_Thanos.jpeg'
        };
    },
    methods: {
        generateRandomLuckyNumber() {
            return Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        }
    }
});

app.mount("#assignment");