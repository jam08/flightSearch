# flightSearch


## Janaina Marana, JavaScript 2, FEND16

Getaway flights lets users find flights by simply typing a sentence, just in the same way he/she would say it to a travel agent or an airline personnel.


## APIs used on this project


### Wit.ai
https://wit.ai/

Wit.ai lets you create text based bots

### Amadeus Travel Innovation Sandbox
https://sandbox.amadeus.com/

Amadeus Sandbox lets you search for travel content, like flights, hotels, and car rentals.


## Work
The idea of this project was to create a website which allowed users to find flights by simply saying what they are looking for as one would say in a conversation with another person. In order to achieve that, two APIs are used here. Wit.ai, for "understanding" human language and Amadeus Sandbox API to find flights.


Wit.ai is used to capture things like places and time from sentences entered by the user. This information is then extracted from the response received and then sent it as a request to the Amadeus API, which in turn returns a response with flights, if found, or a no flights found message.


Things to be done in the future:


* Train Wit.ai bot with more examples
* Add a spinner (loader) to let the user know that something is happening
* Make the bot iteract a bit more with the user
* Re-write parts of the js code in order to make it more concise and easier to read
* Renaming of classes as they are a bit confusing
* Explore available named-entity recognition (NER) classifiers
