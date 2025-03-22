import React from "react";
import Hero from "./Hero";
import ProfileCard from "./ProfileCard";
import Deployment from "./Deployment";
import Footer from "./Footer";
import BlockQuote from "./BlockQuote";
import Resources from "./Resources";
import Support from "./Support";

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <ProfileCard />
      <Deployment />
      <BlockQuote />
      <Resources />
      <Support />
      <Footer />
    </div>
  );
}
