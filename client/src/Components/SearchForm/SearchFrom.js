import React from 'react';

function SearchForm () {
    return(
        <div>
           <form>
               <div className="form-groug">
                   <label>Title</label>
                   <input type= "text" className="form-control"></input>
               </div>
               <div className="form-groug">
                   <label>Author</label>
                   <input type= "text" className="form-control"></input>
               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
           </form>
        </div>
    )
}

export default SearchForm;