import Layout from "./routes/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Portfolio, Services } from "./routes/";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
