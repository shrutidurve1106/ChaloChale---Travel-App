function openModal() {
  const dialog = document.getElementById("exampleDialog");
  dialog.showModal();
}

function closeModal() {
  const dialog = document.getElementById("exampleDialog");
  dialog.close();
}

function submitBooking() {
  const dialog = document.getElementById("exampleDialog");

  alert("Your booking request has been submitted!");
  dialog.close();
}
