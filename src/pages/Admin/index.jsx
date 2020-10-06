import * as React from "react";
import { connect } from "react-redux";
import firebase from "firebase/app";
import DataTable from "../../components/AdminComponent/DataTable";
import { Button } from "../../components/Bootstrap";
import { queryAllDatabase } from "../../redux/Database/actions";
import "./styles.scss";

class Admin extends React.Component {
  componentDidMount() {
    this.props.queryAllDatabase();
  }

  logOut = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div className="Admin">
        <Button onClick={this.logOut}>LOG OUT</Button>
        <DataTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  database: state.database,
});

export default connect(mapStateToProps, { queryAllDatabase })(Admin);
