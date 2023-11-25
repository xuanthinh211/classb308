document.addEventListener('DOMContentLoaded', function () {
    const writeToFileBtn = document.getElementById('writeToFileBtn');
  
    writeToFileBtn.addEventListener('click', function () {
      const jsonObject = {
        name: 'Nguyen Xuan Thinh',
        age: 25,
        city: 'HCM'
      };
  
      // Convert JSON object to string
      const jsonString = JSON.stringify(jsonObject, null, 2);
  
      // Create a Blob with the JSON string
      const blob = new Blob([jsonString], { type: 'application/json' });
  
      // Create a link element
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'output.json';
  
      // Append the link to the body
      document.body.appendChild(a);
  
      // Trigger a click event on the link to initiate the download
      a.click();
  
      // Remove the link from the DOM
      document.body.removeChild(a);
    });
  });
  