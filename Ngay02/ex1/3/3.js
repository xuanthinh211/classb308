document.addEventListener('DOMContentLoaded', function() {
  // Use addEventListener for better separation of concerns

  function parseCookieHeader(cookieString) {
      const cookieObj = {};

      // Split the cookie string into individual name-value pairs
      const nameValuePairs = cookieString.split("; ");

      // Iterate over each name-value pair and assign them to the object
      nameValuePairs.forEach(pair => {
          const [name, value] = pair.split("=");
          cookieObj[name.trim()] = decodeURIComponent(value);
      });

      return cookieObj;
  }

  function displayParsedCookies() {
      const cookieString = document.getElementById("cookieString").value;
      const parsedCookies = parseCookieHeader(cookieString);
      document.getElementById("output").textContent = JSON.stringify(parsedCookies, null, 2);
  }

  // Attach the click event to the button using its ID
  document.getElementById("parseButton").addEventListener('click', displayParsedCookies);
});
