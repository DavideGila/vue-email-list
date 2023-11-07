const {createApp} = Vue;

createApp({
    data() {
        return {
           emails: [],
           result: ''
        }
    },
    methods: {
        getEmails(){
            for(let i = 1; i <= 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
                    this.result = resp.data.response;
                    this.emails.push(this.result);
                    console.log(this.emails);
                })
            }
        }
    },
    created(){
        this.getEmails()
    }
}).mount('#app')