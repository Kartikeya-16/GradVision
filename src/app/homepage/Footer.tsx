import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaAngleRight, FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { PiPinterestLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-300 text-xs">
      <div className="px-8 mx-auto py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Logo and Description */}
        <div>
          <Image
            src={logo}
            alt="Logo"
            className="mb-4 w-12 h-12 object-contain"
          />
          <p className="text-xs leading-relaxed">
            BeSchool4U is dedicated to transforming education by providing
            top-tier online learning programs for professionals, entrepreneurs,
            and students. Explore a platform that bridges the gap between
            knowledge and practical skills.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4" style={{ color: "#F6851E" }}>
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FaAngleRight /> Online Learning Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FaAngleRight /> About BeSchool4U
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FaAngleRight /> Courses and Modules
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FaAngleRight /> Admissions Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FaAngleRight /> Career Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FaAngleRight /> Apply Now
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FaAngleRight /> FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FaAngleRight /> Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="leading-relaxed">
          <h3 className="font-bold mb-4" style={{ color: "#F6851E" }}>
            Contact Us
          </h3>
          <p className="">
            <strong>BeSchool4U</strong>
          </p>
          <p className="">
            Sector 62, Noida
            <br />
            Uttar Pradesh - 201301
          </p>
          <p className="">
            <a
              href="https://beschool4u.in"
              target="_blank"
              className="hover:underline"
              rel="noopener noreferrer"
            >
              www.beschool4u.in
            </a>
          </p>
          <p className="">Toll Free: 1800-123-4567</p>
          <p className="">
            Email Us:{" "}
            <a
              href="mailto:support@beschool4u.in"
              className="hover:underline"
            >
              support@beschool4u.in
            </a>
          </p>
        </div>

        {/* Social Links, Toll Free, Email Us */}
        <div className="space-y-8">
          <div className="flex flex-col">
            <h3 className="font-bold mb-4" style={{ color: "#F6851E" }}>
              Social Links
            </h3>
            <div className="flex space-x-4" style={{ color: "#F6851E" }}>
              <a href="#" className="p-1 bg-white rounded-full">
                <BiLogoFacebookCircle />
              </a>
              <a href="#" className="p-1 bg-white rounded-full">
                <AiOutlineInstagram />
              </a>
              <a href="#" className="p-1 bg-white rounded-full">
                <FaLinkedin />
              </a>
              <a href="#" className="p-1 bg-white rounded-full">
                <BsTwitterX />
              </a>
              <a href="#" className="p-1 bg-white rounded-full">
                <BsYoutube />
              </a>
              <a href="#" className="p-1 bg-white rounded-full">
                <PiPinterestLogo />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2" style={{ color: "#F6851E" }}>
              Toll Free
            </h3>
            <p className="flex items-center">
              <FaPhoneAlt className="mr-2" /> 1800-123-5667
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2" style={{ color: "#F6851E" }}>
              Email Us
            </h3>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> support@beschool4u.in
            </p>
          </div>
        </div>
      </div>

      <div
        className="border-b-2 border-white mt-8 p-4 text-center flex lg:flex-row flex-col justify-around text-xs"
        style={{ backgroundColor: "#F6851E" }}
      >
        <p className="">
          © 2024 All Rights Reserved by BeSchool4U
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline border-r-2 pr-2">
            Resources
          </a>
          <a href="#" 
          className="hover:underline border-r-2 pr-2">
            Blog
          </a>
          <a href="#" className="hover:underline border-r-2 pr-2">
            Alumni Network
          </a>
          <a href="#" className="hover:underline border-r-2 pr-2">
            Events
          </a>
          <a href="#" className="hover:underline">
            News
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
