function generateNotes() {

    let topic = document.getElementById("topic").value.toLowerCase();

    let notes = "";

    if(topic.includes("cloud")) {
        notes = `
        <h3>Cloud Computing</h3>
        <p>Cloud Computing is the delivery of computing services over the internet.</p>
        <ul>
            <li>AWS</li>
            <li>Microsoft Azure</li>
            <li>Google Cloud Platform</li>
        </ul>`;
    }

    else if(topic.includes("ai")) {
        notes = `
        <h3>Artificial Intelligence</h3>
        <p>AI enables machines to perform tasks that normally require human intelligence.</p>
        <ul>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Natural Language Processing</li>
        </ul>`;
    }

    else if(topic.includes("python")) {
        notes = `
        <h3>Python</h3>
        <p>Python is a popular programming language used in AI, Data Science, and Web Development.</p>`;
    }

    else {
        notes = `
        <h3>${topic}</h3>
        <p>Study notes for this topic will be added in future versions.</p>`;
    }

    document.getElementById("output").innerHTML = notes;
}
