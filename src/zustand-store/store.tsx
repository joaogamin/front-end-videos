import { create } from 'zustand'

type Video = {
  id: string
  title: string
  duration: string
  channel: string
}

export interface PlayerState {
  videos: Array<Video>
  currentVideoIndex: number

  isLoading: boolean

  setVideos: (videos: Array<Video>) => void
  setIsLoading: (isLoading: boolean) => void

  setCurrentVideoIndex: (currentVideoIndex: number) => void

  play: (videoIndex: [number]) => void
  next: () => void
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  videos: [],
  currentVideoIndex: 0,
  isLoading: true,

  setIsLoading: (isLoading: boolean) => {
    set({ isLoading })
  },

  setVideos: (videos: Array<Video>) => {
    set({ videos })
  },

  setCurrentVideoIndex: (currentVideoIndex: number) => {
    set({ currentVideoIndex })
  },

  play: (currentVideoIndex: [number]) => {
    const [videoIndex] = currentVideoIndex
    set({
      currentVideoIndex: videoIndex,
    })
  },

  next: () => {
    const { videos, currentVideoIndex } = get()
    const nextVideoIndex = currentVideoIndex + 1
    const nextVideo = videos[nextVideoIndex]
    if (nextVideo) {
      set({ currentVideoIndex: nextVideoIndex })
    } else {
      const nextVideoIndex = currentVideoIndex + 1
      const nextVideo = videos[nextVideoIndex]
      if (nextVideo) {
        set({ currentVideoIndex: 0 })
      }
    }
  },
}))
