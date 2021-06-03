import Client from '@/api/client'
import {
  getAuthDataFromStorage,
  getAuthDataFromStorageWithFormData
} from '@/utils/auth-data'

export const getPosts = async () => {
  return await Client.get('/posts', { headers: getAuthDataFromStorage() })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getPost = async (id: string) => {
  return await Client.get(`/posts/${id}`, { headers: getAuthDataFromStorage })
    .then((response) => {
      return response.data
    })
}

export const createPost = async (formData: any) => {
  return await Client.post(
    '/posts', formData,
    {
      headers: getAuthDataFromStorageWithFormData()
    }
  )
    .then((response) => {
      return response.data
    })
}

// import { Post } from '@/types/post'
//
// interface AxiosResponse<T> {
//   data: any;
// }
//
// export const createPost = async (formData: FormData) => {
//   return await Client.post(
//     '/posts', formData,
//     {
//       headers: getAuthDataFromStorage()
//     }
//   )
//     .then((res: AxiosResponse<Post>) => {
//       return res.data
//     })
// }
