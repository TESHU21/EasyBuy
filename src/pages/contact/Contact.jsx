import React from "react";
import FormComp from "@/components/FormComp";
import { ContactSchema, fields, intialValues } from "./ContactSchema";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Contact = () => {
  return (
    <div className=" px-10">
     <Breadcrumb className="flex justify-center">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contact</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col lg:flex-row pt-6">
        <div className=" flex flex-col p-6 lg:pl-24 flex-1 font-inter  ">
          <h1 className=" text-xl font-bold font-prata text-gray-600">
            Get In <span className="text-green-500">Touch</span>{" "}
          </h1>
          <p className="font-inter  text-gray-500 ">
            Questions, comments, or suggestions? <br />
            Simply fill in the form and we’ll be in touch shortly.
          </p>
          <p className="flex items-center gap-4 mt-8">
            <FaPhoneVolume size={20} className="text-violet-500" />{" "}
            <span>+251921670994</span>
          </p>
          <p className="flex items-center gap-4 mt-4">
            <IoLocationOutline size={24} className="text-violet-500" />{" "}
            <span>Addis Ababa,Ethiopia</span>
          </p>
          <p className="flex items-center gap-4 mt-4">
            <MdOutlineMailOutline size={24} className="text-violet-500" />{" "}
            <span>info@easybuy.com</span>
          </p>
          <div className="flex gap-10 lg:gap-16 justify-around it pt-12 lg:pt-20">
            <a href="" className="text-xl">
              <FaFacebook size={32} color="#3B5998" />
            </a>
            <a href="">
              <FaLinkedin size={32} color="#0A66C2" />
            </a>
            <a href="">
              <FaInstagram size={32} color="#E1306C" />
            </a>
            <a href="">
              <FaTwitter size={32} color="#1DA1F2'" />
            </a>
          </div>
        </div>
        <div className=" flex-1 lg:ml-40 px-6 lg:px-20 my-4">
          <FormComp
            schema={ContactSchema}
            initialValues={intialValues}
            fields={fields}
            submitBtnText={"Submit"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
