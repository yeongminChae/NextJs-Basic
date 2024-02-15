"use client";

export default function ErrorOOMG() {
  return <h1>error, movie :id</h1>;
}

// page.tsx 혹은 아래 자식 페이지들에서 에러가 발생할 경우,
// 전체 애플리케이션이 죽지 않고, 이 페이지로 이동하게됨.
// 해당 error.tsx은 /app/(movies)/movies/[id]/ 안에 파일들에 대한 에러 페이지임.
