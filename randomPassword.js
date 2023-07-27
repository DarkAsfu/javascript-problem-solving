// Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
// const randomPass = () =>{
//     const pass = Math.random()*1000;
//     console.log(pass);
// }

// randomPass();

function generateRandomPassword(length) {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?",
    password = "";
    for (let i = 0, n = charset.length; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}
const length = 8;
const result = generateRandomPassword(length);
console.log(result);