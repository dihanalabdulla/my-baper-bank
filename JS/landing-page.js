document.getElementById('btn-submit').addEventListener('click', function () {
    let emailField = document.getElementById('user-email')
    let email = emailField.value;
    // console.log(email)
    let passwordField = document.getElementById('user-password')
    let password = passwordField.value;
    // console.log(password)
    if (email == 'abcd@gmail.com' && password == 'secret') {
        window.location.href =
            'http://127.0.0.1:5500/inside-part.html'
    }
    else (alert('tui pass vule gechos ekhon ekhan theke ber ho'))
})

