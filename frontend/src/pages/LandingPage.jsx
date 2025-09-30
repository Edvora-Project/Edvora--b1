import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div className="bg-[#EFEAE4] text-gray-900">
      {/* Navbar */}
      <header className="bg-[#1D283B] text-white flex justify-between items-center px-10 h-16">
        <div className="text-2xl font-bold">EDVORA</div>
        <nav className="flex gap-6 font-semibold">
          <a href="#overview" className="cursor-pointer hover:text-[#D6B896]">Overview</a>
          <a href="#about" className="cursor-pointer hover:text-[#D6B896]">About Us</a>
          <a href="#faq" className="cursor-pointer hover:text-[#D6B896]">FAQs</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-20 py-16">
        <div className="w-[568px] h-[379px] bg-cover rounded-lg bg-[url('/images/herosecimage.jpg')]"></div>
        <div className="mt-10 md:mt-0 text-center md:text-left">
          <h2 className="text-[90px] font-serif text-[#642226] mb-6">EDVORA</h2>
          <h4 className="text-xl mb-6">
            Unlock resources.<br />Connect with mentors.<br />Explore projects.<br />Shape your future.
          </h4>
          <Link to="/signup">
                    <button className="bg-[#642226] text-white px-8 py-3 rounded-full font-bold mr-4 hover:bg-[#501418]">
            Sign up
          </button>
          </Link>
          <Link to="/login">
          <button className="bg-gray-300 px-8 py-3 rounded-full font-bold hover:bg-gray-400">
            Login
          </button></Link>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="px-12 my-12">
        <h3 className="text-[80px] text-[#1D283B] font-bold mb-6">Overview</h3>
        <p className="text-2xl mb-10">Edvora is a platform designed to connect students with alumni for guidance, mentorship and opportunities.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#D6B896] rounded-xl p-6 flex flex-col items-center hover:shadow-lg">
            <img src="/images/mentorship.jpg" alt="Mentorship" className="rounded-lg mb-4"/>
            <h5 className="text-2xl">Mentorship</h5>
          </div>
          <div className="bg-[#D6B896] rounded-xl p-6 flex flex-col items-center hover:shadow-lg">
            <img src="/images/alugui.jpg" alt="Alumni Guidance" className="rounded-lg mb-4"/>
            <h5 className="text-2xl">Alumni Guidance</h5>
          </div>
          <div className="bg-[#D6B896] rounded-xl p-6 flex flex-col items-center hover:shadow-lg">
            <img src="/images/networking.jpg" alt="Networking" className="rounded-lg mb-4"/>
            <h5 className="text-2xl">Networking</h5>
          </div>
          <div className="bg-[#D6B896] rounded-xl p-6 flex flex-col items-center hover:shadow-lg">
            <img src="/images/resshr.jpg" alt="Resources" className="rounded-lg mb-4"/>
            <h5 className="text-2xl">Resources</h5>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="px-12 my-12">
        <h3 className="text-[80px] text-[#1D283B] font-bold mb-6">About Us</h3>
        <h6 className="text-3xl text-[#642226]">Mission</h6>
        <p className="text-xl mb-4">To bridge the student–alumni gap and foster meaningful guidance.</p>
        <h6 className="text-3xl text-[#642226]">Vision</h6>
        <p className="text-xl mb-4">To grow into a strong professional community that supports career development.</p>
        <h6 className="text-3xl text-[#642226]">About us</h6>
        <p className="text-xl">Built with passion by students, for students.</p>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-12 my-12">
        <h3 className="text-[80px] text-[#1D283B] font-bold mb-6">FAQ's</h3>
        <div className="space-y-4">
          <div className="bg-[#1D283B] text-white p-4 rounded-md text-2xl">+ What is EDVORA and who can use it?</div>
          <div className="bg-white p-4 rounded-md shadow text-lg">
            EDVORA is a platform to connect students with alumni for mentorship, guidance, networking, and opportunities.
          </div>
          <div className="bg-[#1D283B] text-white p-4 rounded-md text-2xl">+ What type of resources are available on EDVORA?</div>
          <div className="bg-white p-4 rounded-md shadow text-lg">
            Resources shared by alumni: study materials, project ideas, interview prep, career advice, and networking.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D283B] text-white text-center p-6 mt-12">
        <p>© 2025 EDVORA. All Rights Reserved.</p>
        <p>Contact · Privacy · Terms</p>
      </footer>
    </div>
  )
}  