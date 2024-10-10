import { api } from '@/lib/axios'
import { z } from 'zod'

export const createVideoRequestSchema = z.object({
  id: z.string(),
})

export type CreateVideoRequest = z.infer<typeof createVideoRequestSchema>

export async function CreateVideo({ id }: CreateVideoRequest) {
  await api.post('/videos', {
    id,
  })
}
