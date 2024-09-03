export type Creation = {
  title: string;
  introductionText: { children: { text: string }[] }[];
  imageHeaderLeft: any;
  imageHeaderRight: any;
  posts: {
    title: string;
    slug: { current: string };
    mainImage: { url: string; alt: string };
  }[];
};
