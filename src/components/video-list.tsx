'use client'

import { usePlayerStore } from '@/zustand-store/store'
import { Video } from '@phosphor-icons/react/dist/ssr'
import VideoOptionsDropdown from './video-options-dropdown'

const VideoList: React.FC = () => {
  const { videos } = usePlayerStore()
  return (
    <div>
      {videos.map((video) => {
        return (
          <div className="flex flex-row items-center" key={video.id}>
            <button className="flex items-center justify-between w-full pl-4 pr-2 py-2 gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100">
              <div className="flex items-center gap-4">
                <Video
                  className="text-zinc-500 w-full h-full max-w-4 max-h-4"
                  size={16}
                />
                <span className="text-start line-clamp-2">{video.title}</span>
              </div>
              <span className="ml-auto font-mono text-xs text-zinc-500">
                {video.duration}
              </span>
            </button>
            <VideoOptionsDropdown videoId={video.id} />
          </div>
        )
      })}
    </div>
  )
}

export default VideoList
