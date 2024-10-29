import { useParams } from "react-router-dom";

export default function Products() {
  const { id } = useParams();
  return <div>This is Product List of id {id}</div>;
}
