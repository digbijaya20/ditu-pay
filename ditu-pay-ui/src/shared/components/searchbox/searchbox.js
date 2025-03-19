import { useState } from 'react';
import './searchbox.css';

export function SearchBox(props) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-4 search-box">
      <input type="text" className="border border-gray-200 p-2 w-full"
        placeholder={props.placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm.length > 0 ? <i className="fas fa-xmark fa-md clear-icon" onClick={() => setSearchTerm('')}></i>
        : <i className="fas fa-search fa-md search-icon"></i>
      }


    </div>
  );
}
