import {z} from "zod"
export const BilligAdressSchema=z.object({
    firstName: z.string()
    .nonempty({ message: 'First name is required' })
    .min(2, { message: 'First name must be at least 2 characters long' })
    .max(50, { message: 'First name must be less than 50 characters' })
    .regex(/^[a-zA-Z]+$/, { message: 'First name can only contain letters' }),
    lastName: z.string()
    .nonempty({ message: 'First name is required' })
    .min(2, { message: 'First name must be at least 2 characters long' })
    .max(50, { message: 'First name must be less than 50 characters' })
    .regex(/^[a-zA-Z]+$/, { message: 'First name can only contain letters' }),
    StreetAddress: z.string()
    .nonempty({ message: 'Delivery address is required' })
    .min(10, { message: 'Delivery address must be at least 10 characters long' })
    .max(100, { message: 'Delivery address must be less than 100 characters' })
    .regex(/^[a-zA-Z0-9\s,.'-]*$/, { message: 'Delivery address contains invalid characters' }),
    city: z
    .string()
    .min(2, { message: 'City must be at least 2 characters' })
    .max(50, { message: 'City cannot exceed 50 characters' })
    .regex(/^[a-zA-Z\s]*$/, { message: 'City must contain only alphabets and spaces' }),
    country: z
    .string()
    .min(2, { message: 'Country must be at least 2 characters' })
    .max(50, { message: 'Country cannot exceed 50 characters' })
    .regex(/^[a-zA-Z\s]*$/, { message: 'Country must contain only alphabets and spaces' }),
    postalCode: z
    .string()
    .min(3, { message: 'Postal code must be at least 3 characters' })
    .max(10, { message: 'Postal code cannot exceed 10 characters' })
    .regex(/^[a-zA-Z0-9\s-]*$/, { message: 'Invalid postal code format' }),
    email: z.string().email({ message: "Invalid Email Adress" }),
    phoneNumber: z
    .string()
    .refine(
      (value) => /^(\+2519\d{8}|09\d{8}|\+2517\d{8}|07\d{8})$/.test(value),
      {
        message: 'Invalid Ethiopian phone number format',
      }
    ),
    additionalNotes: z
    .string()
    .max(500, { message: 'Notes cannot exceed 500 characters' })
    .optional(),

}
)
export const intialValues={
    firstName:"",
    lastName:"",
    streetAddress:"",
    city:"",
    country:"",
    postalCode:"",
    email:"",
    phoneNumber:"",
    additionalNotes:"",

}
export const fields=[
 { label: "First Name", name: "firstName", type: "text", className: " col-span-2 lg:col-span-1" },
 { label: "Last Name", name: "lastName", type: "text", className: " col-span-2 lg:col-span-1" },
 { label: "Street Address", name: "streetAddress", type: "text", className: "col-span-2" },
 { label: "City/Town", name: "city", type: "text", className: " col-span-2 lg:col-span-1" },
 { label: "Country/Province", name: "country", type: "text", className: " col-span-2 lg:col-span-1" },
 { label: "Postal Code", name: "postalCode", type: "text", className: "col-span-2 lg:col-span-1" },
 { label: "Email Address", name: "email", type: "email", className: " col-span-2 lg:col-span-1" },
 
 { label: "Additional Notes", name: "additionalNotes", type: "textarea", className: "col-span-2" },
]