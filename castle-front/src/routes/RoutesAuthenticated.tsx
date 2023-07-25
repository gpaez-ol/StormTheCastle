

import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { FullPageLoader } from "../shared";
import { MainLayout } from "../layout";
import { Home, About } from "../modules";
import { ArtistHome } from "modules/home/pages/ArtistHome";



function RoutesAuthenticated() {
    return (
        <React.Suspense fallback={<FullPageLoader />}>
            <Routes>
                <Route
                    path="*"
                    element={
                        <MainLayout>
                            <Routes>
                                <Route path="/home" element={<ArtistHome />} />
                                <Route path="/about" element={<About />} />
                                <Route path="*" element={<Navigate to="/home" />} />
                            </Routes>
                        </MainLayout>
                    }
                />
            </Routes>
        </React.Suspense>
    );
}

export { RoutesAuthenticated };
