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
        list : ['Cipolla', 'Latte', 'Pasta', 'Cereali', 'Banane'],
        
        message : ''
    },

    methods: {

        /**
         * Delete an object with a known index from the HTML
         * @param {*} index  Position of the object
         */
        deleteItemList : function(index){
            this.list.splice(index, 1)
            //Check
            console.log(index)
       },

       addItem(){  
           this.message== '' ? '' : this.list.push(this.message)
           this.message = ''
           //Check
           console.log('Input Received!!')
       }

    }
}); 