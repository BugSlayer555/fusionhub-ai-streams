
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BasePost {
  id: number;
  type: string;
  title: string;
  category: string;
}

interface RegularPost extends BasePost {
  type: "post";
  content: string;
  author: string;
  authorAvatar: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  image?: string;
}

interface LivePost extends BasePost {
  type: "live";
  streamer: string;
  streamImage: string;
  viewers: number;
  isLive: boolean;
  duration: string;
}

export type Post = RegularPost | LivePost;

interface PostsContextType {
  posts: Post[];
  addPost: (post: Omit<RegularPost, 'id' | 'likes' | 'comments' | 'shares' | 'timestamp' | 'author' | 'authorAvatar'>) => void;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      type: "post",
      title: "Revolutionary AI breakthrough in content creation",
      content: "Scientists have developed a new AI model that can generate highly realistic content across multiple formats including text, images, and video...",
      author: "TechNewsDaily",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      timestamp: "2 hours ago",
      likes: 342,
      comments: 67,
      shares: 23,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
      category: "Technology"
    },
    {
      id: 2,
      type: "live",
      title: "Live: Building Next-Gen AI Applications",
      streamer: "CodeWithAI",
      streamImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=300&fit=crop",
      viewers: 1847,
      category: "Programming",
      isLive: true,
      duration: "2:34:12"
    },
    {
      id: 3,
      type: "post",
      title: "The Future of Streaming: What's Coming Next",
      content: "As we look ahead to the next decade of streaming technology, several key trends are emerging that will reshape how we consume and create content...",
      author: "StreamInsights",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      timestamp: "5 hours ago",
      likes: 198,
      comments: 34,
      shares: 12,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=300&fit=crop",
      category: "Entertainment"
    }
  ]);

  const addPost = (newPost: Omit<RegularPost, 'id' | 'likes' | 'comments' | 'shares' | 'timestamp' | 'author' | 'authorAvatar'>) => {
    const post: RegularPost = {
      ...newPost,
      id: posts.length + 1,
      author: "Admin User",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      shares: 0
    };
    setPosts(prevPosts => [post, ...prevPosts]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};
