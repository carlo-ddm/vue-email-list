/*
Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const app = new Vue({
  el: '#app',
  data: {
    emailArray: [],
    isLoading: true,
  },
  
  methods: {
    generaFrase(){
      for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(res =>{
          // console.log(res.data);
          const email = res.data.response;
          this.emailArray.push(email);
          this.isLoading = false;
        })
      }
      console.log(this.emailArray);
    }
  },

  mounted() {
    this.generaFrase();
  }
})