import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UploadClips() {
    const [form, setForm] = useState(false)
    const [input, setInput] = useState({
        title:''
    })
  return (
    <div>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className={form?"modal-dialog modal-lg":"modal-dialog"}>
            <div className="modal-content" style={{background:'rgb(33,35,39', color:'gray'}}>
            <div className="modal-header p-1 px-2">
                <h1 className="modal-title fs-5" id="staticBackdropLabel"> <i className="bi bi-lightning-charge-fill"></i> Clips</h1>
                <i onClick={()=>{setForm(false)}} type="button" className="bi bi-x-circle" data-bs-dismiss="modal" aria-label="Close"></i>
            </div>
            <div className="modal-body">
                {!form?"Do you want to explore Clips or Upload Clips ?"
                :
                <form>
                    <div className='d-flex flex-column uploadVideo'>
                        <label htmlFor="title">Caption (required)</label>
                        <textarea type="text" name='title' id='title' required placeholder='Give some attractive title' minLength='5' maxLength='100' ></textarea>
                        <p className='m-0 text-end'>{input.title!== ''?input.title.split(' ').length:'0'}/100</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between mt-2'>
                        <div className='uploadSection mt-0'>
                            <label  className=''>
                                Upload Clip (required)
                                <p className='m-0' style={{color:'grey', fontSize:"0.7rem"}}>Select or upload a video that viewers can enjoy your video. A good video stands for good gain of your profile.</p>
                                <i className='bi bi-lightning-charge-fill fs-4'></i>
                            </label>
                            <input className='text-center m-2 px-2' type="file" name='video' id='video' accept="video/*" style={{fontSize:"0.7rem", width:'100%'}}  />
                        </div>
                        <div className=''>
                            <p className='d-flex align-items-center m-0'>Clip preview 
                                <div className='text-end' style={{height:"30px"}}>
                                {form?<button className='mx-3 bg-warning border-0'>Delete</button>:null}
                                </div>
                            </p>
                            <iframe  width="100%" height="200" src='' title="VIM CORN.com video player"  ></iframe>
                        </div>
                    </div>
                    <div className="mt-3 text-end">
                        <button type="reset" className="btn btn-secondary btn-sm rounded-3 mx-1" >Recet</button>
                        <button onClick={()=>{setForm(true)}} type="submit" className="mx-1 btn btn-primary btn-sm rounded-3">Upload</button>
                    </div>
                </form>}
            </div>
            {!form?<div className="modal-footer">
                <Link to='/videos'><button type="" className="btn btn-secondary btn-sm rounded-4" data-bs-dismiss="modal">Explore</button></Link>
                <button onClick={()=>{setForm(true)}} type="button" className="btn btn-primary btn-sm rounded-4">Upload</button>
            </div>:null}
            </div>
        </div>
        </div>
    </div>
  )
}
