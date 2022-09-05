import { FC } from 'react';

import './listString.css';

interface IListString {
  list: String[];
}

const ListString: FC<IListString> = ({ list }) => {
  return (
    <ul className="listString">
      {list.map((item, idx) => {
        return <li key={idx}>{item}</li>;
      })}
    </ul>
  );
};

export default ListString;
