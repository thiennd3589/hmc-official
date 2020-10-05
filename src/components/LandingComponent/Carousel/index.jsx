import React, { useState } from "react";
import { Carousel } from "../../Bootstrap";
import Item from "./Item";
import img1 from "../../../assets/1_About_Us/img1.jpg";
import img2 from "../../../assets/1_About_Us/img2.jpg";
import img3 from "../../../assets/1_About_Us/img3.jpg";
import logo from "../../../assets/1_About_Us/logo.png";
import "./styles.scss";

const CarouselComp = () => {
  const [isHD, setHD] = useState(
    window.innerWidth / window.innerHeight >= 1920 / 1080
  );

  window.addEventListener("resize", () => {
    if (window.innerWidth / window.innerHeight < 1920 / 1080 && isHD === true) {
      setHD(false);
    } else if (
      window.innerWidth / window.innerHeight >= 1920 / 1080 &&
      isHD === false
    ) {
      setHD(true);
    }
  });

  return (
    <div className="Introduction">
      <Carousel >
        <Carousel.Item>
          <Item
            background={img1}
            title="ABOUT US"
            describe="Câu lạc bộ truyền thông trường Đại học Bách Khoa Hà Nội - HUST Media Club được thành lập vào tháng 11 năm 2018. Câu lạc bộ không ngừng phấn đấu và cải thiện để trở thành tổ chức uy tín, một kênh thông tin hữu ích và có sức ảnh hưởng cao trong trường và khu vực Bách Kinh Xây. "
            image={logo}
            id="about-us"
            isHD={isHD}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Item
            background={img2}
            title="ATTRIBUTE"
            describe="Ở HMC, chúng tôi không ngừng phát triển và cải thiện các kĩ năng của bản thân để tạo ra các sản phẩm có chất lượng tốt hơn từng ngày. Với tính chuyên môn cao và sự sáng tạo, chúng tôi mong muốn các sản phẩm của mình không những đẹp về thẩm mĩ mà còn mang ý nghĩa sâu sắc đằng sau mỗi ấn phẩm chuyên nghiệp"
            id="attribute"
            isHD={isHD}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Item
            background={img3}
            title="CREATIVITY"
            describe="Sự sáng tạo không thể thiếu với một người làm truyền thông. Chúng tôi đề cao sự nhạy bén, nhanh nhạy trong quan sát và linh hoạt hành động, xử lý tình huống khéo léo. Một người làm truyền thông luôn nhảy số trong đầu với những ý tưởng đột phá nhưng vẫn phải giữ cho mình một cái đầu lạnh và một phong thái điềm tĩnh "
            id="creativity"
            isHD={isHD}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
