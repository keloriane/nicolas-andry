import { useState } from "react";
import Col from "../Col";
import Image from "next/image";


interface ImageGridProps {
    formattedImages:[{ url: string; alt: string; metadata: any; }]
    onImageClick: Function; 
    index:number
    startIndex:number
  }
  
  const ImageGrid: React.FC<ImageGridProps> = ({ formattedImages, onImageClick , index , startIndex }) => {
    if (!formattedImages.length) return null;
    const columns = [];
    const imagesPerColumn = Math.ceil(formattedImages.length >= 6 ? formattedImages.length / 5 : formattedImages.length / 3);
  
    for (let i = 0; i < 5; i++) {
      const startIndex = i * imagesPerColumn;
      const endIndex = Math.min((i + 1) * imagesPerColumn, formattedImages.length);
      columns.push(
        <Col key={i} column={[1, 1, i * 5 + 1]} span={[24, 24, 5]}>
          {formattedImages.slice(startIndex, endIndex).map((img, index) => (
            <div className="image_wrapper" key={index}>
              <Image
                style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                sizes="(max-width: 800px) 100vw, 800px"
                alt={img.alt || ''}
                src={img.url}
                onClick={() => onImageClick(index + startIndex)}
                width={500}
                height={620}
                loading="lazy"
                className="image_grid_item"
              />
            </div>
          ))}
        </Col>,
      );
    }
    return <>{columns}</>;
  };

  export default ImageGrid;