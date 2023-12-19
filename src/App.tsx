import { Route, Routes } from "react-router-dom";
import "./App.css";

// Component imports
import Navbar from "./components/partials/Navbar";
import ForumList from "./components/Content/ForumList";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Contact from "./components/Contact";
import Forum from "./components/Content/Forum";
import Footer from "./components/partials/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <>
          <Navbar contact="contact" />
          <ForumList />
        </> } />
        <Route path="/login" element={ <>
          <Navbar contact="" />
        <Login /></> } />
        <Route path="/register" element={ <>
          <Navbar contact="" />
          <Register /></>} />
        <Route path="/contact" element={ <><Navbar contact="contact" /><Contact /><Footer /></> } />
        <Route path="/forum/:forumId" element={ <><Navbar contact="" /><Forum /><Footer /></> } />
      </Routes>
    </>
  );
}

export default App;
