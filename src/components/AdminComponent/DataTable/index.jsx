import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import XLSX from "xlsx";
import {
  database,
  technicalGroup,
  mediaGroup,
  foreignAffairGroup,
} from "../../../redux/Database/selector";
import { Button, Popover, OverlayTrigger } from "../../Bootstrap";
import Table from "../Table";
import "./styles.scss";

const DATA_TYPE = {
  ALL: "ALL",
  TECHNICAL: "TECHNICAL",
  MEDIA: "MEDIA",
  FOREIGNAFFAIR: "FOREIGNAFFAIR",
};

class DataTable extends React.Component {
  data;
  columnDef;
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      exportData: [],
      user: null,
      data: DATA_TYPE.ALL,
    };

    this.data = this.props.database ? this.props.database : [];
    this.columnDef = [];
  }

  shouldComponentUpdate(nextProps) {
    console.log(nextProps);
    if (nextProps !== this.props) {
      if (this.state.data !== DATA_TYPE.ALL) {
        return true;
      } else {
        this.data = nextProps.database;
        console.log(this.data);
        this.initColumnDef();
      }
    }
    return true;
  }

  initColumnDef = () => {
    this.columnDef = [
      {
        Header: "Name",
        accessor: "Name",
        Cell: ({ value }) => {
          return <span style={{ minWidth: "500px" }}>{value}</span>;
        },
      },
      {
        Header: "Facebook",
        accessor: "Facebook",
        Cell: ({ value }) => {
          return (
            <a href={value} target="_blank">
              <span>{value}</span>
            </a>
          );
        },
      },
      {
        Header: "Grade",
        accessor: "Grade",
        Cell: ({ value }) => {
          return <span>{value}</span>;
        },
      },
      {
        Header: "Email",
        accessor: "Email",
        Cell: ({ value }) => {
          return <span>{value}</span>;
        },
      },
      {
        Header: "PhoneNumber",
        accessor: "PhoneNumber",
        Cell: ({ value }) => {
          return <span>{value}</span>;
        },
      },
      {
        Header: "Position",
        accessor: "position",
        Cell: ({ value }) => {
          return <span>{value}</span>;
        },
      },
      {
        Header: "Exp",
        accessor: "Exp",
        Cell: ({ value }) => {
          return <span>{value}</span>;
        },
      },
      {
        Header: "Confide",
        accessor: "Confide",
        Cell: ({ value }) => {
          return (
            <OverlayTrigger
              trigger={["click", "hover"]}
              placement="left"
              overlay={
                <Popover id="popover-basic" placement="top">
                  <Popover.Content>{value}</Popover.Content>
                </Popover>
              }
            >
              <span className="Ellipsis">{value}</span>
            </OverlayTrigger>
          );
        },
      },
    ];
  };

  convertJsonToXlsx = (data) => {
    try {
      let workBook = XLSX.utils.book_new();
      workBook.Props = {
        Title: "Database",
        Subject: "Data",
        Author: "Thien",
        CreatedDate: new Date(),
      };

      workBook.SheetNames.push("Database");

      const workSheet = XLSX.utils.json_to_sheet(data);
      workBook.Sheets["Database"] = workSheet;
      const dataFile = XLSX.write(workBook, {
        bookType: "xlsx",
        type: "binary",
      });
      const buffer = new ArrayBuffer(dataFile.length);
      const viewer = new Uint8Array(buffer);
      for (let i = 0; i < dataFile.length; i++) {
        viewer[i] = dataFile.charCodeAt(i) & 0xff;
      }
      const blobFile = new Blob([buffer], { type: "application/xlsx" });
      const downloadUrl = URL.createObjectURL(blobFile);
      alert("Success");
      this.setState({ url: downloadUrl });
    } catch (error) {
      alert("Failure", error.message);
    }
  };

  render() {
    const filter = (
      <Popover id="popover-basic">
        <Popover.Content
          onClick={() => {
            this.data = this.props.database;
            this.initColumnDef();
            this.setState({ data: DATA_TYPE.ALL });
          }}
        >
          All
        </Popover.Content>
        <Popover.Content
          onClick={() => {
            this.data = this.props.technicalGroup;
            this.initColumnDef();
            this.setState({ data: DATA_TYPE.TECHNICAL });
          }}
        >
          Ban Kỹ Thuật
        </Popover.Content>
        <Popover.Content
          onClick={() => {
            this.data = this.props.mediaGroup;
            this.initColumnDef();
            this.setState({ data: DATA_TYPE.TECHNICAL });
          }}
        >
          Ban Truyền Thông
        </Popover.Content>
        <Popover.Content
          onClick={() => {
            this.data = this.props.foreignAffairGroup;
            this.initColumnDef();
            this.setState({ data: DATA_TYPE.TECHNICAL });
          }}
        >
          Ban Đối Ngoại
        </Popover.Content>
      </Popover>
    );

    return (
      <div className="DataTable">
        <div className="Data">
          <div className="Overview">
            <OverlayTrigger trigger="focus" placement="right" overlay={filter}>
              <Button className="export">Bộ lọc</Button>
            </OverlayTrigger>
            <div className="Detail">
              <Button
                className="export"
                onClick={() => {
                  this.data = this.props.database;
                  this.initColumnDef();
                  this.setState({ data: DATA_TYPE.ALL });
                }}
              >
                <span>{`Tổng đơn: ${
                  this.props.database && this.props.database.length
                }`}</span>
              </Button>
              <Button
                className="export"
                onClick={() => {
                  this.data = this.props.technicalGroup;
                  this.initColumnDef();
                  this.setState({ data: DATA_TYPE.TECHNICAL });
                }}
              >
                <span>
                  {`Ban kỹ thuật: ${
                    this.props.technicalGroup &&
                    this.props.technicalGroup.length
                  }`}
                </span>
              </Button>
              <Button
                className="export"
                onClick={() => {
                  this.data = this.props.mediaGroup;
                  this.initColumnDef();
                  this.setState({ data: DATA_TYPE.TECHNICAL });
                }}
              >
                <span>{`Ban truyền thông: ${
                  this.props.mediaGroup && this.props.mediaGroup.length
                }`}</span>
              </Button>
              <Button
                className="export"
                onClick={() => {
                  this.data = this.props.foreignAffairGroup;
                  this.initColumnDef();
                  this.setState({ data: DATA_TYPE.TECHNICAL });
                }}
              >
                <span htmlFor="">{`Ban đối ngoại: ${
                  this.props.foreignAffairGroup &&
                  this.props.foreignAffairGroup.length
                }`}</span>
              </Button>
            </div>
          </div>
          <Table columns={this.columnDef} data={this.data} />
          <div className="Download">
            <Button
              className="export"
              onClick={this.convertJsonToXlsx.bind(this, this.data)}
            >
              Export
            </Button>
            {this.state.url ? (
              <Button className="download">
                <a href={this.state.url} download="database.xlsx">
                  Download
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  database,
  technicalGroup,
  mediaGroup,
  foreignAffairGroup,
});

export default connect(mapStateToProps)(DataTable);
