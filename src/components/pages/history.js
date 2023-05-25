import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/fonctions";

const History = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://api.spacexdata.com/v4/history";

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
      <h1>Archive des évènements</h1>
      <div className="list-group mt-3">
        {data != null
          ? data.map((data) => (
              <Link
                to={`${data.id}`}
                key={data.id}
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                {data.title}
                <span>{formatDate(data.event_date_unix)}</span>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default History;
