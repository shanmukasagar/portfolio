"use client"; // Enable client-side rendering for the component
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS for sending emails
import data from "../data/data.json";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn, FaGithub  } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from 'next/link';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phoneNo: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // To manage success or error styling

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    return form.name && form.phoneNo && form.email && form.subject && form.message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!validateForm()) {
      setStatusMessage("Please fill in all fields.");
      setStatusType("error");
      return;
    }

    // Sending email via EmailJS
    emailjs.send(
        process.env.NEXT_PUBLIC_SERVICEIID,           // Replace with your EmailJS service ID
        process.env.NEXT_PUBLIC_TEMPLEATEID,          // Replace with your EmailJS template ID
      {
        name: form.name,
        phoneNo: form.phoneNo,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      process.env.NEXT_PUBLIC_PUBLICKEY               // Replace with your EmailJS user ID (public key)
    )
    .then((response) => {
      setStatusMessage('Message sent successfully!');
      setStatusType("success");
      setForm({
        name: "",
        phoneNo: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear status message after 6 seconds
      setTimeout(() => {
        setStatusMessage("");
        setStatusType("");
      }, 6000);
    })
    .catch((err) => {
      setStatusMessage('Error sending message.');
      setStatusType("error");

      // Clear status message after 6 seconds
      setTimeout(() => {
        setStatusMessage("");
        setStatusType("");
      }, 6000);
    });
  };

  return (
    <div id="contact" className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] mt-20 '>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* Left Section */}
          <div className='col-span-3 lg:col-span-2 h-full w-full p-4  shadow-xl shadow-gray-400 rounded-xl'>
             <div className='lg:py-4 h-full'>
                <div>
                    <img src={data.contact.image} alt={data.contact.name} className="rounded-xl hover:scale-105 ease-in duration-300" />
                </div>
                <div>
                    <h2 className='py-2'>{data.contact.name}</h2>
                    <p className='py-2'>{data.contact.title}</p>
                    <p className='py-4'>{data.contact.desc}</p>
                </div>
                <div>
                    <p className='uppercase pt-8'>Contact with me</p>
                    <div className='flex items-center gap-8 py-4'>
                      <a href = {data.links.linkedin} target="_blank">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn className='text-blue-700' />
                        </div>
                      </a>
                      <a href = {data.links.github} target="_blank">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub className='text-gray-800' />
                        </div>
                      </a>
                      <a href={`mailto:${data.links.mail}`} >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <IoMdMail className='text-red-500' />
                        </div>
                      </a>
                      <a href={`tel:${data.links.phone}`} >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill className='text-black'/>
                        </div>
                      </a>
                    </div>
                    <Link href="/assets/sagar/Sagar_MERN_Resume.pdf" target="_blank">
                      <button type="button" className="px-2 py-2 w-[180px] mt-[10px] cursor-pointer">Resume</button>
                    </Link>
                </div>
             </div>
          </div>

          {/* Right Section: Form */}
          <div className='w-full col-span-3 h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Name</label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              className='border-2 rounded-lg p-3 flex border-gray-300'
                              required
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Phone Number</label>
                            <input
                              type="tel"
                              name="phoneNo"
                              value={form.phoneNo}
                              onChange={handleChange}
                              className='border-2 rounded-lg p-3 flex border-gray-300'
                              required
                            />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Email</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className='border-2 rounded-lg p-3 flex border-gray-300'
                          required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className='border-2 rounded-lg p-3 flex border-gray-300'
                          required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Message</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          className='border-2 rounded-lg p-3 border-gray-300'
                          rows={10}
                          required
                        />
                    </div>
                    <button type='submit' className='p-4 w-full mt-4 text-gray-100 bg-[#5651e5]'>Send Message</button>
                </form>
                {statusMessage && (
                  <p className={`mt-4 ${statusType === "success" ? "text-green-500" : "text-red-500"}`}>
                    {statusMessage}
                  </p>
                )}
            </div>
          </div>
        </div>

        <div className='flex justify-center py-12'>
            <Link href="/">
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={25} />
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
