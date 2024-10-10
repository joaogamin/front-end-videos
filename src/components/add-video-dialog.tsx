'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { createVideoAction, getAllVideosAction } from '@/server/actions/video'
import { usePlayerStore } from '@/zustand-store/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircle } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from './ui/input'

const createVideoFormSchema = z.object({
  videoUrl: z.string().url(),
})

type CreateVideoFormData = z.infer<typeof createVideoFormSchema>

const AddVideoDialog: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const { setVideos } = usePlayerStore()

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<CreateVideoFormData>({
    resolver: zodResolver(createVideoFormSchema),
  })

  async function handleCreateVideo({ videoUrl }: CreateVideoFormData) {
    const { response, success } = await createVideoAction(videoUrl)

    if (success) {
      setOpen(false)
      const newVideos = await getAllVideosAction()
      setVideos(newVideos.response.videos)
      return router.refresh()
    }

    setError(response.data?.message || 'Ocorreu um erro inesperado.')

    await new Promise((resolve) => setTimeout(resolve, 3000))

    setError(null)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 rounded bg-blue-900 max-w-40 self-center w-full px-3 py-2 text-sm font-medium text-white hover:bg-blue-950">
          <PlusCircle className="w-4 h-4" />
          Adicionar vídeo
        </button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border-none">
        <DialogHeader className="text-white">
          <DialogTitle>Adicionar vídeo</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Esse campo serve para você adicionar um vídeo do YouTube para a
            lista. Insira o link do vídeo desejado e clique no botão Adicionar.
          </DialogDescription>
        </DialogHeader>
        <form
          className="pb-4 flex flex-row gap-4"
          onSubmit={handleSubmit(handleCreateVideo)}
        >
          <div className="flex flex-col gap-1 w-full">
            <Input
              placeholder="Insira a URL do seu vídeo aqui."
              className="bg-zinc-900"
              type="url"
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
            className="flex items-center gap-2 rounded bg-blue-900 px-3 py-2 text-sm font-medium text-white hover:bg-blue-950 max-h-10 self-start h-full"
          >
            <PlusCircle className="w-4 h-4" />
            Adicionar
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddVideoDialog
