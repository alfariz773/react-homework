import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

export default function CreateBook() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [todaysCount, setTodaysCount] = useState(0);

  useEffect(() => {
    const logged = localStorage.getItem("currentUser");
    if (!logged) return navigate("/login");

    setCurrentUser(logged);

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);

    // Calculate today’s count
    const userData = storedUsers.find((u) => u.email === logged);
    const today = new Date().toLocaleDateString();

    const count =
      userData?.bookmarks?.filter((b) => {
        const date = new Date(b.time).toLocaleDateString();
        return date === today;
      }).length || 0;

    setTodaysCount(count);
  }, [navigate]);

  function addBookmark() {
    if (!title || !url) return alert("Fill all fields");

    const today = new Date().toLocaleDateString();

    const updatedUsers = users.map((u) => {
      if (u.email !== currentUser) return u;

      const bookmarks = u.bookmarks || [];

      const todaysCount = bookmarks.filter((b) => {
        const d = new Date(b.time).toLocaleDateString();
        return d === today;
      }).length;

      if (todaysCount >= 5) {
        alert("You can only add 5 bookmarks per day");
        return u;
      }

      const newBookmark = {
        id: Date.now(),
        title,
        url,
        time: new Date().toString(),
      };

      return { ...u, bookmarks: [...bookmarks, newBookmark] };
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);

    // Recalculate today's count after adding
    const current = updatedUsers.find((u) => u.email === currentUser);
    const count =
      current.bookmarks.filter(
        (b) => new Date(b.time).toLocaleDateString() === today
      ).length;

    setTodaysCount(count);

    alert("Bookmark added");
    navigate("/list");
  }

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="card shadow-sm p-4">
          <h3 className="mb-1 text-center">Add New Bookmark</h3>

          {/* ✅ Show today's count */}
          <p className="text-center text-muted mb-4">
            Today: {todaysCount}/5 bookmarks used
          </p>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              className="form-control"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">URL</label>
            <input
              className="form-control"
              placeholder="Enter URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={addBookmark}>
              Add Bookmark
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => navigate("/list")}
            >
              Back to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
