import { FaQuoteRight } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-20 mb-5 text-[#715329]">
        Voices of Appreciation
      </h1>
      <p className="text-center px-4 text-base text-gray-500 font-medium mb-12 max-w-4xl mx-auto ">
        Discover heartfelt testimonials from our valued patrons, sharing their
        experiences and the profound impact our art has made in their lives.
        Join our community and be inspired by stories of creativity, connection,
        and joy
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center px-3">
        {/* 1st */}
        <div className="card p-3 bg-pink-100 shadow-xl">
          <div className="card-body">
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500 checked"
              />
            </div>
            <FaQuoteRight size={24} color="currentColor" className="my-2" />
            <p className="italic">
              Discovering this collection has been a highlight of my year. Each
              piece is not only beautiful but also filled with emotion and
              story. Truly a treasure trove for any art lover. <br></br>
              <span className="font-medium  ml-3 not-italic">
                ---- Emily R.
              </span>{" "}
            </p>
          </div>
        </div>
        {/* 2nd */}
        <div className="card p-3 bg-emerald-100 shadow-xl">
          <div className="card-body">
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500 checked"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-50 "
              />
            </div>
            <FaQuoteRight size={24} color="currentColor" className="my-2" />
            <p className="italic">
            This platform has helped me discover new artists and expand my collection with pieces that truly resonate with me. It’s not just an art purchase; it’s an experience<br></br>
              <span className="font-medium  ml-3 not-italic">
                ---- Maisha Solayman
              </span>{" "}
            </p>
          </div>
        </div>
        {/* 3rd */}
        <div className="card p-3 bg-teal-100 shadow-xl">
          <div className="card-body">
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500 checked"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-50"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-50"
              />
            </div>
            <FaQuoteRight size={24} color="currentColor" className="my-2" />
            <p className="italic">
            Fantastic website for finding one-of-a-kind crafts! The attention to detail in each product shows how much passion the artists put into their work <br></br>
              <span className="font-medium  ml-3 not-italic">
                ---- Jannatul Ferdous
              </span>{" "}
            </p>
          </div>
        </div>
        {/* 4th */}
        <div className="card p-3 bg-purple-100 shadow-xl">
          <div className="card-body">
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-yellow-500 checked"
              />
            </div>
            <FaQuoteRight size={24} color="currentColor" className="my-2" />
            <p className="italic">
            Every time I visit this site, I am inspired by the incredible talent and creativity displayed. The artwork here enriches my home with unique, expressive pieces that truly speak to me. <br></br>
              <span className="font-medium  ml-3 not-italic">
                ---- Robin Ahmed
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
