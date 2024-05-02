import Col from "../Col";
interface PostNavigationProps {
    postsTitle: { title: string; slug: { current: string } }[];
    setActiveSlug: (slug: string) => void;
  }
  
  const PostNavigation: React.FC<PostNavigationProps> = ({ postsTitle, setActiveSlug }) => (
    <Col column={4} span={18}>
      <nav>
        <ul>
          {postsTitle.map((post, index) => (
            <li key={index} onClick={() => setActiveSlug(post.slug.current)}>
              {post.title}
            </li>
          ))}
        </ul>
      </nav>
    </Col>
  );
  export default PostNavigation