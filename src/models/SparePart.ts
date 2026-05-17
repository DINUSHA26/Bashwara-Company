import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICompatibility {
  make: string;
  model: string;
  years: number[];
}

export interface ISparePart extends Document {
  partName: string;
  category: string;
  condition: 'Brand New' | 'Used' | 'Reconditioned';
  compatibility: ICompatibility[];
  wholesalePriceRange?: string;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CompatibilitySchema = new Schema<ICompatibility>({
  make: { type: String, required: true },
  model: { type: String, required: true },
  years: [{ type: Number, required: true }],
}, { _id: false });

const SparePartSchema = new Schema<ISparePart>({
  partName: { type: String, required: true },
  category: { type: String, required: true },
  condition: {
    type: String,
    required: true,
    enum: ['Brand New', 'Used', 'Reconditioned'],
  },
  compatibility: [CompatibilitySchema],
  wholesalePriceRange: { type: String },
  isAvailable: { type: Boolean, default: true },
}, { timestamps: true });

export const SparePart: Model<ISparePart> = mongoose.models.SparePart || mongoose.model<ISparePart>('SparePart', SparePartSchema);
