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
import TableCell from "../TableCell";
import "./styles.scss";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      exportData: [],
      user: null,
    };
  }

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
    const options = (
      <Popover id="popover-basic">
        <Popover.Content
          onClick={this.convertJsonToXlsx.bind(this, this.props.database)}
        >
          All
        </Popover.Content>
        <Popover.Content
          onClick={this.convertJsonToXlsx.bind(this, this.props.technicalGroup)}
        >
          Ban Kỹ Thuật
        </Popover.Content>
        <Popover.Content
          onClick={this.convertJsonToXlsx.bind(this, this.props.mediaGroup)}
        >
          Ban Truyền Thông
        </Popover.Content>
        <Popover.Content
          onClick={this.convertJsonToXlsx.bind(
            this,
            this.props.foreignAffairGroup
          )}
        >
          Ban Đối Ngoại
        </Popover.Content>
      </Popover>
    );

    return (
      <div className="DataTable">
        <div className="Table">
          <TableCell label="Tổng đơn" value={this.props.database.length} />
          <TableCell
            label="Ban kỹ thuật"
            value={this.props.technicalGroup.length}
          />
          <TableCell
            label="Ban truyền thông"
            value={this.props.mediaGroup.length}
          />
          <TableCell
            label="Ban đối ngoại"
            value={this.props.foreignAffairGroup.length}
          />
          <div className="Download">
            <OverlayTrigger trigger="focus" placement="right" overlay={options}>
              <Button className="export">Export</Button>
            </OverlayTrigger>
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
