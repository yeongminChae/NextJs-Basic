"use client";

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Credit = ({ credits }) => {
  const [scroll, setScroll] = useState(0);
  const loader = useRef(null);

  const fetchMore = () => {
    setTimeout(() => {
      setScroll((prevScroll) => prevScroll + 4);
    }, 750);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loader.current]);

  const handleObserver = (entities) => {
    const target = entities[0];

    if (target.isIntersecting) {
      fetchMore();
    }
  };

  return (
    <CreditContainer>
      {credits.slice(0, scroll).map((credit) => (
        <CreditBox key={credit.id}>
          <Image src={credit.profile_path} alt={credit.name} />
          <CreditDescription>
            <h1>{credit.name}</h1>
            <div>
              <h3>{credit.order <= 4 ? "Main" : "Sub"}</h3>
              <h3>{credit.character}</h3>
            </div>
          </CreditDescription>
        </CreditBox>
      ))}
      {scroll >= credits.length ? (
        <h1>That's all folks</h1>
      ) : (
        <h1 className="loading" ref={loader}>
          Loading...
        </h1>
      )}
    </CreditContainer>
  );
};

const CreditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  margin: 5rem 0 5rem 0;
  overflow: hidden;
`;

const CreditBox = styled.div`
  display: flex;
  gap: 1rem;
  width: 30%;
  height: 20%;
  border: 0.1rem solid #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); /* 그림자 효과 */
  padding: 1rem;
  transition: all 0.2s ease-in-out;

  &:first-child {
    transform-origin: top;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 8rem;
  height: 12rem;
`;

const CreditDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 2.2rem;
  }

  h3 {
    &:nth-child(1) {
      font-size: 0.8rem;
    }
    &:nth-child(2) {
      font-size: 1.3rem;
      font-weight: 400;
    }
  }
`;

export default React.memo(Credit);
