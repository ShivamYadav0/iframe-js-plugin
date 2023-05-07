// Get the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const iframeUrl = urlParams.get('iframe_url');

// If the iframe_url parameter exists, inject an iFrame into the page
if (iframeUrl) {
  // Create the iFrame element
  const iframe = document.createElement('iframe');
  iframe.src = iframeUrl;
  iframe.style.width = '100%';
  iframe.style.height = '100%';

  // Create the hover button
  const button = document.createElement('button');
  button.textContent = 'Close iFrame';
  button.style.position = 'fixed';
  button.style.top = '10px';
  button.style.right = '10px';
  button.style.zIndex = '9999';

  // Add an event listener to close the iFrame when the button is clicked
  button.addEventListener('click', () => {
    iframe.remove();
    button.remove();
  });

  // Add the iFrame and button to the page
  document.body.appendChild(iframe);
  document.body.appendChild(button);
}
