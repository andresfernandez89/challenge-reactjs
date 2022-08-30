import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import Title from "./Components/Title/Title";
import AddUser from "./pages/AddUser/AddUser";

function App() {
  return (
    <Container className={styles.app}>
      <Title />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
