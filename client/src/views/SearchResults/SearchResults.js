import { useSearchParams } from "react-router-dom";

import { ContentWrapper, ItemCard, Loading, Error } from "../../components";
import { useFetch } from "../../hooks";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const { data, loading, error } = useFetch(
    `http://localhost:3001/api/items?q=${search}`
  );

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <ContentWrapper breadcrumb={data.categories}>
      {data.items.length > 0
        ? data.items
            .slice(0, 4)
            .map((item) => <ItemCard key={item.id} item={item} />)
        : "No Hubieron resultados"}
    </ContentWrapper>
  );
};
