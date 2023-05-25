import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/layout";
import NoMatch from "../router/noMatch"
import History from "../components/pages/history";
import HistoryDetails from "../components/pages/historyDetails";
import Rocket from "../components/pages/rocket";
import RocketDetails from "../components/pages/rocketDetails";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/histoire" element={<History />}></Route>
          <Route path="/histoire/:id" element={<HistoryDetails />}></Route>
          <Route path="/rocket" element={<Rocket/>}></Route>
          <Route path="/rocket/:id" element={<RocketDetails/>}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routeur;
