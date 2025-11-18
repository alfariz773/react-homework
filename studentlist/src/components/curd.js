import React, { useState } from "react";
import Navbar from "./navbar";

function Crud() {
  const [items, setItems] = useState([
    { id: 1, name: "John Doe", roll: "101", sclass: "10A" },
    { id: 2, name: "Jane Smith", roll: "102", sclass: "10B" },
    
  ]);

  // FORM STATES
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [sclass, setSclass] = useState("");

  // EDIT STATES
  const [editingItemId, setEditingItemId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editRoll, setEditRoll] = useState("");
  const [editClass, setEditClass] = useState("");

  // SEARCH
  const [searchTerm, setSearchTerm] = useState("");

  // CHECK IF ROLL IS UNIQUE
  const rollExists = (rollValue, excludeId = null) => {
    return items.some(
      (item) => item.roll === rollValue && item.id !== excludeId
    );
  };

  // ADD STUDENT
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !roll.trim() || !sclass.trim()) {
      alert("All fields are required.");
      return;
    }

    if (rollExists(roll.trim())) {
      alert("Roll number must be unique!");
      return;
    }

    const newItem = {
      id: items.length + 1,
      name,
      roll,
      sclass,
    };

    setItems([...items, newItem]);

    setName("");
    setRoll("");
    setSclass("");
  };

  // START EDIT
  const handleEditItem = (item) => {
    setEditingItemId(item.id);
    setEditName(item.name);
    setEditRoll(item.roll);
    setEditClass(item.sclass);
  };

  // SAVE EDIT
  const handleSaveItem = () => {
    if (!editName.trim() || !editRoll.trim() || !editClass.trim()) {
      alert("All fields are required.");
      return;
    }

    if (rollExists(editRoll.trim(), editingItemId)) {
      alert("Roll number must be unique!");
      return;
    }

    const updated = items.map((item) =>
      item.id === editingItemId
        ? {
            ...item,
            name: editName.trim(),
            roll: editRoll.trim(),
            sclass: editClass.trim(),
          }
        : item
    );

    setItems(updated);

    setEditingItemId(null);
    setEditName("");
    setEditRoll("");
    setEditClass("");
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditName("");
    setEditRoll("");
    setEditClass("");
  };

  // DELETE
  const handleDeleteItem = (itemId) => {
    const updated = items.filter((item) => item.id !== itemId);
    setItems(updated);

    if (editingItemId === itemId) {
      handleCancelEdit();
    }
  };

  // REAL TIME SEARCH
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <br />

      {/* ADD FORM */}
      <div className="container">
        <h2>Student Management</h2>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Roll No: </label>
          <input
            type="text"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />

          <label>Class: </label>
          <input
            type="text"
            value={sclass}
            onChange={(e) => setSclass(e.target.value)}
          />

          <button className="btn btn-success" type="submit">
            Add Student
          </button>
        </form>
      </div>

      <br />

      {/* TABLE */}
      <div className="container">
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Class</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center">
                  No students found
                </td>
              </tr>
            ) : (
              filteredItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>

                  {/* NAME */}
                  <td>
                    {editingItemId === item.id ? (
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    ) : (
                      item.name
                    )}
                  </td>

                  {/* ROLL */}
                  <td>
                    {editingItemId === item.id ? (
                      <input
                        type="text"
                        value={editRoll}
                        onChange={(e) => setEditRoll(e.target.value)}
                      />
                    ) : (
                      item.roll
                    )}
                  </td>

                  {/* CLASS */}
                  <td>
                    {editingItemId === item.id ? (
                      <input
                        type="text"
                        value={editClass}
                        onChange={(e) => setEditClass(e.target.value)}
                      />
                    ) : (
                      item.sclass
                    )}
                  </td>

                  {/* ACTIONS */}
                  <td>
                    {editingItemId === item.id ? (
                      <>
                        <button className="btn btn-primary" onClick={handleSaveItem}>
                          Save
                        </button>
                        <button className="btn btn-secondary" onClick={handleCancelEdit}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleEditItem(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* SEARCH */}
      <div className="container">
        <form>
          <label>Search: </label>
          <input
            type="text"
            placeholder="Search by student name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default Crud;
