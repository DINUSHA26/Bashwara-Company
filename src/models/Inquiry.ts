import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IInquiry extends Document {
  sector: 'Gems' | 'SpareParts' | 'Motors' | 'Plastics' | 'Spices' | 'ChinaAgency';
  senderName: string;
  senderEmail: string;
  contactNo?: string;
  metaData?: Map<string, string>;
  message: string;
  createdAt: Date;
}

const InquirySchema = new Schema<IInquiry>({
  sector: {
    type: String,
    required: true,
    enum: ['Gems', 'SpareParts', 'Motors', 'Plastics', 'Spices', 'ChinaAgency'],
  },
  senderName: { type: String, required: true },
  senderEmail: { type: String, required: true },
  contactNo: { type: String },
  metaData: { type: Map, of: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Inquiry: Model<IInquiry> = mongoose.models.Inquiry || mongoose.model<IInquiry>('Inquiry', InquirySchema);
