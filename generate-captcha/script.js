// Generate a random string of six characters
function generateCaptcha() {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var captcha = '';
    for (var i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
}

// Set the CAPTCHA image source to a data URL representing the generated CAPTCHA
function setCaptchImage(captcha) {
    var canvas = document.createElement('canvas');
    canvas.width = 170;
    canvas.height = 50;
    var ctx = canvas.getContext('2d');
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#333';
    ctx.fillText(captcha, canvas.width / 2, canvas.height / 2);
    var dataURL = canvas.toDataURL();
    document.getElementById('captcha-image').setAttribute('src', dataURL);
}

// Reload the CAPTCHA
function reloadCaptcha() {
    var captcha = generateCaptcha();
    setCaptchImage(captcha);
}

// On page load, generate and display the initial CAPTCHA
document.addEventListener('DOMContentLoaded', function () {
    var captcha = generateCaptcha();
    setCaptchImage(captcha);
});
