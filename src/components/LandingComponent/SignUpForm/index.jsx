import * as React from "react";
import { connect } from "react-redux";
import Input from "../../../elements/Input";
import { signUp } from "../../../redux/SignUp/actions";
import img from "../../../assets/5_PopUpForm/placeholderImage.png";
import next from "../../../assets/5_PopUpForm/HMCWeb_NextB.png";
import prev from "../../../assets/5_PopUpForm/HMCWeb_PrevB.png";
import send from "../../../assets/5_PopUpForm/HMCWeb_SendB.png";
import GradeButton from "../../../elements/GradeButton";
import PositionButton from "../../../elements/PositionButton";
import { Alert } from "../../Bootstrap";
import "./styles.scss";

const inputs = [
  {
    label: "1. Họ và tên của bạn?*",
    name: "Name",
    placeholder: "(Họ và tên)",
    type: "text",
    required: true,
  },
  {
    label: "2. Số điện thoại liên lạc?*",
    name: "PhoneNumber",
    placeholder: "(Số điện thoại)",
    type: "tel",
    required: true,
  },
  {
    label: "3. Link facebook của bạn?*",
    name: "Facebook",
    placeholder: "(Link facebook)",
    type: "text",
    required: true,
  },
  {
    label: "4. Địa chỉ email liên lạc?*",
    name: "Email",
    placeholder: "(Email)",
    type: "email",
    required: true,
  },
];

const TechnicalPositions = [
  {
    label: "Photographer",
    value: "KT_Photographer",
  },
  {
    label: "Cameraman",
    value: "KT_Cameraman",
  },
  {
    label: "Designer",
    value: "KT_Designer",
  },
  {
    label: "Artist",
    value: "KT_Artist",
  },
  {
    label: "Animator",
    value: "KT_Animator",
  },
  {
    label: "Editor",
    value: "KT_Editor",
  },
];

const MediaPositions = [
  {
    label: "Media",
    value: "TT_Media",
  },
  {
    label: "Content",
    value: "TT_Content",
  },
];

const ForeignAffairPositions = [
  {
    label: "Đối Ngoại",
    value: "DN_DOINGOAI",
  },
];

class SignUpForm extends React.Component {
  info = {
    Name: "",
    Facebook: "",
    Grade: "",
    Email: "",
    Exp: "",
    Confide: "",
    KT: " ",
    TT: " ",
    DN: " ",
    PhoneNumber: "",
  };
  constructor(props) {
    super(props);

    this.state = {
      isFirstForm: true,
      clear: false,
      isValidate: true,
    };

    this.positionButton1 = React.createRef();
    this.positionButton2 = React.createRef();
    this.positionButton3 = React.createRef();
  }

  handlePositionSelect = (name, value) => {
    try {
      if (this.info[name].includes(value)) {
        this.info[name] = this.info[name].replace(value, " ");
      } else {
        this.info[name] += ` ${value}`;
      }
      this.info[name] = this.info[name].trim();
    } catch (error) {
      console.log(error);
    }
  };

  handleInfo = (info) => {
    const position = `${info.KT} ${info.TT} ${info.DN}`;
    const finalInfo = {
      Name: info.Name.trim(),
      Facebook: info.Facebook.trim(),
      Grade: info.Grade.trim(),
      Email: info.Email.trim(),
      PhoneNumber: info.PhoneNumber.trim(),
      position: position.replace(/  +/g, " ").trim(),
      Exp: info.Exp,
      Confide: info.Confide,
    };
    return finalInfo;
  };

  onChange = (event) => {
    this.info[event.target.name] = event.target.value;
  };

  onSubmit = (event) => {
    event.preventDefault();
    const finalInfo = this.handleInfo(this.info);
    if (
      finalInfo.Name === "" ||
      finalInfo.Facebook === "" ||
      finalInfo.Grade === "" ||
      finalInfo.Email === "" ||
      finalInfo.position === "" ||
      finalInfo.PhoneNumber === ""
    ) {
      this.setState({ isValidate: false });
    } else {
      this.props.signUp(this.handleInfo(this.info));
      this.info = {
        Name: "",
        Facebook: "",
        Grade: "",
        Email: "",
        Exp: "",
        Confide: "",
        KT: " ",
        DS: " ",
        TT: " ",
        DN: " ",
        PhoneNumber: "",
      };
      this.setState({ clear: !this.state.clear, isValidate: true });
    }
  };

