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
    list : [
      {
        toDo : 'Cipolla',
        done : false
      }, 
      {
        toDo : 'Latte', 
        done : false
      },
      {
        toDo : 'Pasta', 
        done : false
      },
      {
        toDo :  'Cereali',
        done : false
      }, 
      {
        toDo : 'Banane',
        done : false
      }
    ],

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

   /**
    * Adds a new object to the array with the given input message
    */
    addToDo(){  

      const itemToAdd = {
        toDo : this.message,
        done : false
      }

      this.message== '' ? '' : this.list.push(itemToAdd)
      this.message = ''
      //Check
      console.log('Input Received!!')
    },

    /**
     * Channges the property value of an object from true to false and vice versa
     * @param {object} object 
     */
    checkItem : function(object){
      object.done = !object.done
    }

  }
}); 