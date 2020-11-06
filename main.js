// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS: Aggiungere un’immagine presa anch’essa da un data

var app = new Vue({
    el: '#root',
    data: {
        message: 'Hello World!!!',
        classeH1: 'red',
    },
    methods: {
        cambioClasse(){
            if(this.classeH1 == 'red'){
                this.classeH1 = 'blue';
            }
            else {
                this.classeH1 = 'red';
            }
        }
    }
});
