import React from 'react'
import { FaFacebook, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
     <footer className=" text-center py-5">
      <div className="flex justify-center space-x-4 mb-4">
      <FaFacebook className="text-2xl" />
      <FaInstagramSquare className="text-2xl"/>
      <FaTwitter className="text-2xl"/>
      <FaLinkedin className="text-2xl"/>
      </div>
      <p className="text-gray-600">Copyright ©2020 All rights reserved </p>
    </footer>
  )
}
