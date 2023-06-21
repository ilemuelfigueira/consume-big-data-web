"use client";

import Card from "@/components/Card";
import { getMovieListStream } from "@/services";
import { useEffect, useState, createRef } from "react";


let abortController = new AbortController();

export interface Movie {
  title: string,
  overview: string,
  genre: string,
  url: string,
}

export default function Home() {
  const [items, setItems] = useState<Movie[]>([]);

  const addItem = (item: Movie) => {
    setItems((items) => [...items, item]);
  };

  const listRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const movieList = getMovieListStream(abortController.signal);

    movieList.then(async (response) => {
      await response.pipeTo(
        new WritableStream({
          write(chunk) {
            addItem(chunk);
          },
          abort(reason) {
            console.error(reason);
          },
        }),
        {
          signal: abortController.signal,
        }
      );
    });

    return () => {
      movieList.then((response) => {
        response.cancel();
      });
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800">
      <div>
        <span className="text-4xl font-bold">Movies</span>

        <div
          className="flex flex-wrap gap-4 items-start justify-start w-full mt-8"
          ref={listRef}
        >
          {items?.map((item) => (
            <Card
              key={item.url}
              title={item.title}
              genre={item.genre}
              url={item.url}
              overview={item.overview}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
