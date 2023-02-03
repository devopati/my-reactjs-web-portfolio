import "./testimonials.css";
import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "The end result of his work was a website that is attractive, organized and effective. Thanks to David for all of your hard work and support!",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "The reaction to our new web site has been overwhelmingly positive; as one commented the site is “FANTASTIC.” The same can be said for our view of David's work for us.",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "It is a distinct pleasure for me to recommend David to any and all interested parties. He Has been professional, comprehensive and competent throughout the process of our working together. We feel that we have established a relationship with him for years to come.",
  },
  {
    avatar: AVTR4,
    name: "Nana McBrown",
    review:
      "Since having our new website built by David, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. He worked closely with us to provide a site that met all of the criteria that we were looking for.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container tesimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__riview">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
