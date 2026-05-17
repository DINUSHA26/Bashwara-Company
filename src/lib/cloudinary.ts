/**
 * Helper utilities for Cloudinary media integration
 */

export const getCloudinaryUrl = (publicId: string, options: any = {}) => {
  // Logic to build cloudinary urls if needed
  // next-cloudinary handles most components, but this is useful for direct links
  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${publicId}`;
};
