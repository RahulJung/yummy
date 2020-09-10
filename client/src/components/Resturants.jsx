import React from 'react';

function Resturants(props) {
  return(
    <div>
      <ul>
        {props.data.map( (item, idx) => (
          <li key={idx}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Resturants;