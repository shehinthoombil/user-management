// function validateForm()
//      {
//         document.getElementById('email-error').textContent = '';
//         document.getElementById('password-error').textContent = '';

//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;

//         if (!email) 
//         {
//             document.getElementById('email-error').textContent = 'Email field should not be empty';
//             return false;
//         }

//         if (!password || password.length < 6) 
//         {
//             document.getElementById('password-error').textContent = 'Password must be at least 6 characters';
//             return false;
//         }

//         return true;
//     }

const form = document.getElementById('login-form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const errorDisplay = document.getElementById('errorDisplay'); 

    form.addEventListener('submit', (event) => {
        let hasError = false;

        if (!email.value || !password.value) {
            hasError = true;
            errorDisplay.innerHTML = "All fields are required";
        } else if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            hasError = true;
            errorDisplay.innerHTML = "Please enter a valid email.";
        } else if (password.value.length < 6) {
            hasError = true;
            errorDisplay.innerHTML = "Password must contain atleast 6 characters";
        }

        if (hasError) {
            event.preventDefault();
        }

    });