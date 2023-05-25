import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const RocketDetails = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://api.spacexdata.com/v4/rockets/" + id;

        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.log(error);
        setData(null);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container my-3">
      <Link
        to="/rocket"
        className="link-secondary link-underline-opacity-0 link-underline-opacity-100-hover"
      >
        Retour
      </Link>
      {data !== null ? (
        <>
          <h1>{data.name}</h1>
          <h2>
            {data.company} - {data.country}
          </h2>
          <p>{data.description}</p>
          <p>
            Lien wikipedia: <a href={data.wikipedia}>{data.wikipedia}</a>
          </p>
          <div className="row mt-5">
            <div className="col-12 col-sm-4">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>

                  {data.flickr_images.slice(1).map((image, index) => (
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={index + 1}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={data.flickr_images[0]}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  {data.flickr_images.slice(1).map((image, index) => (
                    <div className="carousel-item" key={index}>
                      <img
                        src={image}
                        className="d-block w-100"
                        alt={data.name}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-8">
              <p>
                Premier lancé: {data.first_flight}
                <br />
                Coût par lancé: {data.cost_per_launch}$<br />
                Nombre d'étages: {data.stages}
                <br />
                Dimension: Hauteur: {data.height.meters}m - diamètre:{" "}
                {data.diameter.meters}m - masse: {data.mass.kg}kg
              </p>
            </div>
          </div>
          <div className="card mt-5 p-3">
            <b>Propulseur {data.engines.type}</b>
            <div className="row justify-content-beteween px-3 py-1">
              <p className="col-6">
                Nombre de propulseur: {data.engines.number}
                <br />
                Combustible 1: {data.engines.propellant_1}
                <br />
                Combustible 2: {data.engines.propellant_2}
                <br />
              </p>
              <p className="col-6">
                Poussée au niveau de la mer: {data.engines.thrust_sea_level.kN}
                kN
                <br />
                Poussée dans le vide: {data.engines.thrust_vacuum.kN}kN
                <br />
                Ratio poussée/poid: {data.engines.thrust_to_weight}
              </p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default RocketDetails;
