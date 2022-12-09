
import './AlbumPaginator.css';
import React from 'react';



function AlbumPaginator({handlePaginatorClick,currentPage,currentPageHandler,start,startHandler,countPerPage,countPerPageHandler}) {
    let limit = countPerPage?Number(countPerPage):20;
    const updateCountPerPage = (value) => {
        countPerPageHandler(value);
    }

    /**
     * function to handle when user click next of the paginator
     * 
     */
    const handlePrevClick= ()=>{
        currentPageHandler('prev');
        startHandler((countPerPage*currentPage) - countPerPage);
        alert("start : " + start + "limit: " + limit);
        limit = start + countPerPage;
        alert("start : " + start + "limit: " + limit);

        handlePaginatorClick(start,limit);
    }

    /**
     * function to handle when user click Prev of the paginator
     * 
     */
    const handleNextClick= ()=>{
        currentPageHandler('next');
        startHandler(countPerPage*currentPage+1);
        alert("start : " + start + "limit: " + limit);
        limit = start + countPerPage;
        alert("start : " + start + "limit: " + limit);
        handlePaginatorClick(start,limit);
    }

    return (
        <div className='paginator' data-testid='paginator-1'>
            <div className='paginator-button'>
                <button onClick={handlePrevClick} disabled={start<=0} data-testid='prev-button-1'> Prev</button>
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

                </select> -- {countPerPage} --
            </div>
            <div className='paginator-button'>
            <button onClick={handleNextClick} data-testid='next-button-1'> Next </button>

            </div>
        </div>
    );
}

export default AlbumPaginator;