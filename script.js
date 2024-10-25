// Password options
let passwordLength = 8;
let includeSpecial = true;
let includeNumbers = true;
let difficulty = 'MEDIUM';

// Character sets
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

function updatePasswordLengthDisplay() {
    document.getElementById('password-length').textContent = passwordLength;
}

function generatePassword() {
    let charSet = letters;
    if (includeNumbers) charSet += numbers;
    if (includeSpecial) charSet += specialChars;

    if (difficulty === 'EASY') charSet = letters.toLowerCase();
    else if (difficulty === 'HARD') charSet += specialChars;

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomChar = charSet[Math.floor(Math.random() * charSet.length)];
        password += randomChar;
    }
    document.getElementById('password-result').value = password;
}

document.getElementById('increase-length').addEventListener('click', () => {
    if (passwordLength < 32) passwordLength++;
    updatePasswordLengthDisplay();
});

document.getElementById('decrease-length').addEventListener('click', () => {
    if (passwordLength > 4) passwordLength--;
    updatePasswordLengthDisplay();
});

document.getElementById('special-yes').addEventListener('click', () => {
    includeSpecial = true;
    document.getElementById('special-yes').classList.add('active');
    document.getElementById('special-no').classList.remove('active');
});

document.getElementById('special-no').addEventListener('click', () => {
    includeSpecial = false;
    document.getElementById('special-no').classList.add('active');
    document.getElementById('special-yes').classList.remove('active');
});

document.getElementById('numbers-yes').addEventListener('click', () => {
    includeNumbers = true;
    document.getElementById('numbers-yes').classList.add('active');
    document.getElementById('numbers-no').classList.remove('active');
});

document.getElementById('numbers-no').addEventListener('click', () => {
    includeNumbers = false;
    document.getElementById('numbers-no').classList.add('active');
    document.getElementById('numbers-yes').classList.remove('active');
});

document.getElementById('easy').addEventListener('click', () => {
    difficulty = 'EASY';
    document.getElementById('easy').classList.add('active');
    document.getElementById('medium').classList.remove('active');
    document.getElementById('hard').classList.remove('active');
});

document.getElementById('medium').addEventListener('click', () => {
    difficulty = 'MEDIUM';
    document.getElementById('medium').classList.add('active');
    document.getElementById('easy').classList.remove('active');
    document.getElementById('hard').classList.remove('active');
});

document.getElementById('hard').addEventListener('click', () => {
    difficulty = 'HARD';
    document.getElementById('hard').classList.add('active');
    document.getElementById('medium').classList.remove('active');
    document.getElementById('easy').classList.remove('active');
});

// Regenerate password
document.getElementById('regenerate').addEventListener('click', generatePassword);

// Copy password to clipboard
document.getElementById('copy').addEventListener('click', () => {
    const password = document.getElementById('password-result');
    password.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});

// Initialize the first password generation
generatePassword();
