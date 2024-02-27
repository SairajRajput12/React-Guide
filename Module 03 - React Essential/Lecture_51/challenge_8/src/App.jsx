export const user = {
  name: '',
};

/*
  Your task is to edit the <button> in the App component such that the already defined handleCreateUser function is called with a value for name.
  So you must not hard-code the value that should be assigned to user.name in the handleCreateUser function but instead pass it as a value for the name parameter when a click event on the <button> occurs.
  You don't have to care about any value that might be entered into the <input> field - it's just there for decoration purposes.
*/

function App() {
  // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
  function handleCreateUser(name) {
    user.name = name;
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
        <input type="text" />
      </p>

      <p id="actions">
        <button onClick={() => {handleCreateUser('sairaj')}}>Create User</button>
      </p>
    </div>
  );
}

export default App;
