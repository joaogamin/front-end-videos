import { env } from '@/env'
import axios from 'axios'

export const api =
  axios.create(
    {
      baseURL:
        env.BACKEND_API_URL,
      withCredentials:
        true,
    },
  )
