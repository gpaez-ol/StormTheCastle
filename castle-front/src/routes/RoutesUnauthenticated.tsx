
import { About, Home, Login } from "modules";
import { Navigate, Route, Routes } from "react-router-dom";

function RoutesUnauthenticated() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
}

export { RoutesUnauthenticated };
