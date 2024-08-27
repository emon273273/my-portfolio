import React from 'react'

export default function blog() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-[58px] all ">
        <main className="max-w-3xl mx-auto ">
            <h1 className="text-3xl font-bold mb-8 mt-8 title ">Blog</h1>
            
            {[1, 2, 3, 4, 5].map((_, index) => (
                <article key={index} className="mb-8 pb-8 border-b all">
                    <h2 className="text-3xl font-medium mb-2 all">UI Interactions of the week</h2>
                    <div className="text-sm text-gray-600 mb-4">
                        <span className='all font-normal text-[20px] text-[#21243D]'>12 Feb 2019</span>
                        <span className="mx-2 mb-2 text-[#000000] border-[1px] border-[#000000]"></span>
                        <span className='text-[#8695A4] font-normal all text-[20px] '>Express, Handlebars</span>
                    </div>
                    <p className="all text-[16px] font-normal">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    
                </article>
                
            ))}
        </main>
       

       
    </div>
  )
}