angular
    .module('app', ['angularjs-keyboard'])
    .controller('mainController', mainController)

mainController.$inject = [];

function mainController(){
    const main = this;

    main.options = {
        layout: 'num'
    }    
}
