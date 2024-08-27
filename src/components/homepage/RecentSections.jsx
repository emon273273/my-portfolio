import React from 'react'

export default function RecentSections() {
  return (
    <section>
    <div className="w-full h-[calc(100vh - 2.5rem - 1.5rem)] full-background min-w-max border bg-blue-50">
      <div className="max-w-screen-lg mx-auto h-full p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Recent posts</h2>
          <a href="#" className="text-blue-500">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          <div className="w-[354px] h-[264px] p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Making a design system from scratch</h3>
            <p className="text-gray-500 text-sm mb-4">12 Feb 2020 | Design, Pattern</p>
            <p className="text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          <div className="w-[354px] h-[264px] p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Creating pixel perfect icons in Figma</h3>
            <p className="text-gray-500 text-sm mb-4">12 Feb 2020 | Figma, Icon Design</p>
            <p className="text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
