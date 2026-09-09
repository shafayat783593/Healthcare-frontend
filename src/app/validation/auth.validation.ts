import z from "zod";

export const loginSchema =z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(8, "Password must Minimum 8 Charcters Long")
		.regex(/[A-Z]/, "Password must contain atleast 1 Uppercase Letter")
		.regex(/[a-z]/, "Password must contain atleast 1 LowerCase letter")
		.regex(/[0-9]/, "Password must contain atleast 1 Number")
		.regex(/[^A-Za-z0-9]/, "Password must contain atleast 1 Special Character"),

})