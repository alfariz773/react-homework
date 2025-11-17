import React from "react";

function Home() {
  function showalert() {
    document.getElementById("home-msg").textContent =
      "Hello from React! I love this page!";
    document.getElementById("home-card").style.backgroundColor = "lightblue";
  }

  return (
    <div className="container mt-4">
      <div id="home-card" className="card p-4 mb-4">
        <h3>This is the Home Page</h3>
        <p id="home-msg">Click the button to see my enthusiasm!</p>
        <button className="btn btn-primary" onClick={showalert}>
          Show Enthusiasm
        </button>
      </div>
    </div>
  );
}

export default Home;
