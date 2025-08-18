import React, { useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import CasinoReviews from "../pages/CasinoReviews";
import ContactPage from "../pages/ContactPage";
import Home from "../pages/Home";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CasinoBonusesPage from "../pages/CasinoBonusesPage";
import NoDepositBonusesPage from "../pages/NoDepositBonusesPage";
import FreeSpinsBonusesPage from "../pages/FreeSpinsBonusesPage";
import CasinoFreeBetsPage from "../pages/CasinoFreeBetsPage";
import AllCasinoReviews from "../pages/AllCasinoReviews";
import CasinoDays from "../pages/CasinoDays";
import Bet22 from "../pages/Bet22";
import OneXBET from "../pages/OneXBET";
import AllNewsStories from "../pages/AllNewsStories";
import NewsDetails from "../pages/NewsDetails";
import AllBlogs from "../pages/AllBlogs";
import BlogDetails from "../pages/BlogDetails";
import GuideDetails from "../pages/GuideDetails";
import AllGuides from "../pages/AllGuides";
import BaccaratGame from "../pages/BaccaratGame";
import BlackjackGame from "../pages/BlackjackGame";
import PokerGame from "../pages/PokerGame";
import DiceGame from "../pages/DiceGame";
import AllGames from "../pages/AllGames";

// Scroll handler
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/casino-reviews/:id" element={<CasinoReviews />} />
        <Route path="/casino-bonuses" element={<CasinoBonusesPage />} />
        <Route path="/no-deposit-bonuses" element={<NoDepositBonusesPage />} />
        <Route path="/free-spins" element={<FreeSpinsBonusesPage />} />
        <Route path="/free-bets" element={<CasinoFreeBetsPage />} />
        <Route path="/all-casino-reviews" element={<AllCasinoReviews />} />
        <Route path="/casino-days" element={<CasinoDays />} />
        <Route path="/22bet" element={<Bet22 />} />
        <Route path="/1xBET" element={<OneXBET />} />
        <Route path="/all-news-stories" element={<AllNewsStories />} />
        <Route path="/news/:category/:slug" element={<NewsDetails />} />
        <Route path="/story/:category/:slug" element={<NewsDetails />} />
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/blog/:category/:slug" element={<BlogDetails />} />
        <Route path="/guides/:guideId" element={<GuideDetails />} />
  <Route path="/all-guides" element={<AllGuides />} />
  <Route path="/baccarat" element={<BaccaratGame/>} />
  <Route path="/blackjack" element={<BlackjackGame/>} />
  <Route path="/poker" element={<PokerGame/>} />
  <Route path="/dice" element={<DiceGame/>} />
  <Route path="all-games" element={<AllGames/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
