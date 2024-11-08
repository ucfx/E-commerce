import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const ContactsSection = () => {
  return (
    <div className="flex justify-center items-center gap-x-4 pb-5 pt-8 bg-blue-100 mt-5 h-screen relative " id="contacts">
        <p className="text-2xl font-black absolute top-10 ">Contact our friendly team</p>
      <div className="w-1/3 pb-4">
        <p className="text-2xl font-bold mb-2">Get in Touch</p>
        <p className="text-gray-400 font-semibold w-2/3">
          contact our friendly team troght email , phone or show our real
          location
        </p>
        <div className="flex flex-col justify-start items-start gap-y-5 pt-4 pb-2">
          <div className="flex justify-start items-center gap-x-3">
            <div className=" rounded-full bg-orange-600 px-2 py-2">
              <FaPhone className="text-white" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-sm font-semibold text-gray-500">Phone</p>
              <p className="text-sm font-semibold text-gray-500">0656149785</p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-x-3">
            <div className=" rounded-full bg-orange-600 px-2 py-2">
              <MdEmail className="text-white" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-sm font-semibold text-gray-500">Email</p>
              <p className="text-sm font-semibold text-gray-500">
                anteuryounes1@gmail.com
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-x-3">
            <div className=" rounded-full bg-orange-600 px-2 py-2">
              <FaLocationDot className="text-white" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-sm font-semibold text-gray-500">Location</p>
              <p className="text-sm font-semibold text-gray-500">
                EL-GUELTA CHEF ALGERIA
              </p>
            </div>
          </div>
        </div>
        <hr className="text-gray-600 bg-slate-600"/>
        <div className="w-full pt-4">
            <p className="text-xl font-semibold">Follow Us :</p>
            <div className="flex justify-start items-center gap-x-5 pt-1">
            <div className=" rounded-full bg-orange-600 px-2 py-2">
              <FaFacebook className="text-white" />
            </div>
            <div className=" rounded-full bg-orange-600 px-2 py-2">
              <FaInstagram className="text-white" />
            </div>
            <div className=" rounded-full bg-orange-600 px-2 py-2">
              <FaTwitter className="text-white" />
            </div>
            <div className=" rounded-full bg-orange-600 px-2 py-2">
              <FaLinkedin className="text-white" />
            </div>
            </div>
        </div>
      </div>
      <div className="pt-4 px-3 pb-8 bg-white w-1/3 rounded-xl">
        <p className="text-xl font-bold pb-7">Send Message</p>
        <div className="w-full flex flex-col justify-start items-start pb-5 gap-y-3">
            <input type="text" className=" w-full px-3 pb-1 pt-2 font-fontAY2 border-b text-sm border-gray-300"placeholder="Your Name" />
            <input type="email" className=" w-full px-3 pb-1 pt-2 font-fontAY2 border-b text-sm border-gray-300"placeholder="Your Email" />
            <input type="text" className=" w-full px-3 pb-1 pt-2 font-fontAY2  border-b text-sm border-gray-300"placeholder="Your Message" />
        </div>
            <p className="text-gray-600 font-semibold w-[80%] pl-3 text-sm pb-5">
                from this section you can send message to our team , for problem solving or ask your questions 
            </p>
            <div className="w-full justify-end flex items-center">
            <button className="px-3 py-2 text-white font-semibold bg-orange-600 rounded-xl">Submit</button>

            </div>
      </div>
    </div>
  );
};

export default ContactsSection;
 