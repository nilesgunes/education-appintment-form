document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://run.mocky.io/v3/e507b203-a373-4760-ae20-96c01387299f';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const titleSelect = document.getElementById('title');
            data.title.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                titleSelect.appendChild(optionElement);
            });

            const courseSelect = document.getElementById('course');
            data.courseType.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                courseSelect.appendChild(optionElement);
            });

            const citySelect = document.getElementById('city');
            data.city.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                citySelect.appendChild(optionElement);
            });

            const phoneLocationSelect = document.getElementById('phoneLocation');
            data.phoneLocation.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                phoneLocationSelect.appendChild(optionElement);
            });

            const hoursLocationSelect = document.getElementById('hoursLocation');
            data.hours.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                hoursLocationSelect.appendChild(optionElement);
            });
        })
        .catch(error => {
            console.error('API verisi alınamadı: ', error);
        });
});

function validateForm() {
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^05\d{9}$/;

    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid Turkish phone number (starting with 05).');
        return false;
    }

    return true;
}

function closeAd() {
    const adContainer = document.querySelector('.ad-container');
    adContainer.style.display = 'none'; // Reklamı gizle
}

