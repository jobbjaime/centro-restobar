        // Prompt para preguntar el año de nacimiento solo si está en la página de bebidas
        let yearOfBirth = prompt("¿Cuál es tu año de nacimiento?");
        let currentYear = new Date().getFullYear();
        let age = currentYear - yearOfBirth;

        // Verificación de edad
        if (age >= 18) {
            alert("¡Puedes escoger también las bebidas con alcohol!");
        } else {
            alert("No puedes escoger bebidas con alcohol.");
        }