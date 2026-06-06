function generateNotes() {
    let topic = document.querySelector("input").value;

    if(topic === "") {
        alert("Please enter a topic");
    } else {
        alert("Notes for: " + topic);
    }
}
