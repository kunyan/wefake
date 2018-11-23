import React from 'react';

export default class SearchBar extends React.PureComponent {
  render() {
    return (
      <div className="weui-search-bar">
        <form className="weui-search-bar__form">
          <div className="weui-search-bar__box">
            <i className="weui-icon-search" />
            <input
              type="search"
              className="weui-search-bar__input"
              id="searchInput"
              placeholder="搜索"
              required={true}
            />
            <a
              href="javascript:"
              className="weui-icon-clear"
              id="searchClear"
            />
          </div>
          <label className="weui-search-bar__label" id="searchText">
            <i className="weui-icon-search" />
            <span>搜索</span>
          </label>
        </form>
      </div>
    );
  }
}
