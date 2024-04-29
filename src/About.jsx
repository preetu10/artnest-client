const About = () => {
  return (
    <div>
      <div
        className="hero min-h-screen rounded-xl shadow-[#715329] shadow-2xl"
        style={{
          backgroundImage: "url(about.jpg)",
        }}
      >
        <div className="hero-overlay rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-extrabold">
            About ArtNest
            </h1>
            <p className="mb-5 font-semibold">
            Welcome to our creative sanctuary where art meets ambition. Founded by passionate artists and craft enthusiasts, we are committed to showcasing a diverse range of handcrafted artworks that inspire and delight. Join us in celebrating the artistry and craftsmanship that connect our community across the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
