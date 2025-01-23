const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()


    // document.getElementById().textContent = ""
    document.getElementById('emailError').textContent = ""
    document.getElementById('passwordError').textContent = ""
    document.getElementById('confirmPasswordError').textContent = ""

    let isValid = true

    // const firstName = document.getElementById('firstName').value
    // validate firstName
    // validate email
    const email = document.getElementById('email').value
    const emailregEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailregEx.test(email)) {
        document.getElementById('emailError').textContent = "Invalid email address"
        isValid = false
    }

    // validate password
    const password = document.getElementById('password').value
    if (password.lenght < 6) {
        document.getElementById('passwordError').textContent = "invalid, password must be a minimum of 6 characters"
        isValid = false
    }

    // validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Password do not match"
        isValid = false
    }

    if (isValid) {
        alert("registration Successful")
        form.reset()
    }
})

// function validateForm(params) {
    
// }

// const validateEmail = (email) => {
//     return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
// } 
