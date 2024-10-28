'use client'
import { makeRequestClient } from '@/utils/apiService/client';
import API_ROUTES from '@/utils/constants/apiRoutes';
import React from 'react';
import useSWR from 'swr';
import type { Posts } from './interfaces';

export default function Posts() {
  console.log(API_ROUTES.posts);
  const { data: posts } = useSWR<Posts[], Error>(
    API_ROUTES.posts,
    (url) => {
      return makeRequestClient({
        url: url,
        method: "GET",
      })
        .then((res) => {
          return res.results;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    { revalidateOnFocus: false }
  );

  return (
    <div>
      <h1>WordPress Posts</h1>
      <ul>
        {posts?.map((post: Posts) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>


    </div>
  );
}
