// Step 1

const container = document.querySelector(".container");
const seats = document.querySelectorAll(".seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

// Calling this function here will only work the logic
populateUI();

let ticketPrice = Number(movieSelect.value);

// step 6
// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats1 = JSON.parse(localStorage.getItem("selectedSeats"));
  console.log(selectedSeats1);

  if (selectedSeats1 !== null && selectedSeats1.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats1.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex1 = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex1 !== null) {
    movieSelect.selectedIndex = selectedMovieIndex1;
  }
}

// Step 5
// Save Selected movie INdex and Price in Local Storage

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Step 3
// Update Nnumber of Tickets ("count" in html) and Ticket Price("total" in html)

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // Copy Selected seats into array
  const seatsIndex = [...selectedSeats].map(function (seat) {
    // Map method Returns a new array indexes
    return [...seats].indexOf(seat);
  });
  console.log(seatsIndex);

  // Save data in Local Storage of Browser
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Step 4
// Movie Select Event
movieSelect.addEventListener("change", function (e) {
  ticketPrice = Number(e.target.value);
  // The selectedIndex property sets or returns the index of the selected option in a drop-down list.
  // The index starts at 0.
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Step 2

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

// Initial Count and total set
updateSelectedCount();
