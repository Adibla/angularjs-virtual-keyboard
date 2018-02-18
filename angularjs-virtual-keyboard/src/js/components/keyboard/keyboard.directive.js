/**
 * Created by andreadiblasi on 04/07/17.
 */
angular
  .module('angularjs-keyboard')
  .controller('keyboardController', keyboardController)
  .directive('angularjsKeyboard', keyboard)
  
function keyboard() {
  return {
    controller: keyboardController,
    controllerAs: 'keyboard',
    restrict: 'E',
    templateUrl : 'keyboard.html',
    scope: {
      input: '@',
      options: '@'
    },
  };
}

keyboardController.$inject = ['$rootScope', '$scope', 'keyboardManager'];

function keyboardController($rootScope, $scope, keyboardManager) {
  const keyboard = this;
  
  keyboard.openKeyboard = openKeyboard;
  keyboard.inputId = $scope.input;
  keyboard.options = $scope.options;
  /**
   * 
   * @param {inputId} Id html input element to attach the keyboard  
   */
  function openKeyboard(inputId, options){
    keyboardManager.openKeyboard(inputId, options);
  }
}
