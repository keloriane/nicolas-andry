export interface PostType {
  title: string;
  categories: string[];
  content: [];
  images: [{ url: string; alt: string }];
  mainImage: { url: string };
}

export interface PostDataType {
  content: {
    _key: string;
    markDefs: any[];
    children: {
      text: string;
      _key: string;
      _type: string;
      marks: any[];
    }[];
    _type: string;
    style: string;
  }[];
  categories: {
    _ref: string;
    _type: string;
    _key: string;
  }[];
  slug: {
    current: string;
    _type: string;
  };
  subtitleContent: string;
  date: string;
  publishedAt: string;
  author: {
    _ref: string;
    _type: string;
  };
  _type: string;
  title: string;
  _id: string;
  _updatedAt: string;
  images: any[];
  _rev: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
    alt: string;
  };
  _createdAt: string;
}
