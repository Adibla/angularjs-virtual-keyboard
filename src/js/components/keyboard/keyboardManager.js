/**
 * Created by andreadiblasi on 18/08/17.
 */
angular
  .module('angularjs-keyboard',[])
  .factory('keyboardManager', keyboardManager)

keyboardManager.$inject = ['$rootScope'];

function keyboardManager($rootScope) {
  const service = {};

  service.openKeyboard = openKeyboard;
 /**
 * 
 * @param {inputId} Id html input element to attach the keyboard  
 */
  function openKeyboard(inputId, options) {
    let input = inputId;
    
    const parseOptions = JSON.parse(options);
    const opts = {
      autoAccept: (parseOptions && parseOptions.autoAccept) ? parseOptions.autoAccept : true,
      autoAcceptOnEsc: (parseOptions && parseOptions.autoAcceptOnEsc) ? parseOptions.autoAcceptOnEsc : true,
      alwaysOpen: (parseOptions && parseOptions.alwaysOpen) ? parseOptions.alwaysOpen : false,
      layout: (parseOptions && parseOptions.layout) ? parseOptions.layout : 'qwerty'
    }
    /**
     * If there isn't input parameter create an hidden input field to show the keyboard  
     */
    if(!inputId){
      let keyboardHidd = $('#keyboardHidden');
      if(!keyboardHidd.length){
        $('body').append('<input style="opacity:0; top: 50%;left:50%;position: absolute; z-index: -999999" type="text" id="keyboardHidden"/>');
      }
      input = 'keyboardHidden';
    }

    let inputField = $('#'+input);

    inputField.keyboard({
      autoAccept: opts.autoAccept,
      autoAcceptOnEsc: opts.autoAcceptOnEsc,
      alwaysOpen: opts.alwaysOpen,
      layout: opts.layout ,
      //Used change event, for work with touch click on keyboard
      change: (e, keyboard, el) => {
        switch (keyboard.last.key) {
          case "space" :
            inputField.val(inputField.val() + " ");
            break;
          case "tab" :
            inputField.val(inputField.val() + "    ");
            break;
          case "bksp" :
            inputField.val(inputField.val().slice(0, inputField.val().length - 1));
            break;
          case "shift" :
            null;
            break;
          case "enter" :
            inputField.val(inputField.val() + "\n");
            break;
          default :
            inputField.val(inputField.val() + keyboard.last.key);
            break;
        }
        inputField.keydown();
      },
      beforeClose : (e, keyboard, el, accepted) => {
        
      },
      visible: function(){
        console.log('entrato')
        $('.ui-keyboard').draggable();
        $('.ui-keyboard').resizable();
      }
    });
    inputField.focus();

  }

  return service;
}
