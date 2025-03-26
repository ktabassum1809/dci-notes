import UserProfile from "./components/UserProfile";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container mt-5">
      <UserProfile name="John Doe" age={28} location="San Francisco" />
      <UserProfile name="Jane Doe" age={24} />
    </div>
  );
}

export default App;
