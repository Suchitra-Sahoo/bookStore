import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900 py-10">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <div className="bg-gradient-to-r from-white to-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 shadow-lg rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600">
            <div className="py-6 px-4">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                Contact Us
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Got a technical issue? Want to send feedback about a feature? Register any complaint? Let us know.
              </p>
              <div className="flex justify-center mb-8">
                <img
                  src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1719560314~exp=1719563914~hmac=2cacf0435c57fc71fc8b4b1edf6ad44105ead1d8f2c52ba190e32a729f37b333&w=740"
                  alt="Contact Us"
                  className="w-full md:w-96 h-auto"
                />
              </div>
              <form className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-100 border border-pink-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-pink-500 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg shadow-sm border border-pink-500 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 transform hover:scale-105 w-full md:w-auto"
                  >
                    Send message
                  </button>
                </div>
                <div className="flex justify-start mt-4">
                  <Link
                    to="/"
                    className="text-sm font-medium text-pink-900 dark:text-white hover:text-pink-500 duration-300"
                  >
                    Back
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
