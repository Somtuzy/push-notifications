self.addEventListener("push", (event) => {
  const { title, body } = event.data.json().notification;

  self.registration.showNotification(title, {
    body,
    icon: '/images/pic.jpeg'
  });
});