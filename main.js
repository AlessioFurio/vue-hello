// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS: Aggiungere un’immagine presa anch’essa da un data

var app = new Vue({
    el: '#root',
    data: {
        message: 'Hello World!!!',
        classeH1: 'red',
        imgsample: '<img src="https://files.brumbrum.it/blog/wp-content/uploads/2020/07/24150420/Muscle-car-caratteristiche-e-i-modelli-pi%C3%B9-famosi.jpg">'
    },
    methods: {
        cambioClasse(){
            if(this.classeH1 == 'red'){
                this.classeH1 = 'blue';
            }
            else {
                this.classeH1 = 'red';
            }
        },

    }

});
