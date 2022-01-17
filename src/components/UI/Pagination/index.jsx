

import { useDispatch, useSelector } from 'react-redux';
import './pagination.css'


function Pagination({
  count,
  click,
  page
}) {
  
  const limit = Math.ceil(count/10)
 


  return (
    <>
    {
      count ? (
        <ul className="pagination">
          <li onClick={page != 1 ? () => click(page - 1) : null}>«</li>
            {
              [...Array(limit)].map((item, index) => (
                <li 
                  onClick={page!==index+1 ? () => click(index + 1) : null}
                  key={index}
                  className={index + 1 == page ? 'active' : null}
                >
                    {index+1}
                  </li>
              ))
            }
          <li  onClick={page != limit ? () => click(page + 1) : null}>»</li>
        </ul>
        ) : (
          null
      )
    }
    </>
  );
}
 
export default Pagination;
