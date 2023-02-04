import React, { Fragment, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import App from "./App";

import Header from "./components/Header/Header";
import Loader from "./UI/Loader/Loader";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./pages/Gallery/VideoPlayer";

const Gallery = React.lazy(() => import("./pages/Gallery/Gallery"))
const CulturalDetail = React.lazy(() => import("./pages/CulturalDetail/CulturalDetail"))
const TechnicalDetail = React.lazy(() => import("./pages/TechnicalDetail/TechnicalDetail"))
const HackathonDetail = React.lazy(() => import("./pages/HackathonDetail/HackathonDetail"))
const TalkDetail = React.lazy(() => import("./pages/TalkDetail/TalkDetail"))
const Cultural = React.lazy(() => import("./pages/Cultural/Cultural"))
const Technical = React.lazy(() => import("./pages/Technical/Technical"))
const Hackathon = React.lazy(() => import("./pages/Hackathon/Hackathon"))
const Games = React.lazy(() => import("./pages/Games/Games"))
const Talk = React.lazy(() => import("./pages/Talk/Talk"))
const GamesDetail = React.lazy(() => import("./pages/GamesDetail/GamesDetail"))
const EventPage = React.lazy(() => import("./pages/EventPage/EventPage"))
const Tickets = React.lazy(() => import("./pages/Tickets/Tickets"))
const MBA = React.lazy(() => import("./pages/MBA/MBA"));

const MyRoutes = () => {
  return (
    <Fragment>
      <Header />
      <main>
      <Suspense fallback={<Loader />}>
      <Routes>
          <Route path="/home" element={<App />} />
          <Route path="/" element={<Navigate to="home" />} />
          <Route exact path="/events/*" element={<EventPage />}>
            <Route exact path="cs" element={<Cultural />} />
            <Route exact path="entc" element={<Technical />} />
            <Route exact path="civil" element={<Hackathon />} />
            <Route exact path="mechanical" element={<Games />} />
            <Route path="mca" element={<Talk />} />
            <Route path="mba" element={<MBA />} />
          </Route>
          <Route path="/events" element={<Navigate to="cs" />} />
          <Route path="/teasers" element={<Gallery />} />
          <Route path="/teasers/watch/:id" element={<VideoPlayer />} />
          <Route path="/events/cs/:id" element={<CulturalDetail />} />
          <Route path="/events/entc/:id" element={<TechnicalDetail />} />
          <Route path="/events/civil/:id" element={<HackathonDetail />} />
          <Route path="/events/mechanical/:id" element={<GamesDetail />} />
          <Route path="/events/mca/:id" element={<TalkDetail />} />

          <Route path="/tickets" element={<Tickets />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
};

export default MyRoutes;
