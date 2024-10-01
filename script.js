let display = document.getElementById('display');

// Append characters to the display
function appendCharacter(char) {
  display.value += char;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Delete the last character from the display
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
  try {
    if(display.value == '' || display.value == '.') display.value = 0;
   
    else  display.value = eval(display.value);
  } catch (error) {
    display.value = 'Syntax Error';
  }
}