import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const HistoryDetails = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://api.spacexdata.com/v4/history/" + id;

        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.log(error);
        setData(null);
      }
    };
    fetchData();
  }, [id]);

  const formatDate = (date) => {
    var d = new Date(0);
    d.setUTCSeconds(date);
    return (
      (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) +
      "/" +
      (d.getMonth() < 10 ? "0" + d.getMonth() : d.getMonth()) +
      "/" +
      d.getFullYear()
    );
  };
  return (
    <div className="container my-3">
        <Link to="/histoire" className="link-secondary link-underline-opacity-0 link-underline-opacity-100-hover">Retour</Link>
      {data !== null ? (
        <>
          <h1>{data.title}</h1>
          <h2>{formatDate(data.event_date_unix)}</h2>
          <p>{data.details}</p>
          {data.links !== null ? (
            <p>
              Article associé :{" "}
              <a href={data.links.article} target="_blank" rel="noreferrer">
                {data.links.article}
              </a>
            </p>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default HistoryDetails;
