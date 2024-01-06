import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import CardDetails from '../Component/CardDetails'; 
import { fetchTodos } from '../features/reducer';
function ShortStory() {
    const dispatch = useDispatch();
    const params = useParams();
    const storyData = useSelector((state) => params.id?state.data.storyData.filter(obj=>obj.id==params.id):state.data.storyData);
    const status = useSelector((state) => state.data.status);

    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchTodos());
      }
    }, [status, dispatch]);
  
    if (status === 'loading') {
      return <div>Loading...<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
  </Spinner></div>;
    }
  

    return (
        <div >
        {status==="failed" || storyData.length==0?<div>Error: Something went wrong - {storyData.error}</div>:
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 row-cols-sm-1 g-4 m-3 ">  
              <CardDetails details={{data:storyData}}/> 
            </div>
        }
        </div>
    );
}

export default ShortStory;