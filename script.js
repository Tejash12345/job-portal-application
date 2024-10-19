// Toggle job details and form validation
document.addEventListener('DOMContentLoaded', () => {
    // Job creation form submission
    document.getElementById('jobForm')?.addEventListener('submit', function (event) {
        event.preventDefault();
        validateJobForm();
    });

    // Job application form submission
    document.getElementById('applyForm')?.addEventListener('submit', function (event) {
        event.preventDefault();
        validateApplyForm();
    });
});

// Validate Job Form
function validateJobForm() {
    const requiredFields = ['title', 'type', 'department', 'country', 'description', 'opening-date'];
    let isValid = true;

    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value) {
            alert(`${field.replace('-', ' ')} is required.`);
            isValid = false;
        }
    });

    const openingDate = new Date(document.getElementById('opening-date').value);
    const currentDate = new Date();
    if (openingDate > currentDate) {
        alert('Opening date cannot be greater than the current date.');
        isValid = false;
    }

    if (isValid) {
        alert('Job data submitted successfully!');
        // Here you can submit the form via AJAX or other methods
        // this.submit();
    }
}

// Validate Apply Form
function validateApplyForm() {
    const requiredFields = [
        'first-name', 'last-name', 'email', 'phone', 'address', 'city',
        'state', 'zip', 'country', 'education-level', 'education-type', 'resume'
    ];
    let isValid = true;

    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value) {
            alert(`${field.replace('-', ' ')} is required.`);
            isValid = false;
        }
    });

    const zip = document.getElementById('zip');
    if (!/^\d+$/.test(zip.value)) {
        alert('Zip code must be numeric.');
        isValid = false;
    }

    const phone = document.getElementById('phone');
    if (!/^\d{10}$/.test(phone.value)) {
        alert('Phone number must be 10 digits.');
        isValid = false;
    }

    const email = document.getElementById('email');
    if (!/\S+@\S+\.\S+/.test(email.value)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (isValid) {
        alert('Job application submitted successfully!');
        // Here you can submit the form via AJAX or other methods
        // this.submit();
    }
}
