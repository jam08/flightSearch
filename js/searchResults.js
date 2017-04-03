/* Amadeus API */

var flightSearch = {
    inspirationSearch: "https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=CA3oN6siDkcGuXDwgYSEFG5wO9zVdG0d&origin=",
    
    extensiveSearch: "https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?apikey=CA3oN6siDkcGuXDwgYSEFG5wO9zVdG0d&origin=",
        
    IATACityCode: "https://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=CA3oN6siDkcGuXDwgYSEFG5wO9zVdG0d&term=",
    
    findFlights: function(entitiesObj) {
        var date;
        /*
         * Origin is always required to perform a search.
         * Destination is only required in extensive search.
         */
        var from = encodeURI(entitiesObj.from[0].value); //Sao Paulo
        var originSearchURL = `${flightSearch.IATACityCode}${from}`;
        //console.log(originSearchURL);
        
        /* if date not specified, get todays date */
        if(entitiesObj.hasOwnProperty("datetime")) {
            date = (entitiesObj.datetime[0].value).substring(0,10);
            //console.log(date);
        } else {
            todaysDate = new Date();
            date = (todaysDate.toJSON()).substring(0, 10);
            //console.log(date);
        }
        /*
         *Check if destination is specified
         *If user specified destination, 
         *the entitiesOjb will have a
         *property called "to"
        */
        if(entitiesObj.hasOwnProperty("to")) {
            //get destination code search
            var to = encodeURI(entitiesObj.to[0].value);
            var destSearchURL= `${flightSearch.IATACityCode}${to}`;
            console.log(destSearchURL);
            //DO AN EXTENSIVE SEARCH
            flightSearch.extensiveFlightSearch(originSearchURL, destSearchURL, date);
            //console.log(myFlights);
        } else {
            //DO AN INSPIRATION SEARCH
            flightSearch.inpirationFlightSearch(originSearchURL);
            //console.log(myFlights);
        }
    },
    
    inpirationFlightSearch: function(originCodeURL) {
        //make the request
        $.get(originCodeURL).then(function(cityCode){
            //console.log(cityCode[0].value);
            var flightReqURL = `${flightSearch.inpirationSearch}${cityCode[0].value}`;
            //console.log(flightReqURL);
            //returns a promise
            return $.get(flightReqURL);
            }).then(function(obj) {
                //Hide loader
                document.getElementById("loader").style.display = "none";
                var test = Object.values(obj);
                test[2].map(function(item) {
                    //return item;
                    console.log(item);
                })
        }), function(xhr, state, err) {
                //Hide loader
                document.getElementById("loader").style.display = "none";
                console.log("something went wrong!");
       }
    },
    
    extensiveFlightSearch: function(originCodeURL, destCodeURL, date) {
        //Promises - origin and destination city codes
        var originCode = $.get(originCodeURL);
        var destCode = $.get(destCodeURL);
        var fromCityCode;
        var toCityCode;
        //When both are done, call function in .then
        $.when(originCode, destCode).then(function(originCityCode, destCityCode){
            originCityCode.map(function(fromObj) {
                if(Array.isArray(fromObj)) {
                    fromCityCode = fromObj.shift();
                    //console.log(fromCityCode);
                }
            })
            destCityCode.map(function(toObj) {
                if(Array.isArray(toObj)) {
                    //toCityArr = toObj;
                    toCityCode = toObj.shift();
                    //console.log(toCityCode);
                }
            })
            //Request - extensive search
            let url = `${flightSearch.extensiveSearch}${fromCityCode.value}&destination=${toCityCode.value}&departure_date=${date}`;
            //console.log(url);
            $.get(url).then(function(searchObj){
                //Hide loader when promise succeed
                document.getElementById("loader").style.display = "none";
                searchObj.results.map(function(arrElem) {
                    //console.log(arrElem)
                    flights.display(arrElem, fromCityCode.label, toCityCode.label);
                    //return arrElem; 
                    //console.log(Object.values(arrElem));
                  });
                flights.pageJump();
            }, function(xhr, state, err) {
                    //Hide loader
                    document.getElementById("loader").style.display = "none";
                    var resp = xhr.responseJSON;
                    flights.displayError(resp.message);
                    flights.pageJump();
                    //console.log(resp.message);
            });
            //$.when();
        }), function(xhr, state, err) {
            console.log("Shit happens!");
        }
    }
};
      
        
        
        
//AUTOCOMPLETE - same with destination -  check if destination was specified.
        /* RESPONSE
        
            [
              {
                "value": "SAO",
                "label": "São Paulo [SAO]"
              },
              {
                "value": "GRU",
                "label": "São Paulo–Guarulhos International Airport [GRU]"
              },
              {
                "value": "CGH",
                "label": "Congonhas - São Paulo Airport [CGH]"
              },
              {
                "value": "VCP",
                "label": "São Paulo - Viracopos International Airport [VCP]"
              }
            ]
        
        */
        
        /*
        ******** We my need to find these: *********
        from
        to
        date
        numberAdults
        numberChild
        numberInf
        maxPrice
        
        ******* This function needs to return: ********
        an object with flight details and price
        //*/
        //console.log("third module:");
        //console.log(entitiesObj);
        
        //var origin = entitiesObj.from[0].value;
        //var maxPrice = entitiesObj.amount_of_money[0].value;
        
        //console.log(origin);
        //console.log(maxPrice);
        
        
        //var url = "https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=CA3oN6siDkcGuXDwgYSEFG5wO9zVdG0d&origin=BOS&max_price=200";
 