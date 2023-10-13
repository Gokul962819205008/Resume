import React from "react";
import { Options } from "./Options";

export const Profile = ({
  name,
  ocupation,
  location,
  email,
  telephone,
  image,
}) => {
  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <img src={image} alt="profile_image" className="home__img" />
          <h1 className="home__title">
            <strong>{name}</strong>
          </h1>
          <h3 className="home__profession">{ocupation}</h3>
        </div>

        <div className="home__address bd-grid">
          <span className="home__information">
          <a
    href={`https://www.google.com/maps/place/${encodeURIComponent(location)}`}
    target="_blank"
    rel="noopener noreferrer" >
            <i className="bx bx-map home__icon" /> {location}
          </a>
          </span>
          <span className="home__information">
          <a href={`mailto:${email}`}>
            <i className="bx bx-envelope home__icon" /> {email}
          </a>
          </span>
          <span className="home__information">
          <a href={`tel:${telephone}`}>
            <i className="bx bx-phone home__icon" /> {telephone}
          </a>
          </span>
        </div>
      </div>
      <Options />
    </section>
  );
};
