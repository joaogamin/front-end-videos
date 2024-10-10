'use client'

import { usePlayerStore } from '@/zustand-store/store'
import Video from './video-item'

const VideoList: React.FC = () => {
  const { videos, currentVideoIndex, play } = usePlayerStore()

  return (
    <div>
      {videos.map((video, index) => {
        const isCurrent = currentVideoIndex === index
        const onPlay = () => play([index])
        return (
          <Video
            isCurrent={isCurrent}
            onPlay={onPlay}
            title={video.title}
            duration={video.duration}
            id={video.id}
            key={video.id}
          />
        )
      })}
    </div>
  )
}

export default VideoList
