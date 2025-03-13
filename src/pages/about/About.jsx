import React from 'react'
import AboutImage from "../../assets/hero/about.jpg"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const About = () => {
  return (
    <div>
       <Breadcrumb className="flex justify-center">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>About</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
    <div className="flex flex-col lg:flex-row gap-10 m-4 px-10">
      <img
        src={AboutImage}
        alt="Addis Ababa"
        className=" flex-1 object-cover shadow-lg mt-4 h-96"
      />
      <p className=" flex-1  lg:px-10 text-justify leading-8 font-inter">
        <span className="text-green-500 font-prata font-bold tracking-extrawide">
          Who We Are
          <br />
        </span>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minima esse cumque! Officia ad sequi doloremque? Ab, rerum! Facilis veniam quasi at voluptatibus minima asperiores, nesciunt ea fugiat laboriosam nulla!        <br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum hic error nam, voluptas voluptate incidunt esse quam iure eligendi aperiam velit. Possimus nihil aperiam fugit unde quasi quos tenetur.        <br /><br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa possimus esse excepturi fuga libero corrupti, provident unde eos, atque illo. Vitae sint dolorem laudantium fuga numquam aspernatur, officia aliquam?        <br />
        At our core, we believe in the power of visual art to tell stories, evoke emotions, and preserve memories. We are dedicated to supporting both photographers and customers through a secure, user-friendly environment where creativity thrives.
        <br />
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio illum architecto quae praesentium! Eaque, tenetur totam? Officia dolore minima distinctio dignissimos quam explicabo! Ipsum, nesciunt accusamus dignissimos obcaecati ipsa provident?
      </p>
    </div>
    </div>
  )
}

export default About
