'use client'
import { makeRequestClient } from '@/utils/apiService/client';
import API_ROUTES from '@/utils/constants/apiRoutes';
import React from 'react';
import useSWR from 'swr';
import type { Posts } from './interfaces';

export default function Posts() {
  const { data, isLoading } = useSWR<Posts[], Error>(
    API_ROUTES.posts,
    (url) => {
      return makeRequestClient({
        url: url,
        method: "GET",
      })
        .then((res) => {
          console.log(res[0]);
          return res;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    { revalidateOnFocus: false }
  );

  const postsArray = data ? Object.values(data) : [];
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (data) {
    return (
      <div>
        <h1>WordPress Posts</h1>

        {postsArray.map((post) => (
          <div key={post.id}>
            <h2>{post.title?.rendered || 'Untitled'}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content?.rendered || 'No content available' }} />
          </div>
        ))}
      </div>
    );
  }
}
