import React from 'react';

const MovieList = (props) => {
   const renderlist = (lists) => {
      if(lists){
           return lists.map((data) => {
                return(
                    <div key={data.id}>
                        <p>{data.name}</p>
                    </div>
                )
           })
      }
   }

        return(
            <div>
                 <h2>Redux application</h2>
                 <div>
                    {renderlist(props)}
                 </div>
            </div>
           
        )

}
export default MovieList;


