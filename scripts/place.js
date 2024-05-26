document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    currentYearElement.textContent = currentYear;
    lastModifiedElement.textContent = lastModified;

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
