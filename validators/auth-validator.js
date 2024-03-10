const { z } = require("zod");

const signupSchema  = z .object({
    username: z
    .string({ required_error: "Name is required"})
    .trim()
    .min(3, {messages: "Name must be at least of 3 chars."})
    .max(255, {messages: "Name must not be more than 255 chars."}),
    email: z
    .string({ required_error: "Email is required"})
    .trim()
    .email(3, {messages: "Email must be at least of 3 chars."})
    .min(3, {messages: "Email must be at least of 3 chars."})
    .max(255, {messages: "Email must not be more than 255 chars."}),
    phone: z
    .string({ required_error: "Phone is required"})
    .trim()
   
    .min(10, {messages: "Phone must be at least of 10 chars."})
    .max(12, {messages: "Phone must not be more than 12 chars."}),
    password: z
    .string({ required_error: "Password is required"})
    .trim()
   
    .min(7, {messages: "Password must not be more than of 6 chars."})
    .max(1024, {messages: "Password must be at least 12 chars."}),


});

module.exports = signupSchema;