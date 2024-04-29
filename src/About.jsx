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
     <div className="bg-[#f5e5d0] p-8 rounded-xl mt-12 ">
     <h1 className="text-center text-3xl font-bold mt-20 mb-5 text-[#715329]">
           Background History of ArtNest
      </h1>
      <p className="text-center px-4 text-base text-gray-700 font-medium mb-12 max-w-4xl mx-auto ">
      Our journey began with a simple passion for art and a vision to create a platform where artists and craft enthusiasts could come together and share their creations with the world. Established in 2023, ArtNest was born from the desire to democratize art access, offering both seasoned and emerging artists a space to showcase their work. We started as a small team of art lovers who believed in the transformative power of creativity and sought to build a community that celebrated diverse artistic expressions. Today, we are proud to connect thousands of artists with art aficionados globally, continually expanding our reach and deepening our commitment to the vibrant world of art and crafts.
      </p>
     </div>
    </div>
  );
};

export default About;
