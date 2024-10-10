'use client'

import { usePlayerStore } from '@/zustand-store/store'

const VideoInformations: React.FC = () => {
  const { currentVideoIndex, videos } = usePlayerStore()

  return (
    <div className="flex flex-col gap-1">
      {videos.length === 0 ? (
        <h1 className="text-2xl font-bold line-clamp-2">
          Nenhum vídeo adicionado
        </h1>
      ) : (
        <h1 className="text-2xl font-bold line-clamp-2">
          {videos[currentVideoIndex]?.title}
        </h1>
      )}
      <span className="text-sm text-zinc-400">
        {videos[currentVideoIndex]?.channel}
      </span>
    </div>
  )
}

export default VideoInformations
