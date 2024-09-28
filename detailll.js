// Function to simulate fetching flight details dynamically (in a real case this would come from an API)
function loadFlightDetails() {
    const flightData = {
        flightNumber: 'AI101',
        airline: 'Air India',
        departureAirport: 'John F. Kennedy International (JFK)',
        arrivalAirport: 'London Heathrow (LHR)',
        departureTime: '2024-09-27 10:00 AM (EST)',
        arrivalTime: '2024-09-27 10:00 PM (GMT)',
        flightDuration: '7 hours',
        status: 'On Time',
        route: 'JFK → LHR'
    };

    document.getElementById('flight-number').innerText = flightData.flightNumber;
    document.getElementById('airline').innerText = flightData.airline;
    document.getElementById('departure-airport').innerText = flightData.departureAirport;
    document.getElementById('arrival-airport').innerText = flightData.arrivalAirport;
    document.getElementById('departure-time').innerText = flightData.departureTime;
    document.getElementById('arrival-time').innerText = flightData.arrivalTime;
    document.getElementById('flight-duration').innerText = flightData.flightDuration;
    document.getElementById('status').innerText = flightData.status;
    document.getElementById('route').innerText = flightData.route;
}

// Functionality for View Map
function viewMap() {
    // Redirect to the map page
    window.location.href = 'map.html'; // Adjust the URL as necessary
}


// Functionality for Logout
function logout() {
    // Clear user session if necessary and redirect to the login page
    window.location.href = 'login.html'; // Adjust the URL as necessary
}

// Load flight details when the page loads
window.onload = loadFlightDetails;

function goHome() {
    window.location.href = 'main.html';  // Replace with the actual path or URL of your main page
}
