import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Todo from "./components/Todo";
import Note from "./components/Note";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  Component={Home}></Route>
        <Route path="/todo" Component={Todo}></Route>
        <Route path="/note" Component={Note}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
