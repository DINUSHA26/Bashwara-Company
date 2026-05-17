import * as z from 'zod';

export const sparePartInquirySchema = z.object({
  manufacturer: z.string().min(1, { message: 'Manufacturer is required.' }),
  model: z.string().min(1, { message: 'Model is required.' }),
  year: z.string().min(4, { message: 'Year is required.' }),
  category: z.string().min(1, { message: 'Category is required.' }),
  partDescription: z.string().min(5, { message: 'Part description is required.' }),
  attachmentUrl: z.string().url().optional(), // From Cloudinary upload
  
  // Base inquiry fields needed for contact
  senderName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  senderEmail: z.string().email({ message: 'Please enter a valid email.' }),
  contactNo: z.string().optional(),
  recaptchaToken: z.string().min(1, { message: 'reCAPTCHA verification failed.' }),
});

export type SparePartInquiryFormValues = z.infer<typeof sparePartInquirySchema>;
