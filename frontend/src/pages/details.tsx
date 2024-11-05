import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNews } from "../api/getNews";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { NewsCardProps } from "./home";

export function Details() {
  interface AllDataProps extends NewsCardProps {
    content: string;
  }

  const { articleId, category, query } = useParams();

  const [news, setNews] = useState<AllDataProps>();

  useEffect(() => {
    getNews(query, category).then((res) => {
      const filteredArray = res.results.filter(
        (item: NewsCardProps) => item.article_id === articleId
      );
      console.log(res.results);
      setNews(filteredArray[0]);
    });
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <section className="flex w-[90%] bg-zinc-300 mt-20 p-10 rounded-md">
          <img
            src={news?.image_url}
            alt="Imagem da noticia"
            className="w-[900px] h-72"
          />
          <div>
            <h1>{news?.title}</h1>
            <span>{news?.description}</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
