"use client";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { PaginationAtom } from "../app/context/recoil/atoms";

const PaginationSimilarMovie = ({ similarMovies, id }) => {
  const pagination = useRecoilValue(PaginationAtom);
  const setPaginationAtom = useSetRecoilState(PaginationAtom);

  const totalPages =
    similarMovies.length / 5 ? Math.floor(similarMovies.length / 5) : 1;
  const totalPagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const onClickPagination = (page: number) => {
    setPaginationAtom(page);
  };

  useEffect(() => {
    setPaginationAtom(1);
  }, [id]);

  return (
    <PaginationBox>
      {totalPagesArray.map((page) => (
        <PaginationNum
          $active={pagination === page}
          onClick={() => onClickPagination(page)}
          key={page}
        >
          {page}
        </PaginationNum>
      ))}
    </PaginationBox>
  );
};

const PaginationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: red;
`;

const PaginationNum = styled.span<{ $active: boolean }>`
  cursor: pointer;
  text-decoration: ${(props) => (props.$active ? "underline" : "none")};
  text-underline-position: under;
  text-underline-offset: 0.2rem;
`;

export default PaginationSimilarMovie;
