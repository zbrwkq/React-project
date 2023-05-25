import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Rocket = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://api.spacexdata.com/v4/rockets";

        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.log(error);
        setData(null);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container my-3">
      {data !== null ? (
        <div className="row justify-content-around gy-5">
          {data.map((data) => (
            <div key={data.id} className="card col-5">
              <Link to={`${data.id}`}>
                <img
                  src={data.flickr_images[0]}
                  className="card-img-top"
                  alt={data.name}
                />
                <div className="card-body">
                  <p>{data.name}</p>
                  <p>
                    Hauteur: {data.height.meters}m<br />
                    diamètre: {data.diameter.meters}m<br />
                    masse: {data.mass.kg}kg
                  </p>
                  <p></p>
                  <p></p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Rocket;
