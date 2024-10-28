import { NewsCardProps } from "../pages/home";

interface Props {
  data: NewsCardProps;
}

export function NewsCard(props: Props) {
  const filteredTitle = props.data.title?.slice(0, 70);
  const filteredDescription = props.data.description?.slice(0, 100);

  return (
    <button className="w-[16%] h-[25rem] bg-zinc-300 p-1 rounded-md shadow-md flex flex-col items-center gap-1 relative">
      <h3 className="text-zinc-900 text-center font-bold text-lg">
        {filteredTitle}
        {props.data.title.length > 70 && "..."}
      </h3>
      <img src={props.data.image_url} className="rounded-md p-2 size-48" />
      <span className="text-left overflow-hidden ">
        {filteredDescription}
        {props.data.description?.length > 100 && "..."}
      </span>
      <a
        className="underline text-blue-700 bottom-0 relative"
        href={props.data.link}
        target="_blank"
      >
        Noticia original
      </a>
    </button>
  );
}
