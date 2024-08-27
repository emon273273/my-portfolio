"use client";

import FeaturedWork from "@/components/homepage/FeaturedWork";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import Navbar from "@/components/homepage/Navbar";
import RecentSections from "@/components/homepage/RecentSections";



export default function Home() {
  

  return (
    <>
    {/* header  */}
    
    <Header/>
    {/* header */}
    

{/* recent posts content */}

<RecentSections/>
{/* recent posts content */}



{/* featured works */}
<FeaturedWork/>
{/* featured works */}

{/* footer */}


{/* footer */}
  

    </>
  );
}
