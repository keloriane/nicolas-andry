export interface PostType {
  title: string;
  categories: string[];
  content: [];
  images: [{ url: string; alt: string }];
  mainImage: {url:string}
}
