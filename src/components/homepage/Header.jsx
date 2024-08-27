

export default function Header() {
  
  return (
    <div className="container mx-auto px-4 md:px-20 ">
      

      <main className="mt-8 md:mt-32 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl title mb-4 title">
              Hi, I am John,
              <br />
              Creative Technologist
            </h1>
            <p className="text-base mb-6 max-w-sm md:max-w-md title-content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition download-button items-center">
              Download Resume
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/advisor/wp-content/uploads/2022/07/coding_portfolio.jpeg-3.jpg"
              alt="John"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
