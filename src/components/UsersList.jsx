import { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Помилка запиту");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        setError(err.message || "Щось пішло не так");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Завантаження даних…</p>;
  }

  if (error) {
    return <p>Помилка: {error}</p>;
  }

  return (
    <div>
      <h2>Список користувачів</h2>

      {users.length === 0 ? (
        <p>Немає даних.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UsersList;
