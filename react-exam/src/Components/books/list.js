import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

export default function ListBook() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const [search, setSearch] = useState("");

  // pagination
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    const logged = localStorage.getItem("currentUser");
    if (!logged) return navigate("/login");

    setCurrentUser(logged);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userObj = users.find((u) => u.email === logged);
    setBookmarks(userObj?.bookmarks || []);
  }, [navigate]);

  function deleteBookmark(id) {
    const ok = window.confirm("Are you sure you want to delete this bookmark?");
    if (!ok) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((u) => {
      if (u.email !== currentUser) return u;
      return {
        ...u,
        bookmarks: u.bookmarks.filter((b) => b.id !== id),
      };
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    const userObj = updatedUsers.find((u) => u.email === currentUser);
    setBookmarks(userObj?.bookmarks || []);
  }

  // search + pagination
  const filtered = bookmarks.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.url.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <Navbar />

      <div className="container mt-4">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Your Bookmarks</h3>
          <button className="btn btn-primary" onClick={() => navigate("/create")}>
            + Add Bookmark
          </button>
        </div>

        <input
          className="form-control mb-3"
          placeholder="Search bookmarks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {paginated.length === 0 ? (
          <div className="alert alert-warning text-center">
            No bookmarks found.
          </div>
        ) : (
          paginated.map((b) => (
            <div className="card mb-3 shadow-sm" key={b.id}>
              <div className="card-body">
                <h5 className="card-title">{b.title}</h5>

                <p className="card-text">
                  <a href={b.url} target="_blank" rel="noreferrer">
                    {b.url}
                  </a>
                </p>

                <p className="text-muted">Added: {b.time}</p>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-info text-white"
                    onClick={() => navigate(`/view/${b.id}`)}
                  >
                    View
                  </button>

                  <button
                    className="btn btn-warning"
                    onClick={() => navigate(`/edit/${b.id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBookmark(b.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="d-flex justify-content-center align-items-center mt-3 gap-3">
          <button
            className="btn btn-secondary"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          <span>
            Page <strong>{page}</strong> of <strong>{totalPages}</strong>
          </span>

          <button
            className="btn btn-secondary"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}
