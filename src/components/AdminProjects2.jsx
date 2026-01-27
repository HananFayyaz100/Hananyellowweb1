import { useEffect, useState } from "react";
import axios from "axios";

const AdminProjects2 = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  const loadProjects = async () => {
    const res = await axios.get("http://localhost:5000/api/projects2");
    setProjects(res.data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/projects2/admin", form);
    setForm({ title: "", description: "", image: "" });
    loadProjects();
  };

  const deleteProject = async (id) => {
    await axios.delete(`http://localhost:5000/api/projects2/admin/${id}`);
    loadProjects();
  };

  return (
    <div className="bg-white">
      <h1 className="text-center text-2xl font-bold mb-4">Admin – My Creation & Design Template</h1>

      <form className="items-center mx-auto w-[50%]" onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
        <input placeholder="Image URL" onChange={e => setForm({ ...form, image: e.target.value })} />
        <button>Add</button>
      </form>

      {projects.map(p => (
        <div className="p-4 border border-green-400 w-[40%] mx-auto my-2" key={p._id}>
          <h4 className="text-lg font-black font-semibold">Title: {p.title}</h4>
          <button className="text-red-600" onClick={() => deleteProject(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminProjects2;
