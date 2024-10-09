import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from './Footer';

function About() {
  return (
    <>
      <Navbar />
      <section className="about-us bg-white min-h-screen flex items-center dark:bg-slate-900 dark:text-white">
        <div className="about w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-around">
          <div className="w-full md:w-1/2">
            <img
              src="https://www.southernliving.com/thmb/DiILPN4-PmulZZ1zFbP7xANxbr8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/15-WilliamChrisantandSonsOldFloridaBookShop-photobyWilliamChrisant-7077d9a8033a4ac692689380e2dad7bc.jpg"
              alt="Pic"
              className="pic rounded-lg w-full h-auto md:max-w-lg transition-transform duration-500 transform hover:scale-110"
            />
          </div>
          <div className="text w-full md:w-1/2 md:pl-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-2 dark:text-white">About Us</h2>
            <h5 className="text-xl font-medium text-gray-800 mb-4 dark:text-white">Welcome to BookStore</h5>
            <p className="text-gray-700 text-lg leading-relaxed dark:text-white">
              At BookStore, we are passionate about books and technology. Our mission is to provide readers with a seamless experience to explore and discover their favorite books. Whether you're looking for classics or new releases, we aim to connect you with stories that inspire and entertain.
            </p>
            <div className="data mt-6">
              <Link to="/" className="hire btn bg-pink-500 text-white py-4 px-4 rounded-lg hover:bg-pink-600 transition duration-300 inline-block">Read More</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
