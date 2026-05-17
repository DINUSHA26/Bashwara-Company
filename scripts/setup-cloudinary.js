// Run with: npx tsx scripts/setup-cloudinary.ts
// Requires CLOUDINARY_URL or API keys in .env.local

const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: '.env.local' });

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function setupCloudinary() {
  try {
    console.log('1. Creating folder structure...');
    const folders = [
      'bashwara/hero',
      'bashwara/sectors/gems',
      'bashwara/sectors/spare-parts',
      'bashwara/sectors/motors',
      'bashwara/sectors/plastics',
      'bashwara/sectors/spices',
      'bashwara/sectors/china',
      'bashwara/news',
      'bashwara/uploads/spare-parts' // For user attachments
    ];

    for (const folder of folders) {
      await cloudinary.api.create_folder(folder);
      console.log(`✅ Created folder: ${folder}`);
    }

    console.log('\n2. Creating unsigned upload preset...');
    await cloudinary.api.create_upload_preset({
      name: 'bashwara_site',
      unsigned: true,
      folder: 'bashwara/uploads',
      allowed_formats: ['jpg', 'png', 'webp', 'pdf'],
      transformation: [
        { quality: 'auto', fetch_format: 'webp' }
      ]
    });
    console.log('✅ Created unsigned preset: bashwara_site');

    console.log('\n🎉 Cloudinary setup complete! You can now manually upload your placeholder images into the dashboard folders.');
  } catch (error) {
    console.error('❌ Error setting up Cloudinary:', error);
  }
}

setupCloudinary();
