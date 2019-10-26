import React from 'react';
// import style from './index.less';

export default function Framework(props) {
  const { content, loading } = props;

  function goto(title, href) {
    window.history.pushState({}, title, href);
  }

  function setInterval() {
    window.setInterval(() => {
      console.log('master interval');
    }, 1000);
  }

  return (
    <>
      <header className={style.header}>
        <nav>
          <ol>
            <li>
              <a onClick={() => goto('react app', '/react')}>react16 + antd3</a>
            </li>
            <li>
              <a onClick={() => goto('vue app', '/vue')}>vue2 + element2</a>
            </li>
          </ol>
        </nav>
      </header>
      {loading ? <div>loading...</div> : null}
      <div dangerouslySetInnerHTML={{ __html: content }} className={style.appContainer} />
    </>
  );
}
