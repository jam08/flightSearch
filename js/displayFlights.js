/* Builds the flight display section of the HTML document */

var flights = {
     display: function(flightObj, fromCity, toCity) {
         //console.log(fromCity);
         //console.log(toCity);
         //console.log(flightObj);
         var outbound = `${fromCity} to ${toCity}`
         console.log(outbound);
         var table = document.getElementById("flights");
         //First row
         var tr1 = document.createElement("tr");
         var td1 = document.createElement("td");
         
         var td1Att = document.createAttribute("class");
         td1Att.value = "td-txtcolour";
         td1.setAttributeNode(td1Att);
         
         var td2 = document.createElement("td");
         var td2Att = document.createAttribute("class");
         td2Att.value = "td-txtcolour";
         td2.setAttributeNode(td2Att);
         
         var td1Text =  document.createTextNode("Departure");
         var td2Text =  document.createTextNode(flightObj.departure_date);
         
         td1.appendChild(td1Text);
         td2.appendChild(td2Text);
         
         tr1.appendChild(td1);
         tr1.appendChild(td2);
         
         //Second row
         var tr2 = document.createElement("tr");
         var td1_2 = document.createElement("td");
         var td2_2 = document.createElement("td");
         var td1_2Att = document.createAttribute("class");
         var td2_2Att = document.createAttribute("class");
         td1_2Att.value = "td-colour";
         td2_2Att.value = "td-colour";
         td1_2.setAttributeNode(td1_2Att);
         td2_2.setAttributeNode(td2_2Att);
         var td1_2Text =  document.createTextNode(outbound);
         var td2_2Text =  document.createTextNode(flightObj.price);
         
         td1_2.appendChild(td1_2Text);
         td2_2.appendChild(td2_2Text);
         
         tr2.appendChild(td1_2);
         tr2.appendChild(td2_2);
         
         table.appendChild(tr1);
         table.appendChild(tr2); 
     },
    displayError: function(message) {
        var section = document.getElementById("results");
        var p = document.createElement("p");
        var text = document.createTextNode(message);
        p.appendChild(text);
        section.appendChild(p);
    }
};