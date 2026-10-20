import { useState } from "react";
import FormStatus from "./FormStatus";
function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    setErrors(newErrors);
    setSuccessMessage("");

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage(
        `Form submitted successfully for ${name.trim()}`
      );
    }
  }
  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>User Registration</h2>

      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && <p role="alert">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <p role="alert">{errors.email}</p>}
      </div>

      <button type="submit">Submit</button>

      <FormStatus message={successMessage} />
    </form>
  );
}
export default UserForm;