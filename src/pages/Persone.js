import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOAD } from "../redux/redusers/load/actions";




function Persone() {

  const [films, setFilms] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(state => state.persone);
  const persone = data.data
  

 
  if(data.loading){
    return(
      <h1>Loading...</h1>

    )
  }

  return (
    <div style={{margin: '0 auto', maxWidth: '1000px', paddingTop: '20px'}}>
      <Link style={{marginTop: '30px', color: '#fff', fontSize: '20px',}} to='/'>
        Back
      </Link>
      <h1>
        {persone.name}
      </h1>
      <div className="persone__desc">
        <p>
          <span>Birth year: </span> <span>{persone.birth_year}</span>
        </p>
        <p>
          <span>Created: </span> <span>{persone.created}</span>
        </p>
        <p>
          <span>Edited: </span> <span>{persone.edited}</span>
        </p>
        <p>
          <span>Gender: </span> <span>{persone.gender}</span>
        </p>
      </div>
    </div>
  );
}
 
export default Persone;
