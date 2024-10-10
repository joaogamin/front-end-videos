'use server'

import { CreateVideo } from '@/api/videos/create-video'

export async function createVideoAction(videoUrl: string) {
  let videoId = videoUrl.split('v=')[1]
  const ampersandPosition = videoId.indexOf('&')
  if (ampersandPosition != -1) {
    videoId = videoId.substring(0, ampersandPosition)
  }

  const response = await CreateVideo({ id: videoId })

  if (response.status != 201) {
    return { response, success: false }
  }

  return { response, success: true }
}
