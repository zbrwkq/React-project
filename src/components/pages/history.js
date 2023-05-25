import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <div className="list-group">
        {data != null
          ? data.map((data) => (
              <Link to={`${data.id}`} key={data.id} className="list-group-item">
                {data.title}
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default History;
