var handleQuery = (function() {
        function getInput() {
            var textarea = document.getElementById("user-query");
            textarea.addEventListener("keydown", function(e) {
                //console.log("here");
                var code = (e.keycode ? e.keycode : e.which);
                if(code == 13) {
                    var userQuery = textarea.value;
                    //console.log(userQuery);
                    //remove focus after pressing the
                    //Enter key
                    textarea.blur();
                    botAPI.request(userQuery);
                }
            });
        }
        return {
            userInput: getInput
        }
})();
handleQuery.userInput();


/*
{
   "entities": {
     "from": [
       {
         "role": "from",
         "confidence": 0.9216031505447422,
         "start": 13,
         "end": 22,
         "body": "Stockholm",
         "value": {
           "value": "Stockholm"
         },
         "entity": "location"
       }
     ],
     "to": [
       {
         "role": "to",
         "confidence": 0.7873190227947731,
         "start": 26,
         "end": 35,
         "body": "Sao Paulo",
         "value": {
           "value": "Sao Paulo"
         },
         "entity": "location"
       }
     ]
    }
}

from[{objFrom}] (Type Array)
var origin = entities.from[0].body;
var destination = entities.to[0].body;
*/

