
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css'
import Pagination from '../components/UI/Pagination';
import { LOAD_USERS } from '../redux/redusers/people/actions';


function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.people);
  const people = data.data.results

  const changePage = (page) => dispatch({
    type: LOAD_USERS, 
    payload: {
      page: page,
      search: data.search
  }})

  const changeSearch = (value) => dispatch({
    type: LOAD_USERS,
    payload: {
      page: 1,
      search: value
    }
  }) 
  

  return (
    <div className="App">
      <h1 >Star Wars</h1>
      <div className="search">
        <input onInput={(e) => changeSearch(e.target.value)} defaultValue={data.search} type="search"/>
        <i className="fa fa-search"></i>  
      </div>
        <div style={{flex: '1 1 auto'}}>
          {
            data.loading ? (
              <div>loading...</div>
            ) : (
              <>
                <div className="table" style={{margin: '0 auto'}}>
                  <div className="table-row" style={{fontWeight: '800'}}>
                    <div className="table-cell">
                      Name
                    </div>
                    <div className="table-cell">
                      Gender
                    </div>
                    <div className="table-cell">
                      Mass
                    </div>
                    <div className="table-cell">
                      Height
                    </div>
                    <div className="table-cell">
                      Eye color
                    </div>
                    <div className="table-cell">
                      Hair color
                    </div>
                    <div className="table-cell">
                      Skin color
                    </div>
                    <div className="table-cell">
                      Birth year
                    </div>
                    <div className="table-cell">
                      Detail
                    </div>
                  </div>
                  {   
                    people.map((persone, index) => {
                      const id = persone.url.replaceAll(/\D/g, '');

                      return  (<div key={index} className="table-row">
                        <div className="table-cell">
                         {persone.name}
                        </div>
                        <div className="table-cell">
                        {persone.gender}
                        </div>
                        <div className="table-cell">
                        {persone.mass}
                        </div>
                        <div className="table-cell">
                        {persone.height}
                        </div>
                        <div className="table-cell">
                        {persone.eye_color}
                        </div>
                        <div className="table-cell">
                        {persone.hair_color}
                        </div>
                        <div className="table-cell">
                        {persone.skin_color}
                        </div>
                        <div className="table-cell">
                        {persone.birth_year}
                        </div>
                        <div className="table-cell">
                          <Link to={`/people/${id}`}>
                            Details
                          </Link>
                        </div>
                      </div>)
                    })
                  }
                </div>
              </>
            )
          }
        </div>
              <Pagination
                click={changePage}
                page={data.page}
                count={data.data.count}

              />
    </div>
  );
}
 
export default App;
