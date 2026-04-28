'use client';

import Image from 'next/image';
import { useState } from 'react';

const logoUrl = 'https://i.postimg.cc/m2C1tC52/IMG-8926.png';

export function HasLogo({ size = 'md', centered = false }: { size?: 'sm' | 'md' | 'lg'; centered?: boolean }) {
  const [failed, setFailed] = useState(false);

  const sizes = {
    sm: { wrap: 'h-12 w-24', imgW: 96, imgH: 48, text: 'text-2xl' },
    md: { wrap: 'h-20 w-36', imgW: 144, imgH: 80, text: 'text-4xl' },
    lg: { wrap: 'h-28 w-52', imgW: 208, imgH: 112, text: 'text-6xl' },
  }[size];

  return (
    <div className={`${sizes.wrap} ${centered ? 'mx-auto' : ''} relative flex items-center justify-center`}>
      {failed ? (
        <div className="text-center">
          <div className={`gold-text ${sizes.text} font-extrabold tracking-[0.24em]`}>HAS</div>
          <div className="mt-1 text-[10px] tracking-[0.3em] text-[#b9943a] md:text-xs">MEDIA</div>
        </div>
      ) : (
        <Image
          src={logoUrl}
          alt="HAS MEDIA logo"
          width={sizes.imgW}
          height={sizes.imgH}
          className="h-full w-auto object-contain"
          onError={() => setFailed(true)}
          unoptimized
        />
      )}
    </div>
  );
}
