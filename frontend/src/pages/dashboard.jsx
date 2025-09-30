// src/pages/Dashboard.jsx
export default function Dashboard() {
  return (
    <div className="font-sans bg-[#fdfaf7] text-[#1a1a1a] min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#1D283B] text-white px-6 py-4">
        <div className="flex justify-between items-center h-[90px]">
          <div className="font-bold text-[45px]">Edvora</div>
          <nav className="flex gap-20 pr-8">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Other Links</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center py-8 px-4">
          <h1 className="text-[#7c0d14] text-3xl font-bold mb-4">
            STUDENT DASHBOARD
          </h1>
        </section>

        {/* Dashboard Tiles */}
        <section className="px-4 space-y-6">
          {/* Study Material Sharing */}
          <div className="bg-[#dcb38c] flex justify-center items-center p-6 rounded-lg">
            <div className="flex items-center justify-center gap-8 w-full">
              <div className="w-[100px] h-[90px] border bg-gray-100 flex items-center justify-center">
                <img
                  src="study_material_sharing.avif"
                  alt="Study Material Sharing"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl font-medium">Study Material Sharing</p>
            </div>
          </div>

          {/* Skill Development */}
          <div className="bg-[#dcb38c] flex justify-center items-center p-6 rounded-lg">
            <div className="flex items-center justify-center gap-8 w-full">
              <p className="text-xl font-medium">Skill Development</p>
              <div className="w-[100px] h-[90px] border bg-gray-100 flex items-center justify-center">
                <img
                  src="skill_development.webp"
                  alt="Skill Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Year Wise Roadmap */}
          <div className="bg-[#dcb38c] flex justify-center items-center p-6 rounded-lg">
            <div className="flex items-center justify-center gap-8 w-full">
              <div className="w-[100px] h-[90px] border bg-gray-100 flex items-center justify-center">
                <img
                  src="/year_wise_roadmap.avif"
                  alt="Year Wise Roadmap"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl font-medium">Year Wise Roadmap</p>
            </div>
          </div>

          {/* Project Guidance */}
          <div className="bg-[#dcb38c] flex justify-center items-center p-6 rounded-lg">
            <div className="flex items-center justify-center gap-8 w-full">
              <p className="text-xl font-medium">Project Guidance</p>
              <div className="w-[100px] h-[90px] border bg-gray-100 flex items-center justify-center">
                <img
                  src="/project_guidance.avif"
                  alt="Project Guidance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1D283B] text-white text-center py-8 mt-10 h-[190px] flex justify-center items-center">
        <p>
          ©2025 EDVORA. All Rights Reserved. <br />
          Contact · Privacy · Terms
        </p>
      </footer>
    </div>
  );
}
