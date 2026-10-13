
function UserProfile({ name, role, department }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Department: {department}</p>
    </div>
  );
}

export default UserProfile;
