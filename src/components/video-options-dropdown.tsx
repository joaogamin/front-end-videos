'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  deleteVideoAction,
  getAllVideosAction,
  updateVideoAction,
} from '@/server/actions/video'
import { usePlayerStore } from '@/zustand-store/store'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ArrowsClockwise,
  DotsThreeVertical,
  Trash,
} from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from './ui/input'

interface VideoOptionsDropdownProps {
  videoId: string
}

const updateVideoFormSchema = z.object({
  videoUrl: z.string(),
})

type UpdateVideoFormData = z.infer<typeof updateVideoFormSchema>

const VideoOptionsDropdown: React.FC<VideoOptionsDropdownProps> = ({
  videoId,
}) => {
  const [error, setError] = useState<string | null>(null)
  const [openUpdateMenu, setOpenupdateMenu] = useState(false)
  const [openDeleteMenu, setOpenDeleteMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const { setVideos, setCurrentVideoIndex, currentVideoIndex, videos } =
    usePlayerStore()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateVideoFormData>({
    resolver: zodResolver(updateVideoFormSchema),
  })

  async function handleUpdateVideo({ videoUrl }: UpdateVideoFormData) {
    const { data, success } = await updateVideoAction(videoId, videoUrl)

    if (success) {
      if (videos.length !== 0) {
        setCurrentVideoIndex(currentVideoIndex)
      } else {
        setCurrentVideoIndex(0)
      }
      const newVideos = await getAllVideosAction()
      return setVideos(newVideos.response.videos)
    }

    setError(data?.message || 'Ocorreu um erro inesperado.')

    await new Promise((resolve) => setTimeout(resolve, 3000))

    setError(null)
  }

  const deleteVideo = async () => {
    await deleteVideoAction(videoId)
    const newVideos = await getAllVideosAction()
    return setVideos(newVideos.response.videos)
  }

  return (
    <DropdownMenu open={openDropdown} modal onOpenChange={setOpenDropdown}>
      <DropdownMenuTrigger
        asChild
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <button className="pr-2">
          <DotsThreeVertical className="w-4 h-4 text-zinc-500" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Dialog
          open={openUpdateMenu}
          onOpenChange={setOpenupdateMenu}
          key="update"
        >
          <DropdownMenuLabel className="text-zinc-200">
            Opções
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger
            onClick={() => {
              setOpenDropdown(true)
              setOpenupdateMenu(true)
            }}
            className="w-full"
          >
            <DropdownMenuItem className="hover:cursor-pointer flex flex-row justify-between items-center gap-2">
              <span className="text-zinc-200">Atualizar</span>
              <ArrowsClockwise className="w-4 h-4 text-zinc-200" />
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="bg-zinc-900 border-none">
            <DialogHeader className="text-white">
              <DialogTitle>Atualizar vídeo</DialogTitle>
              <DialogDescription className="text-zinc-400">
                Esse campo serve para você atualizar o vídeo selecionado. Insira
                o link do novo vídeo desejado e clique no botão Atualizar.
              </DialogDescription>
            </DialogHeader>
            <form
              className="pb-4 flex flex-row gap-4"
              onSubmit={handleSubmit(handleUpdateVideo)}
            >
              <div className="flex flex-col gap-1 w-full">
                <Input
                  placeholder="Insira a URL do seu novo vídeo."
                  className="bg-zinc-900"
                  // type="url"
                  {...register('videoUrl')}
                />
                {errors.videoUrl && (
                  <span className="text-red-500 text-sm">
                    {errors.videoUrl.message}
                  </span>
                )}
                {error && <span className="text-red-500 text-sm">{error}</span>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded bg-blue-900 max-h-10 self-start h-full px-3 py-2 text-sm font-medium text-white hover:bg-blue-950"
              >
                Atualizar
                <ArrowsClockwise className="w-4 h-4" />
              </button>
            </form>
          </DialogContent>
        </Dialog>
        <Dialog
          open={openDeleteMenu}
          onOpenChange={setOpenDeleteMenu}
          key="delete"
        >
          <DropdownMenuSeparator />
          <DialogTrigger
            onClick={() => {
              setOpenDropdown(true)
              setOpenDeleteMenu(true)
            }}
            className="w-full"
          >
            <DropdownMenuItem className="hover:cursor-pointer flex flex-row justify-between items-center gap-2">
              <span className="text-zinc-200">Remover</span>
              <Trash className="w-4 h-4 text-red-500 z-50 group group-hover:text-red-600:" />
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="bg-zinc-900 border-none">
            <DialogHeader className="text-white">
              <DialogTitle>Remover vídeo</DialogTitle>
              <DialogDescription className="text-zinc-400">
                Você tem certeza de que deseja remover este vídeo da sua lista?
              </DialogDescription>
            </DialogHeader>
            <div className="pt-8 flex gap-4">
              <button
                onClick={() => {
                  deleteVideo()
                  setOpenDeleteMenu(false)
                  setOpenDropdown(false)
                }}
                className="ml-auto rounded bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600"
              >
                Remover vídeo
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default VideoOptionsDropdown
