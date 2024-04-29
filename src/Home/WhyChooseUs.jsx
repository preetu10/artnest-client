/* eslint-disable react/no-unescaped-entities */
const WhyChooseUs = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-20 mb-5 text-[#715329]">
        Why Choose Us
      </h1>
      <p className="text-center px-4 text-base text-gray-500 font-medium mb-12 max-w-4xl mx-auto ">
        Discover the difference with us, where each piece is a testament to
        superior craftsmanship and artistic integrity.
      </p>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
        {/* 1st */}
        <div className="card p-4 bg-red-50 shadow-2xl shadow-red-100">
          <div className="card-body">
            <h2 className="card-title">Exceptional Artistic Quality</h2>
            <p>Experience the finest artistry with our meticulously curated collection. Each piece is a showcase of unparalleled craftsmanship, reflecting a commitment to aesthetic excellence and authenticity.</p>
          </div>
        </div>
        {/* 2nd */}
        <div className="card p-4 bg-amber-100 shadow-2xl shadow-amber-100">
          <div className="card-body">
            <h2 className="card-title">Dedicated Customer Care</h2>
            <p>From personalized service to hassle-free returns, we ensure a seamless experience at every step. Trust us to go the extra mile to meet your needs with responsiveness and unmatched care.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-row justify-center items-center mt-10">
      <div className="card p-4 md:w-3/6 bg-sky-100 shadow-2xl shadow-sky-100">
  <div className="card-body">
    <h2 className="card-title">Support for Local Artisans</h2>
    <p>By choosing us, you contribute to a thriving community of local artists. We promote and support our artisans' growth, helping preserve unique crafts and skills. </p>
    
  </div>
</div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
