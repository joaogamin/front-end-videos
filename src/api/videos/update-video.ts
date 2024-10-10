import { api } from '@/lib/axios'
import { z } from 'zod'

export const updateVideoRequestSchema = z.object({
  videoId: z.string(),
  newVideoId: z.string(),
})

export type UpdateVideoRequest = z.infer<typeof updateVideoRequestSchema>

export async function UpdateVideo({ videoId, newVideoId }: UpdateVideoRequest) {
  const { data, status } = await api.patch(`/videos/${videoId}`, {
    id: newVideoId,
  })

  return {
    data,
    status,
  }
}
