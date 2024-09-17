window.onload = function() {
  const button = document.querySelector('#menu-button-2');
  if (button) {
    button.click();
  }
};
// Function to check if elements with the specified class are available
const checkElementsAndModify = () => {
  const element = document.querySelector('button.bundle-button.button--primary');
  if (element) {
    clearInterval(interval);
    
    // Set the "value" attribute
    element.value = "Proceed To Cart";

    // Set the "name" attribute
    element.name = "checkout";
  }
};

// Check elements and modify every 1 second
const interval = setInterval(checkElementsAndModify, 1000);