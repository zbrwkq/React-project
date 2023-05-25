import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/layout";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routeur;
