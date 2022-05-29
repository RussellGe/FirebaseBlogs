export interface Post {
  id?: string;
  blogHtml: string;
  blogCoverPhoto: string;
  blogTitle: string;
  blogDesc: string;
  tags: string[];
  date: number;
}

export interface PostsStore {
  Posts: Post[];
  currentImage: string;
}
