import React from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams();
//   console.log("Param:", id);
  return <div>PostPage</div>;
}
