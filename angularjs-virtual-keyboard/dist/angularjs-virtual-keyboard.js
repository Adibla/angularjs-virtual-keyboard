"use strict";function keyboardManager(a){var e={};return e.openKeyboard=function(a,e){var o=a,t=JSON.parse(e),r={autoAccept:!t||!t.autoAccept||t.autoAccept,autoAcceptOnEsc:!t||!t.autoAcceptOnEsc||t.autoAcceptOnEsc,alwaysOpen:!(!t||!t.alwaysOpen)&&t.alwaysOpen,layout:t&&t.layout?t.layout:"qwerty"};if(!a){var n=$("#keyboardHidden");n.length||$("body").append('<input style="opacity:0; top: 50%;left:50%;position: absolute; z-index: -999999" type="text" id="keyboardHidden"/>'),o="keyboardHidden"}var l=$("#"+o);l.keyboard({autoAccept:r.autoAccept,autoAcceptOnEsc:r.autoAcceptOnEsc,alwaysOpen:r.alwaysOpen,layout:r.layout,change:function(a,e,o){switch(e.last.key){case"space":l.val(l.val()+" ");break;case"tab":l.val(l.val()+"    ");break;case"bksp":l.val(l.val().slice(0,l.val().length-1));break;case"shift":break;case"enter":l.val(l.val()+"\n");break;default:l.val(l.val()+e.last.key)}l.keydown()},beforeClose:function(a,e,o,t){},visible:function(){console.log("entrato"),$(".ui-keyboard").draggable(),$(".ui-keyboard").resizable()}}),l.focus()},e}function keyboard(){return{controller:keyboardController,controllerAs:"keyboard",restrict:"E",template:'<button layout="row" ng-click="keyboard.openKeyboard(keyboard.inputId, keyboard.options)" id="keyboard_button"><i class="fas fa-keyboard"></i></button>',scope:{input:"@",options:"@"}}}function keyboardController(a,e,o){var t=this;t.openKeyboard=function(a,e){o.openKeyboard(a,e)},t.inputId=e.input,t.options=e.options}angular.module("angularjs-keyboard",[]).factory("keyboardManager",keyboardManager),keyboardManager.$inject=["$rootScope"],angular.module("angularjs-keyboard").controller("keyboardController",keyboardController).directive("angularjsKeyboard",keyboard),keyboardController.$inject=["$rootScope","$scope","keyboardManager"];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleWJvYXJkTWFuYWdlci5qcyIsImtleWJvYXJkLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJrZXlib2FyZE1hbmFnZXIiLCIkcm9vdFNjb3BlIiwic2VydmljZSIsIm9wZW5LZXlib2FyZCIsImlucHV0SWQiLCJvcHRpb25zIiwiaW5wdXQiLCJwYXJzZU9wdGlvbnMiLCJKU09OIiwicGFyc2UiLCJvcHRzIiwiYXV0b0FjY2VwdCIsImF1dG9BY2NlcHRPbkVzYyIsImFsd2F5c09wZW4iLCJsYXlvdXQiLCJrZXlib2FyZEhpZGQiLCIkIiwibGVuZ3RoIiwiYXBwZW5kIiwiaW5wdXRGaWVsZCIsImtleWJvYXJkIiwiY2hhbmdlIiwiZSIsImVsIiwibGFzdCIsImtleSIsInZhbCIsInNsaWNlIiwia2V5ZG93biIsImJlZm9yZUNsb3NlIiwiYWNjZXB0ZWQiLCJ2aXNpYmxlIiwiY29uc29sZSIsImxvZyIsImRyYWdnYWJsZSIsInJlc2l6YWJsZSIsImZvY3VzIiwiY29udHJvbGxlciIsImtleWJvYXJkQ29udHJvbGxlciIsImNvbnRyb2xsZXJBcyIsInJlc3RyaWN0IiwidGVtcGxhdGVVcmwiLCJzY29wZSIsIiRzY29wZSIsInRoaXMiLCJhbmd1bGFyIiwibW9kdWxlIiwiZmFjdG9yeSIsIiRpbmplY3QiLCJkaXJlY3RpdmUiXSwibWFwcGluZ3MiOiJhQVNBLFNBQVNBLGdCQUFnQkMsR0FDdkIsSUFBTUMsS0F3RU4sT0F0RUFBLEVBQVFDLGFBS1IsU0FBc0JDLEVBQVNDLEdBQzdCLElBQUlDLEVBQVFGLEVBRU5HLEVBQWVDLEtBQUtDLE1BQU1KLEdBQzFCSyxHQUNKQyxZQUFhSixJQUFnQkEsRUFBYUksWUFBY0osRUFBYUksV0FDckVDLGlCQUFrQkwsSUFBZ0JBLEVBQWFLLGlCQUFtQkwsRUFBYUssZ0JBQy9FQyxjQUFhTixJQUFnQkEsRUFBYU0sYUFBY04sRUFBYU0sV0FDckVDLE9BQVNQLEdBQWdCQSxFQUFhTyxPQUFVUCxFQUFhTyxPQUFTLFVBS3hFLElBQUlWLEVBQVEsQ0FDVixJQUFJVyxFQUFlQyxFQUFFLG1CQUNqQkQsRUFBYUUsUUFDZkQsRUFBRSxRQUFRRSxPQUFPLHNIQUVuQlosRUFBUSxpQkFHVixJQUFJYSxFQUFhSCxFQUFFLElBQUlWLEdBRXZCYSxFQUFXQyxVQUNUVCxXQUFZRCxFQUFLQyxXQUNqQkMsZ0JBQWlCRixFQUFLRSxnQkFDdEJDLFdBQVlILEVBQUtHLFdBQ2pCQyxPQUFRSixFQUFLSSxPQUViTyxPQUFRLFNBQUNDLEVBQUdGLEVBQVVHLEdBQ3BCLE9BQVFILEVBQVNJLEtBQUtDLEtBQ3BCLElBQUssUUFDSE4sRUFBV08sSUFBSVAsRUFBV08sTUFBUSxLQUNsQyxNQUNGLElBQUssTUFDSFAsRUFBV08sSUFBSVAsRUFBV08sTUFBUSxRQUNsQyxNQUNGLElBQUssT0FDSFAsRUFBV08sSUFBSVAsRUFBV08sTUFBTUMsTUFBTSxFQUFHUixFQUFXTyxNQUFNVCxPQUFTLElBQ25FLE1BQ0YsSUFBSyxRQUVILE1BQ0YsSUFBSyxRQUNIRSxFQUFXTyxJQUFJUCxFQUFXTyxNQUFRLE1BQ2xDLE1BQ0YsUUFDRVAsRUFBV08sSUFBSVAsRUFBV08sTUFBUU4sRUFBU0ksS0FBS0MsS0FHcEROLEVBQVdTLFdBRWJDLFlBQWMsU0FBQ1AsRUFBR0YsRUFBVUcsRUFBSU8sS0FHaENDLFFBQVMsV0FDUEMsUUFBUUMsSUFBSSxXQUNaakIsRUFBRSxnQkFBZ0JrQixZQUNsQmxCLEVBQUUsZ0JBQWdCbUIsZUFHdEJoQixFQUFXaUIsU0FJTmxDLEVDMUVULFNBQVNrQixXQUNQLE9BQ0VpQixXQUFZQyxtQkFDWkMsYUFBYyxXQUNkQyxTQUFVLElBQ1ZDLFNBQUFBLDBKQUNBQyxPQUNFcEMsTUFBTyxJQUNQRCxRQUFTLE1BT2YsU0FBU2lDLG1CQUFtQnJDLEVBQVkwQyxFQUFRM0MsR0FDOUMsSUFBTW9CLEVBQVd3QixLQUVqQnhCLEVBQVNqQixhQU9ULFNBQXNCQyxFQUFTQyxHQUM3QkwsRUFBZ0JHLGFBQWFDLEVBQVNDLElBUHhDZSxFQUFTaEIsUUFBVXVDLEVBQU9yQyxNQUMxQmMsRUFBU2YsUUFBVXNDLEVBQU90QyxRRHpCNUJ3QyxRQUNHQyxPQUFPLHlCQUNQQyxRQUFRLGtCQUFtQi9DLGlCQUU5QkEsZ0JBQWdCZ0QsU0FBVyxjQ0ozQkgsUUFDR0MsT0FBTyxzQkFDUFQsV0FBVyxxQkFBc0JDLG9CQUNqQ1csVUFBVSxvQkFBcUI3QixVQWVsQ2tCLG1CQUFtQlUsU0FBVyxhQUFjLFNBQVUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW5kcmVhZGlibGFzaSBvbiAxOC8wOC8xNy5cclxuICovXHJcbmFuZ3VsYXJcclxuICAubW9kdWxlKCdhbmd1bGFyanMta2V5Ym9hcmQnLFtdKVxyXG4gIC5mYWN0b3J5KCdrZXlib2FyZE1hbmFnZXInLCBrZXlib2FyZE1hbmFnZXIpXHJcblxyXG5rZXlib2FyZE1hbmFnZXIuJGluamVjdCA9IFsnJHJvb3RTY29wZSddO1xyXG5cclxuZnVuY3Rpb24ga2V5Ym9hcmRNYW5hZ2VyKCRyb290U2NvcGUpIHtcclxuICBjb25zdCBzZXJ2aWNlID0ge307XHJcblxyXG4gIHNlcnZpY2Uub3BlbktleWJvYXJkID0gb3BlbktleWJvYXJkO1xyXG4gLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge2lucHV0SWR9IElkIGh0bWwgaW5wdXQgZWxlbWVudCB0byBhdHRhY2ggdGhlIGtleWJvYXJkICBcclxuICovXHJcbiAgZnVuY3Rpb24gb3BlbktleWJvYXJkKGlucHV0SWQsIG9wdGlvbnMpIHtcclxuICAgIGxldCBpbnB1dCA9IGlucHV0SWQ7XHJcbiAgICBcclxuICAgIGNvbnN0IHBhcnNlT3B0aW9ucyA9IEpTT04ucGFyc2Uob3B0aW9ucyk7XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICBhdXRvQWNjZXB0OiAocGFyc2VPcHRpb25zICYmIHBhcnNlT3B0aW9ucy5hdXRvQWNjZXB0KSA/IHBhcnNlT3B0aW9ucy5hdXRvQWNjZXB0IDogdHJ1ZSxcclxuICAgICAgYXV0b0FjY2VwdE9uRXNjOiAocGFyc2VPcHRpb25zICYmIHBhcnNlT3B0aW9ucy5hdXRvQWNjZXB0T25Fc2MpID8gcGFyc2VPcHRpb25zLmF1dG9BY2NlcHRPbkVzYyA6IHRydWUsXHJcbiAgICAgIGFsd2F5c09wZW46IChwYXJzZU9wdGlvbnMgJiYgcGFyc2VPcHRpb25zLmFsd2F5c09wZW4pID8gcGFyc2VPcHRpb25zLmFsd2F5c09wZW4gOiBmYWxzZSxcclxuICAgICAgbGF5b3V0OiAocGFyc2VPcHRpb25zICYmIHBhcnNlT3B0aW9ucy5sYXlvdXQpID8gcGFyc2VPcHRpb25zLmxheW91dCA6ICdxd2VydHknXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElmIHRoZXJlIGlzbid0IGlucHV0IHBhcmFtZXRlciBjcmVhdGUgYW4gaGlkZGVuIGlucHV0IGZpZWxkIHRvIHNob3cgdGhlIGtleWJvYXJkICBcclxuICAgICAqL1xyXG4gICAgaWYoIWlucHV0SWQpe1xyXG4gICAgICBsZXQga2V5Ym9hcmRIaWRkID0gJCgnI2tleWJvYXJkSGlkZGVuJyk7XHJcbiAgICAgIGlmKCFrZXlib2FyZEhpZGQubGVuZ3RoKXtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCc8aW5wdXQgc3R5bGU9XCJvcGFjaXR5OjA7IHRvcDogNTAlO2xlZnQ6NTAlO3Bvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogLTk5OTk5OVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJrZXlib2FyZEhpZGRlblwiLz4nKTtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dCA9ICdrZXlib2FyZEhpZGRlbic7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGlucHV0RmllbGQgPSAkKCcjJytpbnB1dCk7XHJcblxyXG4gICAgaW5wdXRGaWVsZC5rZXlib2FyZCh7XHJcbiAgICAgIGF1dG9BY2NlcHQ6IG9wdHMuYXV0b0FjY2VwdCxcclxuICAgICAgYXV0b0FjY2VwdE9uRXNjOiBvcHRzLmF1dG9BY2NlcHRPbkVzYyxcclxuICAgICAgYWx3YXlzT3Blbjogb3B0cy5hbHdheXNPcGVuLFxyXG4gICAgICBsYXlvdXQ6IG9wdHMubGF5b3V0ICxcclxuICAgICAgLy9Vc2VkIGNoYW5nZSBldmVudCwgZm9yIHdvcmsgd2l0aCB0b3VjaCBjbGljayBvbiBrZXlib2FyZFxyXG4gICAgICBjaGFuZ2U6IChlLCBrZXlib2FyZCwgZWwpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGtleWJvYXJkLmxhc3Qua2V5KSB7XHJcbiAgICAgICAgICBjYXNlIFwic3BhY2VcIiA6XHJcbiAgICAgICAgICAgIGlucHV0RmllbGQudmFsKGlucHV0RmllbGQudmFsKCkgKyBcIiBcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcInRhYlwiIDpcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC52YWwoaW5wdXRGaWVsZC52YWwoKSArIFwiICAgIFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiYmtzcFwiIDpcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC52YWwoaW5wdXRGaWVsZC52YWwoKS5zbGljZSgwLCBpbnB1dEZpZWxkLnZhbCgpLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwic2hpZnRcIiA6XHJcbiAgICAgICAgICAgIG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImVudGVyXCIgOlxyXG4gICAgICAgICAgICBpbnB1dEZpZWxkLnZhbChpbnB1dEZpZWxkLnZhbCgpICsgXCJcXG5cIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgIGlucHV0RmllbGQudmFsKGlucHV0RmllbGQudmFsKCkgKyBrZXlib2FyZC5sYXN0LmtleSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dEZpZWxkLmtleWRvd24oKTtcclxuICAgICAgfSxcclxuICAgICAgYmVmb3JlQ2xvc2UgOiAoZSwga2V5Ym9hcmQsIGVsLCBhY2NlcHRlZCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICB2aXNpYmxlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbnRyYXRvJylcclxuICAgICAgICAkKCcudWkta2V5Ym9hcmQnKS5kcmFnZ2FibGUoKTtcclxuICAgICAgICAkKCcudWkta2V5Ym9hcmQnKS5yZXNpemFibGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpbnB1dEZpZWxkLmZvY3VzKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNlcnZpY2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW5kcmVhZGlibGFzaSBvbiAwNC8wNy8xNy5cclxuICovXHJcbmFuZ3VsYXJcclxuICAubW9kdWxlKCdhbmd1bGFyanMta2V5Ym9hcmQnKVxyXG4gIC5jb250cm9sbGVyKCdrZXlib2FyZENvbnRyb2xsZXInLCBrZXlib2FyZENvbnRyb2xsZXIpXHJcbiAgLmRpcmVjdGl2ZSgnYW5ndWxhcmpzS2V5Ym9hcmQnLCBrZXlib2FyZClcclxuICBcclxuZnVuY3Rpb24ga2V5Ym9hcmQoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbnRyb2xsZXI6IGtleWJvYXJkQ29udHJvbGxlcixcclxuICAgIGNvbnRyb2xsZXJBczogJ2tleWJvYXJkJyxcclxuICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICB0ZW1wbGF0ZVVybCA6ICdrZXlib2FyZC5odG1sJyxcclxuICAgIHNjb3BlOiB7XHJcbiAgICAgIGlucHV0OiAnQCcsXHJcbiAgICAgIG9wdGlvbnM6ICdAJ1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5rZXlib2FyZENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAna2V5Ym9hcmRNYW5hZ2VyJ107XHJcblxyXG5mdW5jdGlvbiBrZXlib2FyZENvbnRyb2xsZXIoJHJvb3RTY29wZSwgJHNjb3BlLCBrZXlib2FyZE1hbmFnZXIpIHtcclxuICBjb25zdCBrZXlib2FyZCA9IHRoaXM7XHJcbiAgXHJcbiAga2V5Ym9hcmQub3BlbktleWJvYXJkID0gb3BlbktleWJvYXJkO1xyXG4gIGtleWJvYXJkLmlucHV0SWQgPSAkc2NvcGUuaW5wdXQ7XHJcbiAga2V5Ym9hcmQub3B0aW9ucyA9ICRzY29wZS5vcHRpb25zO1xyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7aW5wdXRJZH0gSWQgaHRtbCBpbnB1dCBlbGVtZW50IHRvIGF0dGFjaCB0aGUga2V5Ym9hcmQgIFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIG9wZW5LZXlib2FyZChpbnB1dElkLCBvcHRpb25zKXtcclxuICAgIGtleWJvYXJkTWFuYWdlci5vcGVuS2V5Ym9hcmQoaW5wdXRJZCwgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==