export type PostExcerpt = {
  title: string;
  slug: {
    current: string;
    _type?: "slug";
  };
  mainImage: {
    url: string;
    alt: null | string;
  };
};

export type PostsExcerpt = {
  creations: PostExcerpt[];
};
