import { Header, SocialLinks, Footer } from "./components";
import Routes from "./routes";
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div className="App bg-slate-800 text-white min-h-screen h-screen ">
      <Header />
      <Routes />
      <SocialLinks />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
