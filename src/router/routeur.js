import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/layout";
import NoMatch from "../router/noMatch"
import History from "../components/pages/history";
import HistoryDetails from "../components/pages/historyDetails";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/histoire" element={<History />}></Route>
          <Route path="/histoire/:id" element={<HistoryDetails />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routeur;
