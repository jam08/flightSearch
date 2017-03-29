var botAPI = {
    request: function(userSays) {
        if(!userSays) {
            //console.log("nothing yet");
            //console.log(userSays);
        } else {
            /*console.log("I'm another module")
            console.log(userSays);*/
            $(document).ready(function() {
                //console.log(userSays);
                $.ajax({
                  url: 'https://api.wit.ai/message',
                  data: {
                    //'q': 'Flights from Stockholm to Sao Paulo tomorrow.',
                    'q': userSays,
                    'access_token' : 'HRZHJ2GWGIMMLSCAAFVQYJRAPZVFRLMC'
                  },
                  dataType: 'jsonp',
                  method: 'GET',
                  success: function(response) {
                      //response.entities returns the 
                      //entities obj that contains 
                      //console.log("success!", response.entities);
                      //return response.entities;
                      console.log(Object.keys(response.entities)); //["from", "to", "intent"]
                      flightSearch.findFlights(response.entities);
                  },
                  error: function(req, status, err) {
                      console.log( 'something went wrong', status, err );
                  }
                });
            });
            //*/
        }
    }
    //*/
};
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
        
        ***** notes *****
        REMEMBER, YOU ARE JUST SHOWING AVAILABLE FLIGHT FOR NOW!
        
        - If  To not specified, do an inspirational search;
        - From is always required
        - If Date not specified, request a search period;
        - If number of passengers not specified, do a search for one adult;
        - maxPrice not required
        
        //*/

