import VideoSkeleton from '@/components/video-skeleton'
import dynamic from 'next/dynamic'

const VideoInformations = dynamic(
  () => import('@/components/video-informations'),
)

const AddVideoDialog = dynamic(() => import('@/components/add-video-dialog'))

const VideoPlayer = dynamic(() => import('@/components/video-player'), {
  loading: () => <VideoSkeleton />,
})

const VideoList = dynamic(() => import('@/components/video-list'))

export default async function Home() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex flex-row-reverse justify-center items-center">
      <div className="flex max-w-[1100px] w-full mx-auto px-5 2xl:px-0 flex-col gap-6">
        <div className="flex items-center justify-between gap-8">
          <VideoInformations />

          <AddVideoDialog />
        </div>

        <main className="relative flex flex-col gap-1 md:flex-row overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow md:pr-80">
          <div className="md:flex-1">
            <VideoPlayer />
          </div>
          <div className="md:w-80 w-full divide-y-2 divide-zinc-900 border-l border-zinc-800 bg-zinc-900 md:absolute md:top-2 md:bottom-0 md:right-0 md:overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-900">
            <h2 className="text-zinc-50 text-lg border-b border-zinc-800 px-4 py-2">
              Listagem de vídeos
            </h2>

            <VideoList />
          </div>
        </main>
      </div>
    </div>
  )
}
