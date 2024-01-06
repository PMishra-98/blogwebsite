import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import SharePost from '../Component/SharePost'
function CardDetails({details}) {
    return (
        < >
            {details.data.map(item =>
             <div className='col'>
                   <div class="card h-100">
                <div class="card-header" style={{display:"inline-flex", flexDirection:"row"}}>
                 <div>{item.date.slice(0,10)}</div>
                 <div className='ms-auto' style={{display:"inline-flex", flexDirection:"row", }}> <SharePost post={{id:item.id}} /></div>
                </div>
                <div class="card-body text-center">
                  <blockquote class="blockquote mb-0">
                  <h5 className="card-title">{item.title}</h5>
                     
                        <p className="card-text">{item.text.split(",").map(str => <div>{str}</div>)}</p>
                     
                    <footer class="blockquote-footer">Pallawi <cite title="Source Title">Words</cite></footer>
                  </blockquote>
                </div>
              </div>
             </div>
                 )}
                
               
            </>
 
    );
}

export default CardDetails;