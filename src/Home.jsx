

function Home() {
  return (
    <HeroSection />
  );
}

function HeroSection() {
  return (
    <div className="hero-section">
      <img src="src/assets/sales.jpg" alt="Fashion Hero" />
      <div>
        <h1>Discover the Latest Fashion Trends</h1>
        <p>Explore our collection of stylish clothing for men and women.</p>
      </div>
    </div>
  );
}


export { Home, HeroSection };