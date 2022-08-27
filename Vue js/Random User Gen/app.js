const app = Vue.createApp({
    // template: "<h1>Hello world</h1>"
    data(){
        return {
            firstName : "Rakibul",
            lastName : "Hassan",
            picture : "https://randomuser.me/api/portraits/men/10.jpg",
            gender : "male",
            email : "rakibulhassan.rony123@gmail.com"
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            // console.log(results)
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.picture = results[0].picture.large
            this.email = results[0].email
            this.gender  = results[0].gender
        }
           
    }
})

app.mount("#app")