import * as z from 'zod';

export const inquirySchema = z.object({
  sector: z.enum(['Gems', 'SpareParts', 'Motors', 'Plastics', 'Spices', 'ChinaAgency'], {
    message: 'Please select a sector.',
  }),
  senderName: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  senderEmail: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  contactNo: z.string().optional(),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
  metaData: z.record(z.string(), z.string()).optional(),
  recaptchaToken: z.string().min(1, {
    message: 'reCAPTCHA verification failed.',
  }),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;
