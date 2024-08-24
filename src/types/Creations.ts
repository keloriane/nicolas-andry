export type Creation = {
  title: string;
  introductionText: { children: { text: string }[] }[];
  imageHeader: any;
  posts: {
    title: string;
    slug: { current: string };
    mainImage: { url: string; alt: string };
  }[];
};
