function FormStatus({ message }) {
  if (!message) {
    return null;
  }

  return <p role="status">{message}</p>;
}

export default FormStatus;