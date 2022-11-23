import Layout from "./routes/layout";
import { BrowserRouter } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Layout></Layout>
        </BrowserRouter>
    );
}

export default App;
