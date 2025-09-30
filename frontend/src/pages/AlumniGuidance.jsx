import React, {useEffect, useState} from "react";
import API from "../api";

export default function AlumniGuidance() {
  return (
    <div className="bg-[#EFEAE4]">
      <header className="bg-[#1D283B] text-white flex justify-between items-center px-10 h-16">
        <div className="text-2xl font-bold">EDVORA</div>
        <nav className="flex gap-6 font-semibold">
          <p className="cursor-pointer hover:text-[#D6B896]">Overview</p>
          <p className="cursor-pointer hover:text-[#D6B896]">About Us</p>
          <p className="cursor-pointer hover:text-[#D6B896]">FAQs</p>
        </nav>
      </header>

      <main className="p-12">
        <h1 className="text-5xl text-center text-[#642226] font-bold mb-4">ALUMNI GUIDANCE</h1>
        <p className="text-center text-xl bg-gray-300 w-3/4 mx-auto py-4 font-semibold">Connecting Students and Alumni</p>

        <div className="flex flex-col gap-6 mt-10">
          {[
            {title:"Interview Preparation", desc:"Get guidance from alumni on how to crack technical and HR interviews with confidence.", img:"/images/Inertviewprep.webp"},
            {title:"Exam Preparation", desc:"Tips and mentorship to excel in competitive exams with confidence.", img:"/images/examprep.jpg"},
            {title:"Project Mentorship", desc:"Learn how to design, build, and present impactful academic or personal projects.", img:"/images/promen.jpg"},
            {title:"Startup Hiring", desc:"Connect with startups and explore exciting career opportunities.", img:"/images/startup.png"},
          ].map((item,i)=>(
            <div key={i} className="bg-[#D6B896] flex justify-between items-center rounded-xl p-6 hover:shadow-xl">
              <div className="flex-1 pr-6">
                <h3 className="text-4xl text-[#1D283B] mb-4">{item.title}</h3>
                <p className="text-lg">{item.desc}</p>
                {i>=2 && <button className="mt-6 px-6 py-2 bg-[#642226] text-white rounded-full font-semibold hover:bg-[#501418]">View</button>}
              </div>
              <div className="flex-shrink-0">
                <img src={item.img} alt={item.title} className="max-w-[300px] rounded-lg"/>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-[#1D283B] text-white text-center p-6 mt-12">
        <p>© 2025 EDVORA. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
