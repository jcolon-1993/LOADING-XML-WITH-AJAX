// Create XMLHttpRequest object
var xhr = new XMLHttpRequest();

// When response has loaded
xhr.onload = function()
{

// If server status was okay
// if (true)
// {

  // Get xml from the server
  var response = xhr.responseXML;

  // Find <event> elements
  var events = response.getElementsByTagName("event");

  // Loop through event elements
  for (var i = 0 ; i < events.length; i++)
  {
    // Declare varibles
    var container, image, location, city, newline;

    // Create <div> container
    container = document.createElement("div");

    // Add class attribute
    container.className = "event";

    // Add map image
    image = document.createElement("img");
    image.setAttribute("src", getNodeValue(events[i], "map"));
    image.setAttribute("alt", getNodeValue(events[i], "location"));
    container.appendChild(image);

    // Add location Data
    location = document.createElement("p");
    city = document.createElement("b");
    newline = document.createElement("br");
    city.appendChild(document.createTextNode(getNodeValue(events[i], "location")));
    location.appendChild(newline);
    location.insertBefore(city, newline);
    location.appendChild(document.createTextNode(getNodeValue(events[i], "date")));
    container.appendChild(location);

    document.getElementById("content").appendChild(container);
  }

  // Get content from xml
  function getNodeValue(obj, tag)
  {
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }

};

// Request xml File
// prepares the Request
xhr.open("GET", "data/data.xml", true);

// Sends the Request
xhr.send(null);
