import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

export default function ViewBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookmark, setBookmark] = useState(null);

  useEffect(() => {
    const logged = localStorage.getItem("currentUser");
    if (!logged) return navigate("/login");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userObj = users.find((u) => u.email === logged);

    const item = (userObj?.bookmarks || []).find(
      (b) => String(b.id) === String(id)
    );

    setBookmark(item);
  }, [id, navigate]);

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="card shadow p-4">
          
          {bookmark ? (
            <>
              <h3 className="mb-4 text-center">Bookmark Details</h3>

              <p>
                <strong>Title:</strong> {bookmark.title}
              </p>
              <p>
                <strong>URL: </strong>
                <a href={bookmark.url} target="_blank" rel="noreferrer">
                  {bookmark.url}
                </a>
              </p>
              <p>
                <strong>Added At:</strong> {bookmark.time}
              </p>

              <div className="d-flex justify-content-between mt-3">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/edit/${bookmark.id}`)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => navigate("/list")}
                >
                  Back
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="alert alert-danger text-center">
                Bookmark not found
              </div>
              <button
                className="btn btn-secondary"
                onClick={() => navigate("/list")}
              >
                Back
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
