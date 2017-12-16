// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 35 if you are working locally

var xhr = new XMLHttpRequest();        // Create XMLHttpRequest object

xhr.onload = function() {              // When response has loaded
 // The following conditional check will not work locally - only on a server
 // if (xhr.status === 200) {             // If server status was ok

  // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML
  var response = xhr.responseXML;                      // Get XML from the server
  var sight = response.getElementsByTagName('sight'); // Find <sight> elements 


  for (var i = 0; i < sight.length; i++) {            // Loop through them
    var container, image, location, city, newline;      // Declare variables
    container = document.createElement('div');          // Create <div> container
    container.className = 'sight col-md-4';                      // Add class attribute

    image = document.createElement('img');              // Add map image
    image.setAttribute('src', getNodeValue(sight[i], 'photo'));
    image.setAttribute('alt', getNodeValue(sight[i], 'location'));
    image.className = 'img-responsive';
    container.appendChild(image);

    location = document.createElement('p');             // Add location data
    city = document.createElement('b');
    newline = document.createElement('br');
    city.appendChild(document.createTextNode(getNodeValue(sight[i], 'location')));
    location.appendChild(newline);
    location.insertBefore(city, newline);
    location.appendChild(document.createTextNode(getNodeValue(sight[i], 'desc')));
    container.appendChild(location);

    document.getElementById('content').appendChild(container);
  }
// }

  function getNodeValue(obj, tag) {                   // Gets content from XML
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }

 // THE FINAL PART IS THE SAME AS THE HTML EXAMPLE BUT IT REQUESTS AN XML FILE
};

xhr.open('GET', 'api/data.xml', true);             // Prepare the request
xhr.send(null);                                     // Send the request