import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar({searchedItems, setSearchedItems, setMovie}) {
    const [formData, setFormData] = useState({inp: ""})
    const {inp} = formData;

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev, [e.target.name] : e.target.value
        }))
    }

    const searchHandler = (e) => {
        e.preventDefault();
        axios.get(`https://api.tvmaze.com/search/shows`, {
            params : {
                q : inp
            }
           
        })
        .then((res) => res.data.map((i) => setSearchedItems([i.show])))
        .catch((err) => console.log(err.msg))
        setMovie()
        navigate('/')
    }

    useEffect(() => {

    },[searchedItems])
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        
        
      </ul>
      <form className="form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="inp" value={inp} onChange={onChange} />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={searchHandler}> Search</button>
      </form>
    </div>
  </nav>
  )
}
