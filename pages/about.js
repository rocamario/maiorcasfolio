import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaInstagram, FaLaptop, FaTwitter } from "react-icons/fa";
import { getAllTopics } from "../Lib/Data";

export const getStaticProps = () => {
  const allTopics = getAllTopics();
  return {
    props: {
      topics: allTopics,
    },
  };
};

// TODO: update this 
function about({ topics }) {
  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900">
      <Navbar topics={topics} />
      <div className="max-w-2xl pt-20 pb-32 px-6 text-center mx-auto">
        <div className="h-64 w-full justify-center flex">
          <img src="/about.png" className="h-64" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
          Hi,{" "}
          <span className="bg-amber-400 text-white rounded px-1 dark:bg-amber-500">
            I’m Mario
          </span>{" "}
          . Nice to meet you.
        </h2>
        <p className="text-gray-600 mt-4 dark:text-amber-200">
        <ul>
          <li>I'm a software professional who finds purpose and fulfillment beyond the realm of coding. </li>
          <li>Beyond my role in the tech world, I'm a seeker of meaningful connections, adventure, and relaxation.</li>
          <li>I'm constantly striving for personal growth.</li>
          <li>I capture life's moments through photography and am deeply in love with the beauty of nature and the concepts of freedom and liberty.</li>
        </ul>
        
        
        
        
        </p>

        <div className="text-center pt-8">
          <button className="bg-amber-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded dark:bg-amber-600">
            <FaLaptop />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://linkedin.com/in/marioroca"
            >
              See My Job
            </a>
          </button>

          <button className="bg-amber-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded ml-3 dark:bg-amber-600">
            <FaInstagram />
            <a
              className="instagram-profile-button"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/maiorcasfolio/"
            >
              Find Me
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
