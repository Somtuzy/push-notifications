export default (() => {
  // Register service worker
  if ("serviceWorker" in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker
      .register("./firebase-messaging-sw.js", { scope: "./" })
      .then(
        (registration) => {
          console.log("Service worker registration succeeded:", registration);
        },
        (error) => {
          console.error(`Service worker registration failed: ${error}`);
        }
      );
  } else {
    console.error("Service workers are not supported.");
  }
})();
