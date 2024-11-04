import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useParams, useSearchParams } from "react-router-dom";
import { getNews } from "../api/getNews";
import { NewsCardProps } from "./home";

export function Details() {
  interface AllDataProps extends NewsCardProps {
    content: string;
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const { articleId } = useParams();

  const [news, setNews] = useState<AllDataProps>();

  const [category, setCategory] = useState<string | null>("");
  const [query, setQuery] = useState<string | null>("");

  useEffect(() => {
    if (localStorage.getItem("category"))
      setCategory(localStorage.getItem("category"));
    if (localStorage.getItem("query")) setQuery(localStorage.getItem("query"));

    updateUrlParams(
      localStorage.getItem("query"),
      localStorage.getItem("category")
    );
    console.log(searchParams.get("query"));

    if (searchParams.get("query")) localStorage.removeItem("query");
    if (searchParams.get("category")) localStorage.removeItem("category");

    getNews(query, category).then((res) => {
      const filteredArray = res.results.filter(
        (item: NewsCardProps) => item.article_id === articleId
      );
      setNews(filteredArray[0]);
    });
  }, []);

  function updateUrlParams(
    newQuery: string | null,
    newCategory: string | null
  ) {
    const params: any = {};
    if (newQuery) params.query = newQuery;
    if (newCategory) params.category = newCategory;

    setSearchParams(params);
  }

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
