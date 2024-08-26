export interface IPost {
  id?: string;
  title: string;
  description: string;
  tags: Tag[];
}
interface Tag {
  tag: string;
}
