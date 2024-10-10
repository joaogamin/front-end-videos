/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { getAllVideosAction } from '@/server/actions/video'
import { usePlayerStore } from '@/zustand-store/store'
import { Spinner } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {
  const {
    setIsLoading,
    setVideos,
    isLoading,
    currentVideoIndex,
    videos,
    next,
  } = usePlayerStore()

  function handlePlayNext() {
    next()
  }

  useEffect(() => {
    getAllVideosAction().then(({ response }) => setVideos(response.videos))
    setIsLoading(false)
  }, [])

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {videos.length === 0 ? (
        <div className="items-center h-full flex justify-center">
          <h2 className="my-auto">Não há nenhum vídeo adicionado</h2>
        </div>
      ) : isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner className="w-8 h-8 text-zinc-500 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${videos[currentVideoIndex]?.id}`}
          fallback={
            <Image
              className="w-full h-full object-cover"
              alt=""
              width={1280}
              height={720}
              src={`https://i.ytimg.com/vi/${videos[currentVideoIndex]?.id}/maxresdefault.jpg`}
            />
          }
        />
      )}
    </div>
  )
}

export default VideoPlayer
