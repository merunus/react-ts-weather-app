import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimationLayout } from "../components";
import { Paths } from "../models/paths";
import { DetailsPage, Home, TrackList } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AnimationLayout />}>
        <Route index element={<Home />} />
        <Route
          path={`${Paths.DetailsPage}:cityName/lat/:lat/lon/:lon`}
          element={<DetailsPage />}
        />
        <Route path={Paths.TrackList} element={<TrackList />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
