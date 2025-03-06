const correctUsername = "admin";
const correctPassword = "password123";

let attempts = 0;

do {
    let username = prompt("Enter your username:");  // No need to redeclare
    let password = prompt("Enter your password:");

    if (username === correctUsername && password === correctPassword) {
        alert("Login successful! Welcome.");
        break;
    } else {
        attempts++;
        alert("Incorrect username or password. Try again.");
    }

    if (attempts === 3) {
        alert("Too many failed attempts. Please wait 5 seconds before trying again.");
        let countdown = 5;
        while (countdown > 0) {
            console.log(`Retrying in ${countdown} seconds...`);
            countdown--;
        }
        attempts = 0;
    }

} while (true);
