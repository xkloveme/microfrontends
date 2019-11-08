import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import style from './index.less';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      navList: [
        {
          name: 'react',
          title: 'react app',
          href: '/react',
        },
        {
          name: 'vue',
          title: 'vue app',
          href: '/vue',
        },
      ],
    };
  }

  goto(title, href) {
    console.log(999, browserHistory.getCurrentLocation().pathname);
    window.history.pushState({}, title, href);
  }
  setInterval() {
    window.setInterval(() => {
      console.log('master interval');
    }, 1000);
  }
  render() {
    return (
      <header className={style.header}>
        <nav>
          <li>
            <a onClick={() => this.goto('react app', '/react')}>react</a>
          </li>
          <li>
            <a onClick={() => this.goto('vue app', '/vue')}>vue</a>
          </li>
        </nav>
      </header>
    );
  }
}
