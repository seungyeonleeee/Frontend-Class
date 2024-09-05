import "./App.css";
// 1
import Header from "./components/Header";
// 2
import TodoEditor from "./components/TodoEditor";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <h2>Todo List</h2>
    </div>
  );
}

export default App;
