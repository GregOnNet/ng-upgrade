angular.module('myApp')
.component('bookGridElementComponent', {
    templateUrl: '../../assets/templates/book-grid-element.tmpl.html',
    controller: function BookGridElementController(){
        //this.book = {title: 'Angular', isbn: '123456789', price: 20}
    },
     bindings: {
                book: '='
            }
})


