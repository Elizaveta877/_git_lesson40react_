import { useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    agree: false,
  });

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Дані контрольованої форми:", formData);
    alert(`Відправлено: ${formData.name}, ${formData.city}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Контрольована форма</h2>

      <label>
        Ім’я:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Місто:
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
        >
          <option value="">Оберіть країну</option>
          <option value="Kyiv">Україна</option>
          <option value="Odesa">Молдова</option>
          <option value="Lviv">Франція</option>
        </select>
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        Я погоджуюся з умовами
      </label>

      <br />

      <button type="submit">Надіслати</button>
    </form>
  );
}

export default ControlledForm;
