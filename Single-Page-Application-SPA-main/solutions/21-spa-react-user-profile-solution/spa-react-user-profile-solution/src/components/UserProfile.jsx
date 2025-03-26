function UserProfile({ name, age, location }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h1 className="card-title">{name}</h1>
        <p className="card-text">Age: {age}</p>
        <p className="card-text">
          Location: {location ? location : "Location Unknown"}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
