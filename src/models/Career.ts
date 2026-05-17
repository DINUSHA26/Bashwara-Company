import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICareer extends Document {
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  closingDate?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CareerSchema = new Schema<ICareer>({
  title: { type: String, required: true },
  department: { type: String, required: true },
  location: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
  },
  description: { type: String, required: true },
  closingDate: { type: Date },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export const Career: Model<ICareer> = mongoose.models.Career || mongoose.model<ICareer>('Career', CareerSchema);
