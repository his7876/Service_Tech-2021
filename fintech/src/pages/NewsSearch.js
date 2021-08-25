import React, { useState } from "react";
import Header from "../component/Header";
import SearchInput from "../component/newsSearch/SearchInput";
import axios from "axios";
import NewsList from "../component/newsSearch/NewsList";

const NewsSearch = () => {
  const [serachText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchTextChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const handleSearchButtonClick = () => {
    console.log(serachText);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${serachText}&from=2021-08-21&sortBy=publishedAt&apiKey=0dfeeecc456a4465995b19cd4503ff17&language=ko`
      )
      .then((response) => {
        console.log(response.data.articles);
        setSearchResult(response.data.articles);
      });
  };

  return (
    <div>
      <Header title="뉴스 검색"></Header>
      <SearchInput
        handleInput={handleSearchTextChange}
        handleClick={handleSearchButtonClick}
      ></SearchInput>
      <NewsList searchResult={searchResult}></NewsList>
    </div>
  );
};

export default NewsSearch;
