/*
- Stampare in pagina un item per ogni elemento contenuto in un array
- Ogni item ha una icona "x" associata: cliccando su di essa, l'item 
  viene rimosso dalla lista
- Predisporre un input per aggiungere un nuovo item alla lista: 
  digitando il tasto invio oppure ciccando su un pulsante, 
  il testo digitato sarà aggiunto alla lista
*/
let app = new Vue({
    el: '#app',

    data: {
        list : ['Cipolla', 'Latte', 'Pasta', 'Cereali', 'Banane']
    },

    methods: {

        deleteListItem : function(listItem){
        console.log(this.list.indexOf(listItem))
        console.log(listItem)

       }
    }
}); 