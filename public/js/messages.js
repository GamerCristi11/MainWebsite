const messages = [
    "Welcome here!",
    "Have a great day!",
    "Enjoy your stay!",
    "Thanks for visiting!",
    "Hello traveler!",
    "Error 404: My brain not found...",
    "This is a text :)"
];

const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();
let message;

if (month === 12 && day === 25) {
    message = "Merry Christmas!"
} else if (month === 3 && day === 14) {
    message = "Happy Pi Day!! 3.14159..."
} else {
    message = messages[Math.floor(Math.random() * messages.length)];
}
document.getElementById("topMessage").textContent = message;