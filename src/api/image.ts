import axios from 'axios';
export interface ImageOption {
    id: string
    author: string
    height: number
    width: number
    url: string
    download_url: string
}
export const getImages = (): Promise<{data: ImageOption[]}> => {
  return axios.get('https://picsum.photos/v2/list');
};
