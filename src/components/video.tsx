'use client'
import Image from 'next/image'
import ReactPlayer from 'react-player'
const Video: React.FC =
  () => {
    return (
      <div className="w-full bg-zinc-950 aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          url="https://www.youtube.com/watch?v=mZ0n03BHx0Q"
          fallback={
            <Image
              className="w-full h-full object-cover"
              alt=""
              width={
                1280
              }
              height={
                720
              }
              src="https://i.ytimg.com/vi/mZ0n03BHx0Q/maxresdefault.jpg"
            />
          }
        />
      </div>
    )
  }
export default Video
