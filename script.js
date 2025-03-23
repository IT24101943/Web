const seatContainer = document.getElementById('seatContainer');
const selectedCount = document.getElementById('selectedCount');
const totalPrice = document.getElementById('totalPrice');
const movieSelect = document.getElementById('movieSelect');

const seatCount = 30;
let selectedSeats = [];

// Create seats
for (let i = 1; i <= seatCount; i++) {
  const seat = document.createElement('div');
  seat.classList.add('seat');
  seat.innerText = i;

  // Randomly make some seats occupied
  if (Math.random() < 0.2) {
    seat.classList.add('occupied');
  } else {
    seat.addEventListener('click', () => toggleSeat(seat, i));
  }

  seatContainer.appendChild(seat);
}

function toggleSeat(seat, number) {
  if (seat.classList.contains('selected')) {
    seat.classList.remove('selected');
    selectedSeats = selectedSeats.filter(n => n !== number);
  } else {
    seat.classList.add('selected');
    selectedSeats.push(number);
  }
  updateSummary();
}

function updateSummary() {
  selectedCount.innerText = selectedSeats.length;
  const price = +movieSelect.value;
  totalPrice.innerText = selectedSeats.length * price;
}

movieSelect.addEventListener('change', updateSummary);

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (selectedSeats.length === 0) {
    alert('Please select at least one seat.');
    return;
  }
  alert(`You have booked ${selectedSeats.length} seat(s) for $${selectedSeats.length * +movieSelect.value}. Enjoy your movie!`);
  // Reset selection
  document.querySelectorAll('.seat.selected').forEach(seat => seat.classList.remove('selected'));
  selectedSeats = [];
  updateSummary();
});

// Initial update
updateSummary();
