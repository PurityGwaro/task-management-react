import { Link } from "react-router-dom";
import React from "react";
import Footer from "../components/layout/Footer";

const Landing = () => {
  return (
    <div className="mx-auto font-sans text-gray-800">
      <section className="relative bg-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,208C840,213,960,203,1080,197.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="absolute top-10 left-10 w-24 h-24 bg-white bg-opacity-20 rounded-full blur-md"></div>

        <div className="flex flex-col items-center justify-center px-6 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Tickify
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Manage and track your tickets effortlessly. Simplify your workflow
            with our easy-to-use ticket management system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition">
                <Link to="/auth">Get Started</Link>
            </button>
            <button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition">
                <Link to="/auth">Login</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white grid gap-8 md:grid-cols-3">
        <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Create Tickets</h3>
          <p>Easily create and assign tickets with a simple form-based interface.</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Track Progress</h3>
          <p>Monitor ticket status and updates in real-time from one dashboard.</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Collaborate Easily</h3>
          <p>Work with your team seamlessly to resolve issues faster and smarter.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;



