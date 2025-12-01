import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Домашнє завдання: форми та запит до сервера</h1>

      <ControlledForm />

      <hr />

      <UncontrolledForm />

      <hr />

      <UsersList />
    </div>
  );
}

export default App;
