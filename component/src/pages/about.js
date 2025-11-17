import React from "react";

function About() {
  function showalert() {
    document.getElementById("about-msg").textContent =
      "Hello from React! I love this page!";
    document.getElementById("about-card").style.backgroundColor = "lightblue";
  }

  return (
    <div className="container mt-4">
      <div id="about-card" className="card p-4 mb-4">
        <h3>This is the About Page</h3>
        <p id="about-msg">Click the button to see my enthusiasm!</p>
        <button className="btn btn-primary" onClick={showalert}>
          Show Enthusiasm
        </button>
      </div>
    </div>
  );
}

export default About;
