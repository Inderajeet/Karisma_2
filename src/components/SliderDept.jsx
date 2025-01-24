import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fetchAllJson } from "../utils/fetchAllJson"; // Import the utility function
import { useTranslation } from "react-i18next";

const SliderDept = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({ styles: {}, images: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await fetchAllJson(); // Fetch styles and images
        setData(allData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return ;
  if (error) return ;

  const { department } = data.styles;
  const { cards } = department;
  const { departmentImg } = data.images;

  const departments = t("departments", { returnObjects: true });
  const isRTL = i18n.dir() === "rtl";

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={24}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        reverseDirection: isRTL, // Reverse autoplay direction for RTL
      }}
      dir={isRTL ? "rtl" : "ltr"} // Set the HTML direction for Swiper
      style={{
        direction: isRTL ? "rtl" : "ltr", // Ensure CSS direction is applied
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
        1300: { slidesPerView: 3 },
      }}
      modules={[Autoplay]}
    >
      {departments.map((service, index) => (
        <SwiperSlide key={index}>
          <div
            className="service-inner"
            style={{ backgroundColor: cards["background-color"] }}
          >
            <div className="entry-title">
              <h3 className="post-title-head">
                <a
                  href={service.link}
                  className="post-title"
                  style={{
                    color: cards["heading-color"],
                    fontSize: cards["heading-size"],
                  }}
                >
                  {service.title}
                </a>
              </h3>
            </div>
            <div
              className="post-excerpt"
              style={{
                color: cards["desc-color"],
                fontSize: cards["desc-size"],
              }}
            >
              {service.description}
            </div>
            <div className="post-thumb">
              <a href={service.link} className="post-image-link">
                <img
                  src={Object.values(departmentImg)[index]}
                  alt={service.title}
                  className="img-fluid squared"
                />
              </a>
            </div>
            <div className="bottom-meta clearfix">
              <ul className="nav bottom-meta-list meta-left">
                <li>
                  <div>
                    <a
                      href={service.link}
                      className="homefont"
                      style={{
                        color: cards["button-text-color"],
                        fontWeight: "600",
                        fontSize: cards["button-text-size"],
                      }}
                    >
                      VIEW DETAILS
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderDept;
