
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const BlurImage = ({ src, alt, className, ...props }: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoading(true);
    
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={cn("overflow-hidden relative", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted/30 animate-pulse" />
      )}
      <img
        src={imgSrc || src}
        alt={alt}
        className={cn(
          "transition-all duration-500 ease-out w-full h-full object-cover",
          isLoading ? "scale-105 blur-md" : "scale-100 blur-0"
        )}
        {...props}
      />
    </div>
  );
};

export default BlurImage;
