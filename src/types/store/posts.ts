export interface Post {
  id?: string;
  blogID: string;
  blogHtml: string;
  blogCoverPhoto: string;
  blogCoverPhotoName: string;
  blogTitle: string;
  blogDesc: string;
  tags: string[];
  date: {
      seconds: number,
      nanoseconds: number
  };
}

export interface PostsStore {
  Posts: Post[];
}
