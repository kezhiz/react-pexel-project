import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Message：", formData);
    alert("Thank you for reaching out! Your message has been received.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Contact Me</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.group}>
          <label style={styles.label}>Name：</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="YourName"
            style={styles.input}
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Email：</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@email.com"
            style={styles.input}
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Content：</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Enter your message..."
            style={styles.textarea}
          />
        </div>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </section>
  );
}

// 快速內聯樣式，你也可以自行改成 CSS Modules 或 Tailwind
const styles = {
  section: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "sans-serif",
  },
  title: { textAlign: "center", color: "#ffffff" },
  subtitle: { textAlign: "center", color: "#bbbbbb", marginBottom: "30px" },
  group: { marginBottom: "20px" },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    color: "#000000",
    boxSizing: "border-box",
    fontSize: "20px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    fontSize: "20px",
    color: "#000000",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    resize: "vertical",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#222425",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
