import { useParams } from "react-router-dom";

import { ContentWrapper, Item, Loading, Error } from "../../components";
import { useFetch } from "../../hooks";

export const ItemView = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `http://localhost:3001/api/items/${id}`
  );

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <ContentWrapper>
      <Item item={data.item} />
    </ContentWrapper>
  );
};