  handleRadioSelect = (name, value) => {
    this.info[name] = value;
  };

  toggleSecondForm = () => {
    this.setState({ isFirstForm: !this.state.isFirstForm });
  };

  renderFirstForm = () => (
    <div className="SubForm">
      {inputs.map((input, index) => (
        <Input
          label={input.label}
          name={input.name}
          placeholder={input.placeholder}
          key={index}
          type={input.type}
          onChange={this.onChange}
          required={input.required}
          value={this.info[input.name]}
        />
      ))}
      <div className="GroupButton">
        <GradeButton
          handleRadioSelect={this.handleRadioSelect}
          onChange={this.onChange}
          value={this.info.Grade}
        />
        <div className="NextButton" onClick={this.toggleSecondForm}>
          <img src={next} alt="nextButton" />
        </div>
      </div>
    </div>
  );

  renderSecondForm = () => (
    <div className="SubForm">
      <div className="PositionsContainer">
        <label>
          6. Vị trí ứng tuyển của bạn?*{" "}
          <span className="note">(Tối đa 02 vị trí/ban)</span>
        </label>
        <div className="PositionGroup">
          <PositionButton
            positions={TechnicalPositions}
            handlePositionSelect={this.handlePositionSelect}
            name="KT"
            text="Ban kỹ thuật"
            clear={this.state.clear}
            selectValue={this.info.KT}
          />
          <PositionButton
            positions={MediaPositions}
            handlePositionSelect={this.handlePositionSelect}
            name="TT"
            text="Ban truyền thông"
            clear={this.state.clear}
            selectValue={this.info.TT}
          />
          <PositionButton
            positions={ForeignAffairPositions}
            handlePositionSelect={this.handlePositionSelect}
            name="DN"
            text="Ban đối ngoại"
            clear={this.state.clear}
            selectValue={this.info.DN}
          />
        </div>
      </div>
      <Input
        label="7. Kinh nghiệm của bạn trong vị trí ứng tuyển?"
        name="Exp"
        placeholder="(Ví dụ: Đường dẫn sản phẩm mà bạn đã từng thực hiện)"
        type="text"
        onChange={this.onChange}
        value={this.info.Exp}
      />
      <Input
        label="8. Bạn có tâm sự gì với HMC không?"
        name="Confide"
        placeholder="(Nhập câu trả lời ở đây)"
        type="textarea"
        onChange={this.onChange}
        value={this.info.Confide}
      />
      <div className="ControlButtons">
        <div className="Button" onClick={this.toggleSecondForm}>
          <img src={prev} alt="nextButton" />
        </div>
        <div className="Button" onClick={this.onSubmit}>
          <img src={send} alt="nextButton" />
        </div>
      </div>
      {!this.state.isValidate && (
        <Alert variant="danger">
          Hình như bạn chưa chọn gì đó!!! Kiểm tra lại nào
        </Alert>
      )}
      {this.props.signUpSuccess === true && (
        <Alert variant="success">
          Thành công rồi!!! Bọn mình sẽ gửi kết quả trong thời gian sớm nhất.
          Cảm ơn bạn nhiều.
        </Alert>
      )}
      {this.props.signUpSuccess === false && (
        <Alert variant="success">
          Hình như có lỗi gì đó. Hãy báo lại với bọn mình qua fanpage nhé. Cảm
          ơn bạn nhiều
        </Alert>
      )}
    </div>
  );

  render() {
    return (
      <div className="FormContainer" style={this.props.style}>
        <div className="Form">
          <div className="FormImage">
            <img src={img} alt="form" />
          </div>
          <div className="FormContent">
            <div className="title">
              <h2>ĐĂNG KÝ ỨNG TUYỂN HUST MEDIA CLUB</h2>
              <div className="current-bar">
                <div
                  className={`moveBar ${
                    this.state.isFirstForm !== true && "inSecondForm"
                  }`}
                ></div>
              </div>
            </div>
            {this.state.isFirstForm
              ? this.renderFirstForm()
              : this.renderSecondForm()}
          </div>
        </div>
        <button onClick={this.props.toggleForm} className="Close">
          <i className="fas fa-times-circle"></i>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { signUpSuccess: state.signUp.success };
};

export default connect(mapStateToProps, { signUp })(SignUpForm);
