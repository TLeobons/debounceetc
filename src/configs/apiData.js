export const searchURL = 'https://api.unsplash.com/search/photos'
export const randomURL = 'https://api.unsplash.com/photos/random'

const RESULTS_PER_PAGE = 10

export const paramsData = {
  client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  count: RESULTS_PER_PAGE,
}

