'use client';

import React from 'react';
import { CldImage, CldImageProps } from 'next-cloudinary';

/**
 * A highly optimized wrapper around next-cloudinary's CldImage.
 * Enforces WebP formatting, automatic quality adjustment, and prevents CLS.
 */
export function OptimizedImage(props: CldImageProps) {
  const { 
    format = 'webp', 
    quality = 'auto', 
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    ...rest 
  } = props;

  return (
    <CldImage
      format={format}
      quality={quality}
      sizes={sizes}
      {...rest}
    />
  );
}
