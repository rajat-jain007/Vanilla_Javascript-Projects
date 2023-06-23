const container = document.querySelector(".container");
const seat = document.querySelectorAll(".seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = Number(movieSelect.value);

// Update Nnumber of Tickets ("count" in html) and Ticket Price("total" in html)
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  console.log(selectedSeats);

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie Select Event
movieSelect.addEventListener("change", function (e) {
  ticketPrice = Number(e.target.value);
  updateSelectedCount();
});

// Seat Click Event
container.addEventListener("click", function (e) {
  if (
    // NOTE:- With classList property to add, remove and toggle CSS classes from an element (i.e classList.toggle, classList.add or remove or contains)
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
