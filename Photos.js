import React from 'react';
import useFetch from './useFetch';
import './Photos.css';

const COLORS = [
  '#FF9999', '#3399FF', '#66FFCC', '#99CCFF',
  '#33CC66', '#FF3333', '#0033A0', '#FFCCFF',
  '#FFFF66', '#FF9966', '#CCCCFF', '#66FF66'
];

const Photos = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=12');

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <><h1 className="heading">Photos</h1><div className="grid">
          {data.map((item, index) => (
              <div key={item.id} className="card">
                  <div className="color-box" style={{ backgroundColor: COLORS[index % COLORS.length] }}>
                      <p className="box-text">600 x 600</p>
                  </div>
                  <p>{item.title}</p>
              </div>
          ))}
      </div></>
  );
};

export default Photos;
