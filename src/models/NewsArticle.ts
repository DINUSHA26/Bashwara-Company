import mongoose, { Schema, Document, Model } from 'mongoose';

export interface INewsArticle extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: Date;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const NewsArticleSchema = new Schema<INewsArticle>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  coverImage: { type: String, required: true }, // Cloudinary URL or publicId
  publishedAt: { type: Date, default: Date.now },
  tags: [{ type: String }],
}, { timestamps: true });

export const NewsArticle: Model<INewsArticle> = mongoose.models.NewsArticle || mongoose.model<INewsArticle>('NewsArticle', NewsArticleSchema);
