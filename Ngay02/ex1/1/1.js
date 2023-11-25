function displayDayandTime() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const day = days[now.getDay()];

    let hours = now.getHours() % 12 || 12; // the hour '0' should be '12'
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const currentTime = hours + ' ' + ampm + ' : ' + minutes + ' : ' + seconds;
    const displayText = 'Today is : ' + day + '.<br>Current time is : ' + currentTime;

    document.getElementById("dayTimeDisplay").innerHTML = displayText;
}

displayDayandTime();