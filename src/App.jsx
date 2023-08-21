import AllTodo from "./assets/pages/AllTodo"
import ActiveTodo from "./assets/pages/ActiveTodo"
import CompletedTodo from "./assets/pages/CompletedTodo"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, {useState} from "react"
// eslint-disable-next-line react-refresh/only-export-components
export const todoContext = React.createContext();
function App() {
  const [todos, setTodos] = useState([])
  return (
    <>
      <todoContext.Provider value={{todos,setTodos}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllTodo />} />
            <Route path="active" element={<ActiveTodo />} />
            <Route path="completed" element={<CompletedTodo />} />
          </Routes>
        </BrowserRouter>
      </todoContext.Provider>
    </>
  );
}

export default App
