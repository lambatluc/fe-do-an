export interface ILiveStream {
    id: string
    createdAt: string
    streamerName: string
    title: string
    titleImage: string
    categories: string
    rating: number
    national: string
    follower: number
    level: number
  }
export interface ICategory {
  id: string
  title: string
}