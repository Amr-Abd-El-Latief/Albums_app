
import './AlbumPaginator.css';
import React from 'react';



function AlbumPaginator({handlePaginatorClick,currentPage,currentPageHandler,start,startHandler,countPerPage,countPerPageHandler}) {
    let limit = countPerPage?countPerPage:20;
    const updateCountPerPage = (value) => {
        countPerPageHandler(value);
    }

    /**
     * function to handle when user click next of the paginator
     * 
     */
    const handlePrevClick= ()=>{
        currentPageHandler('prev');
        //setCurrentPage((prev)=>currentPage<=1?0:prev-1);
        startHandler((countPerPage*currentPage) - countPerPage);
        limit = start + countPerPage;
        handlePaginatorClick(start,limit);
    }

    /**
     * function to handle when user click Prev of the paginator
     * 
     */
    const handleNextClick= ()=>{
        currentPageHandler('next');
        // setCurrentPage((prev)=>{
        //     alert(prev)
        //     return (prev+1)});
        alert("currentPage : > "+currentPage)
        startHandler(countPerPage*currentPage+1);
        limit = start + countPerPage;
        alert("start : > "+start + "countPerPage :>" +countPerPage)

        handlePaginatorClick(start,limit);
    }

    return (
        <div className='paginator'>
            <div className='paginator-button'>
                <button onClick={handlePrevClick} disabled={start<=0}> Prev</button>
            </div>
            <div>
                <select value="countPerPage" onChange={(event) => updateCountPerPage(event.target.value)}>
                <option value="20" >
                        Select
                    </option>
                    <option value="20" >
                        20
                    </option>
                    <option value="30">
                        30
                    </option>
                    <option value="50">
                        50
                    </option>

                </select> -- "countPerPage: " {countPerPage}   -- "currentPage ":{currentPage }   -- "start: "{start}
            </div>
            <div className='paginator-button'>
            <button onClick={handleNextClick}> Next </button>

            </div>
        </div>
    );
}

export default AlbumPaginator;