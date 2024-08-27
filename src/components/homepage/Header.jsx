export default function Header() {
  return (
    <div className="container mx-auto px-4 md:px-20 lg:px-32 xl:px-48">
      <main className="mt-8 md:mt-32 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 all">
              Hi, I am John,
              <br />
              Creative Technologist
            </h1>
            <p className=" md:text-left md:text-lg md:text-[16px] mb-6 max-w-sm md:max-w-md lg:max-w-lg mx-auto md:mx-0 all font-normal md:leading-[23.5px] ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition">
                Download Resume
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/advisor/wp-content/uploads/2022/07/coding_portfolio.jpeg-3.jpg"
              alt="John"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
