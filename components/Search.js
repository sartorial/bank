import React from "react";

function Search({search, setSearch}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
