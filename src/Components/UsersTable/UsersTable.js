import data from "../../db/data";
import Table from "react-bootstrap/Table";
import styles from "./UsersTable.module.scss";

function UsersTable() {
  return (
    <Table className={styles.table} striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Career</th>
          <th>hobbie</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, index) => {
          return (
            <tr key={index}>
              <td>{d.nombre}</td>
              <td>{d.edad}</td>
              <td>{d.carrera}</td>
              <td>{d.hobbie}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default UsersTable;
