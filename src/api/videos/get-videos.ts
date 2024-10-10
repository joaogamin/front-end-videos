import { api } from '@/lib/axios'
import { z } from 'zod'

export const getAllVideosResponseSchema = z.object({
  status: z.number(),
  videos: z.array(
    z.object({
      channel: z.string(),
      duration: z.string(),
      id: z.string(),
      title: z.string(),
    }),
  ),
})

export type GetAllVideosResponse = z.infer<typeof getAllVideosResponseSchema>

export async function getAllVideos() {
  const response = await api.get<GetAllVideosResponse>('/videos')

  return response.data
}
