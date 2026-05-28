self.addEventListener('fetch', (event) => {
  // Keeps the browser happy by passing network traffic safely through
  event.respondWith(fetch(event.request));
});
