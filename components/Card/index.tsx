interface CardProps {
  title: string;
  overview: string;
  genre: string;
  url: string;
}

function Card({ title, overview, genre, url }: CardProps) {
  return (
    <div
      onClick={() =>
        window.open(`https://www.google.com/search?q=${title}`, "_blank")
      }
      title={overview}
      className="flex flex-col w-64 h-fit leading-tight justify-start items-start border-none rounded-sm hover:cursor-pointer"
    >
      <img
        loading="lazy"
        src={url}
        alt={title}
        className="w-64 h-60 shadow-sm rounded"
      />
      <span className="text-lg font-semibold text-slate-200">{title}</span>
      <span className="text-sm font-normal text-slate-300">{genre}</span>
    </div>
  );
}

export default Card;
