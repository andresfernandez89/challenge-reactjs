import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import styles from "./UserCard.module.scss";

function UserCard({ data }) {
  return (
    <div className={styles.cardContainer}>
      <ListGroup className="mx-auto text-start">
        <ListGroup.Item>
          <b>Nombre:</b> {data.name}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Edad:</b> {data.age}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Carrera:</b> {data.career}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Hobbie:</b> {data.hobbie}
        </ListGroup.Item>
      </ListGroup>
      <Button
        className={styles.btn}
        variant="warning"
        type="button"
        onClick={data.handleBtn}
      >
        Edit
      </Button>
    </div>
  );
}

export default UserCard;
