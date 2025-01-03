import React from 'react'
import HTML from '../Assets/html.png';
import CSS from '../Assets/css.png';
import JAVASCRIPT from "../Assets/javascript.png";
import REACT from '../Assets/react.png';
import NODE from '../Assets/node.png';
import FIREBASE from '../Assets/firebase.png';
import AWS from '../Assets/aws.png';
import GITHUB from '../Assets/github.png';
import TAILWIND from '../Assets/tailwind.png';
import MONGO from '../Assets/mongo.png';



const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-1">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-1">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-1">
            <img className="w-20 mx-auto" src={JAVASCRIPT} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-1">
            <img className="w-20 mx-auto" src={REACT} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-1">
            <img className="w-20 mx-auto" src={GITHUB} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-1">
            <img className="w-20 mx-auto" src={NODE} alt="HTML icon" />
            <p className="my-4">NODE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-1">
            <img className="w-20 mx-auto" src={MONGO} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-1">
            <img className="w-20 mx-auto" src={AWS} alt="HTML icon" />
            <p className="my-4">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills