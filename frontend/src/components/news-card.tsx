import { NewsCardProps } from "../pages/home";

interface Props {
  data: NewsCardProps;
}

export function NewsCard(props: Props) {
  return (
    <button className="min-w-[20%] max-w-[20%] min-h-[56.5ch] max-h-[57ch] bg-zinc-300 p-1 rounded-md shadow-md flex flex-col items-center gap-1">
      <h3 className="text-zinc-900 text-center font-bold text-lg">
        {props.data.title}
      </h3>
      <img src={props.data.image_url} className="rounded-md p-2 " />
      <span className="text-left overflow-hidden ">
        {props.data.description}
      </span>
      <a
        className="underline text-blue-700 align-bottom"
        href={props.data.link}
        target="_blank"
      >
        Noticia original
      </a>
    </button>
  );
}
