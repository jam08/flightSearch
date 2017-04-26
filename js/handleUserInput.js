var handleQuery = (function() {
        function getInput() {
            var textarea = document.getElementById("user-query");
            var button = document.getElementById("send");
            textarea.addEventListener("keydown", function(e) {
                //console.log("here");
                var code = (e.keycode ? e.keycode : e.which);
                if(code == 13) {
                    var userQuery = textarea.value;
                    //console.log(userQuery);
                    //remove focus after pressing the
                    //Enter key
                    textarea.blur();
                    cleanSearch();
                    botAPI.request(userQuery);
                    textarea.value = "";
                }
            });
            button.addEventListener("click", function() {
                var userQuery = textarea.value;
                cleanSearch();
                botAPI.request(userQuery);
                textarea.value = "";
            });
        }
        function cleanSearch() {
            var flightTable = document.getElementById("flights");
            if(flightTable.hasChildNodes) {
                while(flightTable.firstChild) {
                    flightTable.removeChild(flightTable.firstChild);
                } 
            }   
        }
        return {
            userInput: getInput
        }
})();
handleQuery.userInput();
