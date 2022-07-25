import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Post from "./Post/Post";
import Family1 from "../../../assets/family1.png";
import Family2 from "../../../assets/family2.png";
import Family3 from "../../../assets/family3.png";
import Family4 from "../../../assets/family4.png";
import "./Slider-style.css";

function Slider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <Post image={Family1} title="Familia 1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            quod alias labore aperiam libero? At optio iusto doloremque?
            Sapiente, ab repellat sint ex iste voluptates id quae accusantium
            nobis deserunt. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eaque at ipsa, numquam ut esse odit doloremque amet facere
            saepe molestias dignissimos nobis quos quae et aliquam maxime sint
            architecto dolores! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ea tenetur explicabo soluta labore quis iure
            dolore minima, corporis earum, provident porro vitae aperiam
            voluptates veniam, facilis odio repellat ratione dolor.
          </Post>
        </SwiperSlide>
        <SwiperSlide>
          <Post image={Family2} title="Familia 2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            quod alias labore aperiam libero? At optio iusto doloremque?
            Sapiente, ab repellat sint ex iste voluptates id quae accusantium
            nobis deserunt. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eaque at ipsa, numquam ut esse odit doloremque amet facere
            saepe molestias dignissimos nobis quos quae et aliquam maxime sint
            architecto dolores! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ea tenetur explicabo soluta labore quis iure
            dolore minima, corporis earum, provident porro vitae aperiam
            voluptates veniam, facilis odio repellat ratione dolor.
          </Post>
        </SwiperSlide>
        <SwiperSlide>
          <Post image={Family3} title="Familia 3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            quod alias labore aperiam libero? At optio iusto doloremque?
            Sapiente, ab repellat sint ex iste voluptates id quae accusantium
            nobis deserunt. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eaque at ipsa, numquam ut esse odit doloremque amet facere
            saepe molestias dignissimos nobis quos quae et aliquam maxime sint
            architecto dolores! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ea tenetur explicabo soluta labore quis iure
            dolore minima, corporis earum, provident porro vitae aperiam
            voluptates veniam, facilis odio repellat ratione dolor.
          </Post>
        </SwiperSlide>
        <SwiperSlide>
          <Post image={Family4} title="Familia 4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            quod alias labore aperiam libero? At optio iusto doloremque?
            Sapiente, ab repellat sint ex iste voluptates id quae accusantium
            nobis deserunt. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eaque at ipsa, numquam ut esse odit doloremque amet facere
            saepe molestias dignissimos nobis quos quae et aliquam maxime sint
            architecto dolores! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ea tenetur explicabo soluta labore quis iure
            dolore minima, corporis earum, provident porro vitae aperiam
            voluptates veniam, facilis odio repellat ratione dolor.
          </Post>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
