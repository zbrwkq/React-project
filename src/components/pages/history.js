import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { fetchData, formatDate } from "../../utils/fonctions";

const History = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const q = fetchData("history");
    q.then((res) => {
        if(res.status === 200){
            setData(res.data);
        }else{
          toast.error(`Une erreur s'est produite : ${res.message}`);
        }
    });
  }, []);
  return (
    <div className="container my-3">
      <ToastContainer />
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
