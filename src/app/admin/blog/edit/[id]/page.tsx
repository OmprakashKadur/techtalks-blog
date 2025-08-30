import { BlogEditor } from '@/components/BlogEditor';

interface EditBlogPostPageProps {
  params: {
    id: string;
  };
}

export default function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  return <BlogEditor postId={params.id} />;
}
