function openModal() {
  const dialog = document.getElementById("exampleDialog");
  dialog.showModal();
}

function closeModal() {
  const dialog = document.getElementById("exampleDialog");
  dialog.close();
}

function submitBooking(event) {
  event.preventDefault();
  const dialog = document.getElementById("exampleDialog");

  alert("Your booking request has been submitted!");
  if (dialog?.open) {
    dialog.close();
  }
}
