import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Note from "./pages/Note";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/todo" Component={Todo}></Route>
          <Route path="/note" Component={Note}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
