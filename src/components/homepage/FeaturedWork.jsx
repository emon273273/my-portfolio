import React from 'react'

export default function FeaturedWork() {
  return (
    <section className="py-12">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Featured works</h2>

        <div className="space-y-6">

          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8OBdTdkLpQM72SXQbSGP4RtAbUev8LM4fA&s"
              alt="Designing Dashboards"
              className="w-full md:w-40 h-auto mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Designing Dashboards</h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="bg-blue-600 text-white py-1 px-2 rounded-md mr-2">2020</span>
                <span>Dashboard</span>
              </div>
              <p className="text-gray-700">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8OBdTdkLpQM72SXQbSGP4RtAbUev8LM4fA&s"
              alt="Vibrant Portraits of 2020"
              className="w-full md:w-40 h-auto mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Vibrant Portraits of 2020</h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="bg-blue-600 text-white py-1 px-2 rounded-md mr-2">2018</span>
                <span>Illustration</span>
              </div>
              <p className="text-gray-700">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8OBdTdkLpQM72SXQbSGP4RtAbUev8LM4fA&s"
              alt="36 Days of Malayalam type"
              className="w-full md:w-40 h-auto mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">36 Days of Malayalam type</h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="bg-blue-600 text-white py-1 px-2 rounded-md mr-2">2018</span>
                <span>Typography</span>
              </div>
              <p className="text-gray-700">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
