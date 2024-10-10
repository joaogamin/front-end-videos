import { Spinner } from '@phosphor-icons/react/dist/ssr'

const VideoSkeleton: React.FC =
  () => {
    return (
      <div className="w-full bg-zinc-950 aspect-video">
        <div className="flex h-full items-center justify-center">
          <Spinner className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      </div>
    )
  }

export default VideoSkeleton
