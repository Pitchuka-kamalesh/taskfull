function validateInput(input, validator, errorMsg, showErrors = true) {
    const errorMessage = input.parentElement.querySelector('.error-message');
    const isValid = validator(input.value);

    input.classList.toggle('valid', isValid);
    input.classList.toggle('invalid', !isValid);

    if (errorMessage) {
        if (!isValid && showErrors) {
            errorMessage.textContent = errorMsg;
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    }

    return isValid;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('studentForm');

    const nameInput = document.getElementById('student_name');
    const regInput = document.getElementById('registration_number');
    const yearInput = document.getElementById('academic_year');
    const branchInput = document.getElementById('branch');

    nameInput.addEventListener('blur', () => {
        validateInput(nameInput, v => v.trim().length >= 2, 'Name must be at least 2 characters.');
    });

    regInput.addEventListener('blur', () => {
        validateInput(regInput, v => v.trim().length >= 3, 'Registration number must be at least 3 characters.');
    });

    yearInput.addEventListener('blur', () => {
        validateInput(yearInput, v => v !== '', 'Please select an academic year.');
    });

    branchInput.addEventListener('blur', () => {
        validateInput(branchInput, v => v !== '', 'Please select a branch.');
    });

    form.addEventListener('submit', e => {
        const isNameValid = validateInput(nameInput, v => v.trim().length >= 2, 'Name must be at least 2 characters.');
        const isRegValid = validateInput(regInput, v => v.trim().length >= 3, 'Registration number must be at least 3 characters.');
        const isYearValid = validateInput(yearInput, v => v !== '', 'Please select an academic year.');
        const isBranchValid = validateInput(branchInput, v => v !== '', 'Please select a branch.');

        if (!isNameValid || !isRegValid || !isYearValid || !isBranchValid) {
            e.preventDefault();
        }
    });

    // Image preview
    document.getElementById('student_image').addEventListener('change', function (event) {
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
