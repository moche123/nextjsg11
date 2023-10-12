import React from 'react';
import loadingGif from '@/assets/loadinggif.gif'
import Image from 'next/image';

function LoadingBanner() {
  return (
    <Image src={loadingGif} alt="loading image" />
  )
}

export default LoadingBanner