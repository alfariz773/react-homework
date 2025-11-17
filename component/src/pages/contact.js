import React from "react";

function Contact() {
  function showalert() {
    document.getElementById("contact-msg").textContent =
      "Hello from React! I love this page!";
    document.getElementById("contact-card").style.backgroundColor = "lightblue";
  }

  return (
    <div className="container mt-4">
      <div id="contact-card" className="card p-4 mb-4">
        <h3>This is the Contact Page</h3>
        <p id="contact-msg">Click the button to see my enthusiasm!</p>
        <button className="btn btn-primary" onClick={showalert}>
          Show Enthusiasm
        </button>
      </div>
    </div>
  );
}

export default Contact;
