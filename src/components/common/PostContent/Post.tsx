import { PostType } from "@/types";
import Col from "../Col";
import Image from "next/image";
import { PortableText } from "next-sanity";

interface PostProps {
    activePost: PostType | null;
    loading: boolean;
  }
  
  const Post: React.FC<PostProps> = ({ activePost, loading }) => {
    if (loading) return <p>Loading...</p>;
    if (!activePost) return <p>No data available.</p>;
  
    return (
      <>
        <Col
          column={[2, 2, 2, 2]}
          span={[22, 22, 11, 11]}
          className="text_header_wrapper"
        >
          <PortableText value={activePost.content || []} />
        </Col>
        <Col
          column={[2, 2, 13, 13]}
          span={[22, 22, 10, 10]}
          className="image_header_wrapper"
        >
          {activePost ? (
            <Image
              src={activePost.mainImage.url}
              fill
              style={{ objectFit: 'contain' }}
              alt={activePost.title}
              priority={true}
              sizes="100%"
            />
          ) : (
            <p>Loading main image...</p>
          )}
        </Col>
      </>
    );
  };
  export default Post;