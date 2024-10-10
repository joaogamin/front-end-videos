'use server'

import { CreateVideo } from '@/api/videos/create-video'
import { deleteVideo } from '@/api/videos/delete-video'
import { getAllVideos } from '@/api/videos/get-videos'

export async function createVideoAction(videoUrl: string) {
  let videoId = videoUrl.split('v=')[1]
  const ampersandPosition = videoId.indexOf('&')
  if (ampersandPosition != -1) {
    videoId = videoId.substring(0, ampersandPosition)
  }
  console.log(videoId)

  const response = await CreateVideo({ id: videoId })

  if (response.status != 201) {
    return { response, success: false }
  }

  return { response, success: true }
}

export async function getAllVideosAction() {
  const response = await getAllVideos()

  return { response, success: true }
}

export async function deleteVideoAction(id: string) {
  const response = await deleteVideo({ id })

  return { response, success: true }
}
