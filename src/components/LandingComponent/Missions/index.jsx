import React from "react";
import MissionCard from "./MissionCard";
import member from "../../../assets/2_Missions/HMCWeb_Icon_03.png";
import school from "../../../assets/2_Missions/HMCWeb_Icon_02.png";
import partner from "../../../assets/2_Missions/HMCWeb_Icon_01.png";
import "./styles.scss";
import Divider from "../Divider";

const Missions = () => {
  const missionsData = [
    {
      title: "MEMBER",
      content:
        "HMC xây dựng một môi trường làm việc chuyên nghiệp, năng động và sáng tạo, tạo cơ hội cho các thành viên học hỏi, rèn luyện và phát triển các kỹ năng. Không chỉ là học hỏi mà HMC còn là nơi để các bạn được thoải mái được là chính bản thân mình.",
      icon: member,
    },
    {
      title: "SCHOOL",
      content:
        "HMC góp phần xây dựng và quảng bá hình ảnh Trường Đại học Bách khoa Hà Nội đến với các bạn sinh viên trong và ngoài trường, đặc biệt là xây dựng tầm ảnh hưởng trong khu vực Bách Kinh Xây. Góp phần tạo góc nhìn tích cực của dư luận về hình ảnh sinh viên Bách Khoa năng động và chuyên nghiệp trong thời đại mới",
      icon: school,
    },
    {
      title: "PARTNER",
      content:
        "Đối với đối tác, HMC giúp xây dựng kịch bản, tạo ra những bộ ảnh chất lượng và video chuyên nghiệp, giúp nâng tầm giá trị thương hiệu, truyền tải và lan tỏa những thông điệp, khoảnh khắc ý nghĩa nhất đến với cộng đồng.",
      icon: partner,
    },
  ];
  return (
    <div className="Missions" id="missions">
      <Divider />
      <div className="Session">
        <h2>MISSIONS</h2>
      </div>
      <div className="CardContainer">
        {missionsData.map((mission, index) => (
          <MissionCard
            title={mission.title}
            content={mission.content}
            icon={mission.icon}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Missions;
