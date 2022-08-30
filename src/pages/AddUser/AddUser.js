import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import styles from "./AddUser.module.scss";
import { useState, useEffect } from "react";
import UserCard from "../../Components/UserCard/UserCard";

function AddUser() {
  const [name, setName] = useState();
  const [career, setCareer] = useState();
  const [age, setAge] = useState();
  const [hobbie, setHobbie] = useState();
  const [count, setCount] = useState(0);
  const [statusField, setStatusField] = useState(true);

  useEffect(() => {
    console.log("Numero de actualizaciones: " + count);
  }, [count]);

  function handleBtn(e) {
    const formHtml = document.getElementsByClassName(styles.form)[0];
    if (statusField) {
      e.preventDefault();
      const { target } = e;
      setName(target.formName.value);
      setAge(target.formAge.value);
      setCareer(target.formCareer.value);
      setHobbie(target.formHobbie.value);
      formHtml.style.display = "none";
      setStatusField(false);
    } else {
      setCount(count + 1);
      setStatusField(true);
      formHtml.style.display = "block";
    }
  }

  return (
    <>
      <Form className={styles.form} onSubmit={handleBtn}>
        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className={styles.label}>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label className={styles.label}>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter your age" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="formCareer">
              <Form.Label className={styles.label}>Career</Form.Label>
              <Form.Control type="text" placeholder="Enter your career" />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="formHobbie">
              <Form.Label className={styles.label}>Hobbie</Form.Label>
              <Form.Control type="text" placeholder="Enter your hobbie" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="success" type="submit" className={`${styles.button}`}>
          Send
        </Button>
      </Form>
      {!statusField ? (
        <UserCard data={{ name, age, career, hobbie, handleBtn }} />
      ) : (
        ""
      )}
    </>
  );
}

export default AddUser;
