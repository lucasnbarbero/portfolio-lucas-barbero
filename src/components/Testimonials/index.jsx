import React from 'react';
import './testimonials.css';

import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Tina Snow',
      avatar: AVTR1,
      testimonial:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officiis illum magni ex! Natus eveniet animi perferendis, porro nihil voluptatum aperiam culpa sed, accusantium maxime, libero dolore doloribus blanditiis assumenda?',
    },
    {
      id: 2,
      name: 'Shatta Wale',
      avatar: AVTR2,
      testimonial:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officiis illum magni ex! Natus eveniet animi perferendis, porro nihil voluptatum aperiam culpa sed, accusantium maxime, libero dolore doloribus blanditiis assumenda?',
    },
    {
      id: 3,
      name: 'Kwame Despite',
      avatar: AVTR3,
      testimonial:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officiis illum magni ex! Natus eveniet animi perferendis, porro nihil voluptatum aperiam culpa sed, accusantium maxime, libero dolore doloribus blanditiis assumenda?',
    },
    {
      id: 4,
      name: 'Nana Ama McBrown',
      avatar: AVTR4,
      testimonial:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officiis illum magni ex! Natus eveniet animi perferendis, porro nihil voluptatum aperiam culpa sed, accusantium maxime, libero dolore doloribus blanditiis assumenda?',
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={Pagination}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map(({ id, avatar, name, testimonial }) => (
          <SwiperSlide className="testimonial" key={id}>
            <div className="client__avatar">
              <img src={avatar} alt="Avatar One" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{testimonial}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
