
function clearVariable() {
  storytelling = 0;
  sport = 0;
  simulation = 0;
  action = 0;
  strategy = 0;
  shooter = 0;
  survival = 0;
  puzzle = 0;
  localStorage.setItem('storytelling', storytelling);
  localStorage.setItem('sport', sport);
  localStorage.setItem('simulation', simulation);
  localStorage.setItem('action', action);
  localStorage.setItem('strategy', strategy);
  localStorage.setItem('shooter', shooter);
  localStorage.setItem('survival', survival);
  localStorage.setItem('puzzle', puzzle);
}

document.addEventListener("DOMContentLoaded", function() {
  // Event listener for the button click
  document.getElementById("clearButton").addEventListener("click", clearVariable);
});

// Function to track the response and update the count
function trackResponse(tag) {
  switch (tag) {
    case 'storytelling':
      storytelling++;
      break;
    case 'sport':
      sport++;
      break;
    case 'simulation':
      simulation++;
      break;
    case 'action':
      action++;
      break;
    case 'strategy':
      strategy++;
      break;
    case 'shooter':
      shooter++;
      break;
    case 'survival':
      survival++;
      break;
    case 'puzzle':
      puzzle++;
      break;
    default:
      break;
  }
  // Store the updated values in localStorage
  localStorage.setItem('storytelling', storytelling);
  localStorage.setItem('sport', sport);
  localStorage.setItem('simulation', simulation);
  localStorage.setItem('action', action);
  localStorage.setItem('strategy', strategy);
  localStorage.setItem('shooter', shooter);
  localStorage.setItem('survival', survival);
  localStorage.setItem('puzzle', puzzle);
}

// Function to retrieve the values from localStorage
function retrieveValues() {
  storytelling = parseInt(localStorage.getItem('storytelling')) || 0;
  sport = parseInt(localStorage.getItem('sport')) || 0;
  simulation = parseInt(localStorage.getItem('simulation')) || 0;
  action = parseInt(localStorage.getItem('action')) || 0;
  strategy = parseInt(localStorage.getItem('strategy')) || 0;
  shooter = parseInt(localStorage.getItem('shooter')) || 0;
  survival = parseInt(localStorage.getItem('survival')) || 0;
  puzzle = parseInt(localStorage.getItem('puzzle')) || 0;
}

// Call the function to retrieve the values
retrieveValues();
