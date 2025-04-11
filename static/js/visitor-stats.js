// Visitor Statistics Script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize visitor counter
    let visitorCount = localStorage.getItem('visitorCount');
    if (!visitorCount) {
        visitorCount = 1;
    } else {
        visitorCount = parseInt(visitorCount) + 1;
    }
    localStorage.setItem('visitorCount', visitorCount);

    // Update counter display
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
        counterElement.textContent = `Total Visitors: ${visitorCount}`;
    }

    // Get visitor location
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const locationElement = document.getElementById('visitor-location');
            if (locationElement) {
                locationElement.textContent = `Location: ${data.city}, ${data.country_name}`;
            }
            
            // Send location data to your backend (if you have one)
            // fetch('/api/visitor-location', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         ip: data.ip,
            //         city: data.city,
            //         country: data.country_name,
            //         timestamp: new Date().toISOString()
            //     })
            // });
        })
        .catch(error => console.error('Error fetching location:', error));
}); 