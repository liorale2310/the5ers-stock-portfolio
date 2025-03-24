import React from 'react';
import { AutoComplete, Button } from 'antd';
import './SearchBar.css';

const SearchBar = ({
  options,
  searchText,
  onSearch,
  onChange,
  onSelect,
  onAdd,
  selectedSymbol,
}) => {
  return (
    <div className="search-bar">
      <AutoComplete
        options={options}
        className="search-input"
        onSearch={onSearch}
        onSelect={onSelect}
        value={searchText}
        onChange={(val) => {
          onChange(val);
        }}
        placeholder="Search stock"
      />
      <Button
        type="primary"
        disabled={!selectedSymbol}
        onClick={onAdd}
        className="add-button"
      >
        Add
      </Button>
    </div>
  );
};

export default SearchBar;
