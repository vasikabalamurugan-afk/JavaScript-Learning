const now = new Date();
const options = {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};
const istDate = new Intl.DateTimeFormat('en-IN', options).format(now);
console.log("Current Date and Time (IST): " + istDate);