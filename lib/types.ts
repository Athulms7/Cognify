export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  order: number;
  createdAt: string;
}

export interface CourseType {
  id: string;
  title: string;
  createdAt: string;
  videos: Video[];
}