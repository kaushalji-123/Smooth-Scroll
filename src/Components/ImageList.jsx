import Image from 'next/image' 
import React from 'react'

const ImageList = () => {
  return (
    <>
        <Image src={"https://picsum.photos/600/400?random=1"} alt="Smooth Scroll" width={600} height={400} />
        <Image src={"https://picsum.photos/600/400?random=2"} alt="Smooth Scroll" width={600} height={400} />
        <Image src={"https://picsum.photos/600/400?random=3"} alt="Smooth Scroll" width={600} height={400} />
        <Image src={"https://picsum.photos/600/400?random=4"} alt="Smooth Scroll" width={600} height={400} />
        <Image src={"https://picsum.photos/600/400?random=5"} alt="Smooth Scroll" width={600} height={400} />
        <Image src={"https://picsum.photos/600/400?random=6"} alt="Smooth Scroll" width={600} height={400} />
        <Image src={"https://picsum.photos/600/400?random=7"} alt="Smooth Scroll" width={600} height={400} />
        <Image src={"https://picsum.photos/600/400?random=8"} alt="Smooth Scroll" width={600} height={400} />
        <Image src={"https://picsum.photos/600/400?random=9"} alt="Smooth Scroll" width={600} height={400} />
        <Image src={"https://picsum.photos/600/400?random=10"} alt="Smooth Scroll" width={600} height={400} />
    </>
  )
}

export default ImageList