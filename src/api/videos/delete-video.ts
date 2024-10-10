import { api } from '@/lib/axios'
import { z } from 'zod'

export const deleteVideoRequestSchema = z.object({
  id: z.string(),
})

export type DeleteVideoRequest = z.infer<typeof deleteVideoRequestSchema>

export async function deleteVideo({ id }: DeleteVideoRequest) {
  await api.delete(`/videos/${id}`)
}
