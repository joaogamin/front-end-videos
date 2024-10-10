'use client'

import { PlayCircle, Video as VideoIcon } from '@phosphor-icons/react/dist/ssr'
import VideoOptionsDropdown from './video-options-dropdown'

interface videoProps {
  isCurrent?: boolean
  onPlay: () => void
  title: string
  duration: string
  id: string
}

const VideoItem: React.FC<videoProps> = ({
  isCurrent = false,
  onPlay,
  duration,
  id,
  title,
}) => {
  return (
    <div className="flex flex-row items-center" key={id}>
      <button
        className="flex items-center justify-between w-full disabled:cursor-not-allowed pl-4 pr-2 py-2 gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
        onClick={onPlay}
        data-active={isCurrent}
        disabled={isCurrent}
      >
        <div className="flex items-center gap-4">
          {isCurrent ? (
            <PlayCircle
              className="h-full w-full text-emerald-400 max-h-4 max-w-4"
              size={32}
            />
          ) : (
            <VideoIcon
              className="w-full h-full text-zinc-500 max-h-4 max-w-4"
              size={32}
            />
          )}
          <span className="text-start line-clamp-2">{title}</span>
        </div>
        <span className="ml-auto font-mono text-xs text-zinc-500">
          {duration}
        </span>
      </button>
      <VideoOptionsDropdown videoId={id} />
    </div>
  )
}

export default VideoItem
