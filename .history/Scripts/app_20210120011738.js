/* custom scripts goes here */

var myVariable = 1;

//IIFE
(function(){

    function Start()
    { 
        window.console.log("App started....");
    }

    //Start();
    window.addEventListener("load",Start);

})();



