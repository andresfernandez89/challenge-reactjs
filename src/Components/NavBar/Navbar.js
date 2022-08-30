import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <Nav
      className={`${"justify-content-center"} ${styles.navbar}`}
      variant="pills"
      defaultActiveKey="/home"
    >
      <Nav.Item>
        <NavLink to="/">
          {({ isActive }) => (
            <Button
              className={isActive ? styles.nav : undefined}
              variant={isActive ? "primary" : "secondary"}
            >
              Home
            </Button>
          )}
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/addUser">
          {({ isActive }) => (
            <Button
              className={isActive ? styles.nav : undefined}
              variant={isActive ? "primary" : "secondary"}
            >
              Add User
            </Button>
          )}
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
