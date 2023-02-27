import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import NoMatch from "./pages/NoMatch";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="test" element={<div>Test Route</div>} />

          {/* catch all for 404 */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
