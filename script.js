document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        // Limpiar mensajes de error previos
        clearErrors();

        // Obtener los valores de los campos
        const fullName = document.getElementById('fullName').value.trim();
        const documentNumber = document.getElementById('documentNumber').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        // Validación de campos
        if (fullName === "") {
            showError('fullNameError', 'El nombre completo es obligatorio.');
            isValid = false;
        }

        if (documentNumber === "" || !/^\d+$/.test(documentNumber)) {
            showError('documentNumberError', 'El número de documento es obligatorio y debe contener solo números.');
            isValid = false;
        }

        if (email === "" || !validateEmail(email)) {
            showError('emailError', 'Debe ingresar un correo electrónico válido.');
            isValid = false;
        }

        if (phone === "" || !/^\d{10}$/.test(phone)) {
            showError('phoneError', 'El teléfono debe contener 10 dígitos numéricos.');
            isValid = false;
        }

        if (username === "") {
            showError('usernameError', 'El nombre de usuario es obligatorio.');
            isValid = false;
        }

        if (!validatePassword(password)) {
            showError('passwordError', 'La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y un número.');
            isValid = false;
        }

        if (password !== confirmPassword) {
            showError('confirmPasswordError', 'Las contraseñas no coinciden.');
            isValid = false;
        }

        // Si todos los campos son válidos, enviar el formulario
        if (isValid) {
            alert('¡Registro exitoso!');
            form.submit();
        }
    });

    // Validar formato de correo electrónico
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Validar seguridad de la contraseña
    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return re.test(password);
    }

    // Mostrar mensajes de error
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    // Limpiar mensajes de error
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach((message) => {
            message.textContent = '';
            message.style.display = 'none';
        });
    }
});
