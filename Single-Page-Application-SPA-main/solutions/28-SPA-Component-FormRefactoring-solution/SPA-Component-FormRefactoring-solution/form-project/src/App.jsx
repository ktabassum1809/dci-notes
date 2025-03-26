import './App.css'

// In it's very simplest form, this is technically enough
// If the student does extra, such as creates state for the
// form inputs, that's better :)
function App() {
  function handleSubmit(e) {
      e.preventDefault()
      alert("Thank you!")
      e.target.reset()
  }

  return (
    <>
      <h1>Lead registration</h1>
      <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="NAME" required />
          <div class="flex">
              <input type="tel" name="tel" placeholder="PHONE" required />
              <select name="type" required>
                  <option value="" selected>TYPE</option>
                  <option value="PROSPECT">PROSPECT</option>
                  <option value="INTERNAL">INTERNAL</option>
                  <option value="DIRECT">DIRECT</option>
              </select>
          </div>
          <input name="email" type="email" placeholder="EMAIL ADDRESS" />
          <input name="code" type="number" placeholder="CODE" />
          <button>Submit</button>
      </form>
    </>
  )
}

export default App
