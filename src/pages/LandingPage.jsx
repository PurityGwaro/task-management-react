import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-yellow-300 bg-opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-400 bg-opacity-15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-blue-300 bg-opacity-20 rounded-full blur-lg"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="flex flex-col items-center justify-center text-center">
          
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Tickify
            </h1>
            
            <p className="text-lg md:text-2xl max-w-3xl mb-10 text-blue-100 leading-relaxed">
              Streamline your workflow with intelligent ticket management. 
              Track, organize, and manage all your tickets in one powerful platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-40">
              <Link 
                to="/auth" 
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/auth" 
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path 
              fill="#f9fafb" 
              fillOpacity="1" 
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6-">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Everything You Need to Manage Tickets
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Powerful features designed to keep your projects organized and on track
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Create Tickets Instantly</h3>
            <p className="text-gray-600 leading-relaxed">
              Quickly create and assign tickets with our intuitive form-based interface. Get started in seconds.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Track Progress Real-Time</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor ticket status and updates in real-time from a unified dashboard. Never miss an update.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Collaborate Seamlessly</h3>
            <p className="text-gray-600 leading-relaxed">
              Work with your team effortlessly to manage tickets faster and stay aligned on priorities.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Manage your tickets?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using Tickify to manage tickets efficiently and stay productive.
            </p>
            <Link 
              to="/auth" 
              className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;



