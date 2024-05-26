document.addEventListener('DOMContentLoaded', () => {
    const temperature = 5; // °C
    const windSpeed = 10; // km/h

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill;

    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
            const windChillValue = 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
            return windChillValue.toFixed(2) + '°C';
        } else {
            return 'N/A';
        }
    }
});

// Get the current year
const currentYear = new Date().getFullYear();

// Update the footer with the current year
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the second paragraph in the footer with the last modified date
document.getElementById('lastModified').textContent = "Last modified: " + lastModifiedDate;
