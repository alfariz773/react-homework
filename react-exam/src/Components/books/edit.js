import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

export default function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const logged = localStorage.getItem("currentUser");
    if (!logged) return navigate("/login");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userObj = users.find((u) => u.email === logged);

    const item = (userObj?.bookmarks || []).find(
      (b) => String(b.id) === String(id)
    );

    if (!item) return navigate("/list");

    setTitle(item.title);
    setUrl(item.url);
  }, [id, navigate]);

  function saveChanges() {
    if (!title || !url) return alert("Please fill all fields");

    const logged = localStorage.getItem("currentUser");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((u) => {
      if (u.email !== logged) return u;

      const newBookmarks = u.bookmarks.map((b) =>
        String(b.id) === String(id) ? { ...b, title, url } : b
      );

      return { ...u, bookmarks: newBookmarks };
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Bookmark updated");
    navigate("/list");
  }

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="card shadow p-4">
          <h3 className="mb-4 text-center">Edit Bookmark</h3>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              className="form-control"
              value={title}
              placeholder="Enter new title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">URL</label>
            <input
              className="form-control"
              value={url}
              placeholder="Enter new URL"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-success" onClick={saveChanges}>
              Save Changes
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => navigate("/list")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
