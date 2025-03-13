import React from "react";
import { z } from "zod";

export const ContactSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First Name should contain at least two characters" })
    .or(z.literal("")),

  lastName: z
    .string()
    .min(2, { message: "Last name should contain at least two charcters" })
    .or(z.literal("")),
  // profilePhoto: z.string().optional(),
  phoneNumber: z
    .string()
    .regex(/^(?:\+251(9|7)\d{8}|0(9|7)\d{8})$/, {
      message: "Invalid Phone Number",
    })
    .or(z.literal("")),
    address:z.string().nonempty({message:"Address field is required"}),
  message: z
    .string()
    .max(300, { message: "Your Message shouldn't more than 300 words" }),
});
export const fields = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    className: "col-span-2 lg:col-span-1",
    placeholder: "Enter First Name",
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    className: " col-span-2 lg:col-span-1",
    placeholder: "Enter Last Name",
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    type: "text",
    className: " col-span-2 md:col-span-1 ",
    placeholder: "Enter Phone Number",
  },
  {
    label: "Address",
    name: "address",
    type: "text",
    className: " col-span-2 md:col-span-1 ",
    placeholder: "Enter your Adress",
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    className: " col-span-2",
    placeholder: "Enter your Message or Request",
  },
];
export const intialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address:"",
  message: "",
};
