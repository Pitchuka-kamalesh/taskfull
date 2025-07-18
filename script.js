function validateInput(input, validator, errorMsg) {
    const validIcon = input.parentElement.querySelector('.valid-icon');
    const invalidIcon = input.parentElement.querySelector('.invalid-icon');
    const errorMessage = input.parentElement.querySelector('.error-message');
    if (validator(input.value)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        if (validIcon) validIcon.style.display = 'inline';
        if (invalidIcon) invalidIcon.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'none';
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
        if (validIcon) validIcon.style.display = 'none';
        if (invalidIcon) invalidIcon.style.display = 'inline';
        if (errorMessage) {
            errorMessage.textContent = errorMsg;
            errorMessage.style.display = 'block';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Name validation
    const nameInput = document.getElementById('student_name');
    nameInput.addEventListener('input', function() {
        validateInput(nameInput, v => v.trim().length >= 2, 'Name is required and must be at least 2 characters.');
    });

    // Registration number validation
    const regInput = document.getElementById('registration_number');
    regInput.addEventListener('input', function() {
        validateInput(regInput, v => v.trim().length >= 3, 'Registration number is required and must be at least 3 characters.');
    });

    // Academic year validation
    const yearInput = document.getElementById('academic_year');
    yearInput.addEventListener('change', function() {
        validateInput(yearInput, v => v !== '', 'Please select an academic year.');
    });

    // Branch validation
    const branchInput = document.getElementById('branch');
    branchInput.addEventListener('change', function() {
        validateInput(branchInput, v => v !== '', 'Please select a branch.');
    });

    // Initial validation on page load
    nameInput.dispatchEvent(new Event('input'));
    regInput.dispatchEvent(new Event('input'));
    yearInput.dispatchEvent(new Event('change'));
    branchInput.dispatchEvent(new Event('change'));

    // Image preview logic
    document.getElementById('student_image').addEventListener('change', function(event) {
        const [file] = event.target.files;
        const img = document.getElementById('photoPreview');
        const placeholder = document.getElementById('photoPlaceholder');
        if (file) {
            img.src = URL.createObjectURL(file);
            img.style.display = 'block';
            placeholder.style.display = 'none';
        } else {
            img.src = '';
            img.style.display = 'none';
            placeholder.style.display = 'block';
        }
    });
}); 