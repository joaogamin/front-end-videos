import VideoSkeleton from '@/components/video-skeleton'
import { Video } from '@phosphor-icons/react/dist/ssr'

import dynamic from 'next/dynamic'

const VideoOptionsDropdown =
  dynamic(
    () =>
      import(
        '@/components/video-options-dropdown'
      ),
  )

const AddVideoDialog =
  dynamic(
    () =>
      import(
        '@/components/add-video-dialog'
      ),
  )

const VideoPlayer =
  dynamic(
    () =>
      import(
        '@/components/video'
      ),
    {
      ssr: false,
      loading:
        () => (
          <VideoSkeleton />
        ),
    },
  )

export default async function HomePage() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex flex-row-reverse justify-center items-center">
      <div className="flex max-w-[1100px] w-full mx-auto px-5 2xl:px-0 flex-col gap-6">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">
              Título
              do
              vídeo
            </h1>
            <span className="text-sm text-zinc-400">
              Módulo
              do
              vídeo
            </span>
          </div>

          <AddVideoDialog />
        </div>

        <main className="relative flex flex-col gap-1 md:flex-row overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow md:pr-80">
          <div className="md:flex-1">
            <VideoPlayer />
          </div>
          <div className="md:w-80 w-full divide-y-2 divide-zinc-900 border-l border-zinc-800 bg-zinc-900 md:absolute md:top-2 md:bottom-0 md:right-0 md:overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-900">
            <h2 className="text-zinc-50 text-lg border-b border-zinc-800 px-4 py-2">
              Listagem
              de
              vídeos
            </h2>
            <div className="flex items-center flex-row">
              <button className="flex items-center justify-between w-full pl-4 pr-2 py-2 gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100">
                <div className="flex items-center gap-4">
                  <Video className="w-4 h-4 text-zinc-500" />

                  <span>
                    Vídeo
                    1
                  </span>
                </div>
                <span className="ml-auto font-mono text-xs text-zinc-500">
                  03:54
                </span>
              </button>
              <VideoOptionsDropdown />
            </div>
            <div className="flex items-center flex-row">
              <button className="flex items-center justify-between w-full pl-4 pr-2 py-2 gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100">
                <div className="flex items-center gap-4">
                  <Video className="w-4 h-4 text-zinc-500" />

                  <span>
                    Vídeo
                    1
                  </span>
                </div>
                <span className="ml-auto font-mono text-xs text-zinc-500">
                  03:54
                </span>
              </button>
              <VideoOptionsDropdown />
            </div>
            <div className="flex items-center flex-row">
              <button className="flex items-center justify-between w-full pl-4 pr-2 py-2 gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100">
                <div className="flex items-center gap-4">
                  <Video className="w-4 h-4 text-zinc-500" />

                  <span>
                    Vídeo
                    1
                  </span>
                </div>
                <span className="ml-auto font-mono text-xs text-zinc-500">
                  03:54
                </span>
              </button>
              <VideoOptionsDropdown />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
