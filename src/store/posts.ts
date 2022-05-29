import { StoreEnum, PostsStore, Post } from '~/types/store';

import { defineStore } from 'pinia';
import { searchDb, setNewData } from '~/db';

const defaultState: PostsStore = {
  Posts: [],
  currentImage: '',
  PagerConfig: {
    current: 1,
    total: 0,
    pageSize: 4,
  },
};

export const usePostStore = defineStore(StoreEnum.Posts, {
  state: () => defaultState,
  actions: {
    async getPosts() {
      const posts = await searchDb('Posts');
      const events: Post[] = [];
      posts.forEach((doc) => {
        let appData = doc.data() as Post;
        appData.id = doc.id;
        events.push(appData);
      });
      console.log(events);
      this.Posts = events;
      this.PagerConfig.total = this.Posts.length;
    },
    async setPost(params: Post) {
      setNewData('Posts', params);
    },
  },
  getters: {
    showPosts(): Post[] {
      return this.Posts.slice(
        (this.PagerConfig.current - 1) * this.PagerConfig.pageSize,
        this.PagerConfig.current * this.PagerConfig.pageSize,
      );
    },
  },
});
