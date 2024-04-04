import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Footer from '../components/partials/Footer';
import { selectUsers } from '../redux/userSlice'
import { useSelector } from 'react-redux'
import Login from './authPages/Login';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Home() {
    document.title = "VIM Corn. - home | movies"
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const user = useSelector(selectUsers);
    useEffect(()=>{
      const fetchMovies = async()=>{
        try{
          const res = await axios.get('http://localhost:3200/api/fetch/movies/all')
          setMovies(res.data)
        }catch(err){
          console.log(err.message)
          setIsLoading(true);
        } finally{
          setTimeout(() => {
            setIsLoading(false)
          }, 1000);
        }
      }
      fetchMovies()
    },[])

    return (
      <>
          <main className="bottom-part">
          <h2 className="RecomendedText">Latest movies and web serises </h2>
          <section className='mt-3'>
            <Link><div className='container-xxl bg-primary p-2 text-center'> <i className='mx-2 bi bi-arrow-right-circle'></i>  Join Our Official Telegram Channel <i className='mx-2 bi bi-arrow-left-circle'></i> </div></Link>
            <div className='container-xxl  movieToggler p-0 py-1 mt-5'>
              <div className=' d-flex align-item-center '>
                <Link className='me-3' style={{background:'darkorange'}}>Recomended <i className='bi  bi-caret-right-fill'></i> </Link>
                <div className='d-flex align-item-center'>
                  <Link>Featured</Link>
                  <Link>Most Fevorite</Link>
                  <Link>Top imdb</Link>
                </div>
              </div>
              <div>
                <form className='movieSearch '>
                  <input type="search" placeholder='Search movies..' name='search' id='search' required/>
                  <label htmlFor='search'  className=" p-1 bi bi-search " type="submit" style={{color:"lightgrey"}}></label>
                </form>
              </div>
            </div>
            <div className="cntr container-xxl">
              {isLoading?
                movies.map((elm)=>{
                  return (<div className='grid-box placeholder-wave' style={{background:'grey',borderRadius:"15px"}}></div>)
                })
              :
              movies.map((elm)=>{
                return(
                  <>
                  <div className="grid-box" key={elm.id}>
                    <Link to={`/movies/explore/${elm.id}`} style={{textDecoration:'none'}}>
                      <div className="moviePic  d-flex flex-column justify-content-between" style={{backgroundImage:`url('${elm.thumbnail}')`, backgroundSize:'cover'}}>
                        <p className='type'  style={{color:'white' ,width:'fit-content'}}>{elm.language}</p>
                      <p className='text-center m-0' style={{color:'white'}}>{elm.title}</p>
                      </div>
                    </Link>
                  </div>
                  </>
                )
              })}
            </div>
            <div className='container-xxl movieToggler p-0 mt-5'>
              <Link className='' style={{background:'darkorange'}}>Latest web serises <i class="bi bi-caret-right-fill"></i> </Link>
            </div>
            <div className="cntr container-xxl">
              {isLoading?
                movies.map((elm)=>{
                  return (<div className='grid-box placeholder-wave' style={{background:'grey',borderRadius:"15px"}}></div>)
                })
              :
              movies.map((elm)=>{
                return(
                  <>
                  <div className="grid-box" key={elm.id}>
                    <Link to={`/movies/explore/${elm.id}`} style={{textDecoration:'none'}}>
                      <div className="moviePic  d-flex flex-column justify-content-between" style={{backgroundImage:`url('${elm.thumbnail}')`, backgroundSize:'cover'}}>
                        <p className='type'  style={{color:'white' ,width:'fit-content'}}>{elm.language}</p>
                      <p className='text-center m-0' style={{color:'white'}}>{elm.title}</p>
                      </div>
                    </Link>
                  </div>
                  </>
                )
              })}
            </div>
          </section>
              <Footer/>
          </main>
      </>
    )
}
