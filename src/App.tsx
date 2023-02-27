import { User, onAuthStateChanged, getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { setUpFirebase } from "./lib/firebase";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import NoMatch from "./pages/NoMatch";
import { trackPageView } from "./util/analytics";

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();
  useEffect(() => {
    setUpFirebase();
    onAuthStateChanged(getAuth(), setUser);
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
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
