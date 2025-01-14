import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { GenerateImageResponse } from '@/types/GenerateImage';

export const GeneratedImage: React.FC<GenerateImageResponse> = ({ url }) => {
  return (
    <div className="w-full">
      {/* ratioで画像の比率を変えられます
          使用する際に、next.config.tsに、許可する画像のホスト名を追加する必要があります
      */}
      <AspectRatio ratio={4 / 3}>
        <Image
          src={url}
          alt="Generated Image"
          className="rounded-md object-cover"
          fill
        />
      </AspectRatio>
    </div>
  );
};
