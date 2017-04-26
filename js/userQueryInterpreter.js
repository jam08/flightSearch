/* Wit.ai API */
var botAPI = {
    request: function(userSays) {
        //Check if user has entered query
        if(!userSays) {
        } else {
            $(document).ready(function() {
                //show loader
                loader.loading();
                $.ajax({
                  url: 'https://api.wit.ai/message',
                  data: {
                    'q': userSays,
                    'access_token' : 'MVBR25GB6BIOALLCQ7EPCTZ2JMJOIT7J'
                  },
                  dataType: 'jsonp',
                  method: 'GET',
                  success: function(response) {
                      /*response.entities returns the 
                       *entities obj
                       */              flightSearch.findFlights(response.entities);
                  },
                  error: function(req, status, err) {
                      console.log( 'something went wrong', status, err );
                  }
                });
            });
        }
    }
};