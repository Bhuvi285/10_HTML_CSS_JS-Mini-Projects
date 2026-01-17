function calculateLove() {

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
    } else {
        const lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2} 's Love Percentage:${lovePercentage}`;
        // innerHTML is a JavaScript property that lets you get or change the HTML content inside an element.
        // element.innerHTML → reads the content.
        // element.innerHTML = "..." → changes the content.

        if (lovePercentage < 30) {
            result.innerHTML += "<br> Not a Great Match. Keep looking!"
        } else if (lovePercentage >= 30 && lovePercentage < 70) {
            result.innerHTML += "<br> There's Potential. Give it a try!"
        } else {
            result.innerHTML += "<br> A Perfect Match! Love is in the air!"
        }
    }
}
