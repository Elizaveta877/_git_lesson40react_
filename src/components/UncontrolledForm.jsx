import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    console.log("Дані неконтрольованої форми:", { name, email });
    alert(`Надіслано: ${name}, ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Неконтрольована форма</h2>

      <label>
        Ім’я:
        <input type="text" ref={nameRef} />
      </label>

      <br />

      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>

      <br />

      <button type="submit">Надіслати</button>
    </form>
  );
}

export default UncontrolledForm;