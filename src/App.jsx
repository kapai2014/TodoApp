function App() {
  return (
    <center class="todo-container">
      <h1>Todo App</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter your Todo here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button className="btn btn-success">Add</button>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            Read a Book
          </div>
          <div class="col-4">
            17-11-2026
          </div>
          <div class="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            Binge Watching
          </div>
          <div class="col-4">
            16-11-2026
          </div>
          <div class="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
