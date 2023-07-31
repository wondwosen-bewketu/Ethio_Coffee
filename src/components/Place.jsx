import React, { useState } from "react";
import data from '../json/data.json';
import { Fade } from 'react-reveal';

const Place = () => {
  const [selectedImage, setSelectedImage] = useState(data.places[0].imageUrl);

  return (
    <section className="place section" id="place">
      <div className="place__container container">
        <Fade bottom>
          <h2 className="section__title">
            Make Yourself Feel Good With <br />
            Our Comfy Facilities
          </h2>
        </Fade>

        <div className="place__content grid">
          <div className="place__images">
            <Fade left>
              <img
                src={selectedImage}
                alt=""
                className="place__img-big"
              />
            </Fade>
            <div className="place__img-smalls">
              {data.places.map((place, index) => (
                <Fade key={index} bottom delay={100 * index}>
                  <img
                    src={place.imageUrl}
                    alt=""
                    onClick={() => setSelectedImage(place.imageUrl)}
                    className={`place__img-small ${selectedImage === place.imageUrl && 'active'}`}
                  />
                </Fade>
              ))}
            </div>
          </div>

          <div className="place__data">
            <Fade right>
              <h2 className="place__title">Find a Place You Love</h2>
            </Fade>
            <Fade right delay={300}>
              <p className="place__description">
                We provide the best place to stay productive <br />
                and focused with good vibes and beautiful design.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Place;
