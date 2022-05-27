import { StoreEnum, PostsStore, Post } from '~/types/store';

import { defineStore } from 'pinia';
import { searchDb } from '~/db';

const defaultState: PostsStore = {
  Posts: [],
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
      console.log(events)
      this.Posts = events;
    },
  },
});
