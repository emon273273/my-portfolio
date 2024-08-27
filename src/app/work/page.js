import React from 'react'
import Image from 'next/image';
const workItems = [
    {
      title: "Designing Dashboards",
      year: "2020",
      category: "Dashboard",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "Vibrant Portraits of 2020",
      year: "2018",
      category: "Illustration",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "36 Days of Malayalam type",
      year: "2018",
      category: "Typography",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "Components",
      year: "2018",
      category: "Components, Design",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ];



export default function Work() {
  return (
    <div className="container mx-auto px-4 md:px-0 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 mt-8 md:mt-20">Work</h1>
      <div className="space-y-8 md:space-y-12">
        {workItems.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start ">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="md:ml-6 w-full md:w-2/3 ">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <div className="flex items-center mb-2">
                <span className="bg-[#142850] text-white px-2 py-1 rounded-full text-sm mr-4">
                  {item.year}
                </span>
                <span className="text-gray-600">{item.category}</span>
              </div>
              <p className="title-content">{item.description}</p>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}
  

