"use client";

import Image from "next/image";
import { Getvideos } from "@/app/api/videos/route";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  order: number;
}

export default function VideoGrid() {
  const searchParams = useSearchParams();
  const courseid = searchParams.get("courseid") || "";
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const data = await Getvideos(courseid);
        setVideos(data || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, [courseid]);

  return (
    <div className="dark:bg-black min-h-screen ml-40 mt-20 flex flex-col items-center p-6 w-300">

        {loading ? (
          <p className="text-gray-500"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 " >
    <Skeleton className="h-[300px] w-60 rounded-xl" />
    <Skeleton className="h-[300px] w-60 rounded-xl" />
    <Skeleton className="h-[300px] w-60 rounded-xl" />
  </div></p>
        ) : videos.length === 0 ? (
          <p className="text-gray-500">No videos found for this course.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos
              .sort((a, b) => a.order - b.order)
              .map((video) => (
                <a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={480}
                      height={270}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                  </div>
                  <div className="p-4 bg-gray-500">
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {video.title}
                    </h2>
                  </div>
                </a>
              ))}
          </div>
        )}
      
    </div>
  );
}
