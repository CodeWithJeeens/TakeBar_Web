chrome.runtime.onConnect.addListener(function(port) {
    console.log("Connected to popup script");
  
    // Receive a message from the popup script
    port.onMessage.addListener(function(message) {
      console.log("Received message from popup script: ", message);
  
      // Send a message back to the popup script
      port.postMessage({greeting: "hello from background"});
    });
  });
  
  // Receive a message from the popup button
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("Received message from popup button: ", message);
  });