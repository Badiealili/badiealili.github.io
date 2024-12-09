import Home from "./pages/Home";
import { loader as homeLoader } from "./pages/Home";

export async function loader() {
    return homeLoader();
}

export default function App() {
    return <Home />;
}
