export interface PostProps {
  id: string;
  author: string;
  body: string;
  isPosting?: boolean;
}

export interface PostListProps {
  isPosting?: boolean;
  onStopPosting: () => void;
}

export interface CreatePostProps {
  onCreatePost: () => void;
}

export interface NewPostProps {
  onCancel: () => void;
  onAddPost: (postData: PostProps) => void;
}