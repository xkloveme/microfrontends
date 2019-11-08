import React from 'react';
import Header from './react/header';
import Login from './react/login';

export default function Framework(props) {
  const { content, loading } = props;
  return (
    <>
      <Header />
      <Login />
      <h1>头部</h1>
      {loading ? <div>loading...</div> : null}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
