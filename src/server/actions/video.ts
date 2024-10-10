'use server'

import { CreateVideo } from '@/api/videos/create-video'
import { deleteVideo } from '@/api/videos/delete-video'
import { getAllVideos } from '@/api/videos/get-videos'
import { UpdateVideo } from '@/api/videos/update-video'
import { getVideoIdByUrl } from '@/lib/utils'

export async function createVideoAction(videoUrl: string) {
  const videoId = getVideoIdByUrl(videoUrl)
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

export async function updateVideoAction(videoId: string, newVideoUrl: string) {
  const newVideoId = getVideoIdByUrl(newVideoUrl)
  const response = await UpdateVideo({ videoId, newVideoId })

  return { response, success: true }
}
