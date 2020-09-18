import * as React from "react";
import { connect } from "react-redux";
import DataTable from '../../components/AdminComponent/DataTable';
import { queryAllDatabase } from "../../redux/Database/actions";
import "./styles.scss";

class Admin extends React.Component {
  componentDidMount() {
    this.props.queryAllDatabase();
  }

  render() {
    return <div className="Admin">
      <DataTable />
    </div>;
  }
}

const mapStateToProps = (state) => ({
  database: state.database,
});

export default connect(mapStateToProps, { queryAllDatabase })(Admin);
