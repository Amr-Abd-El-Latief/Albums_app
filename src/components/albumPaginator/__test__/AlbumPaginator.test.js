import { render, fireEvent, screen } from '@testing-library/react';
import AlbumPaginator from '../AlbumPaginator';


test('App should renders AlbumPaginator', () => {
  render(<AlbumPaginator  handlePaginatorClick={() => { }}  currentPage='1'   currentPageHandler={() => { }} 
   start='1'  startHandler={() => { }}  countPerPage='20' countPerPageHandler={() => { }} />);
  const AlbumPaginatorElement = screen.getByTestId('paginator-1');
   expect(AlbumPaginatorElement).toBeInTheDocument()
});


test('AlbumPaginator should call handlePaginatorClick when next button is clicked', () => {
    const spyhandlePaginatorClick = jest.fn();
    render(<AlbumPaginator  handlePaginatorClick={spyhandlePaginatorClick}  currentPage='1'   currentPageHandler={() => { }} 
     start='1'  startHandler={() => { }}  countPerPage='20' countPerPageHandler={() => { }} />);
     const AlbumPaginatorElement = screen.getByTestId('paginator-1');
    const nextButton = screen.getByTestId('next-button-1');
    fireEvent.click(nextButton);
     expect(spyhandlePaginatorClick).toHaveBeenCalled();
  });

  test('AlbumPaginator should call handlePaginatorClick with the right start and limit when next button is clicked; start = 1, limit = 20', () => {
    const spyhandlePaginatorClick = jest.fn();
    render(<AlbumPaginator  handlePaginatorClick={spyhandlePaginatorClick}  currentPage='1'   currentPageHandler={() => { }} 
     start='1'  startHandler={() => { }}  countPerPage='20' countPerPageHandler={() => { }} />);
    const nextButton = screen.getByTestId('next-button-1');
    fireEvent.click(nextButton);
     expect(spyhandlePaginatorClick).toHaveBeenCalledWith('1',21);
  });


  test('AlbumPaginator should call handlePaginatorClick with the right start and limit when Prev button is clicked; start = 1, limit = 20', () => {
   const spyhandlePaginatorClick = jest.fn();
   const startHandler = jest.fn((countPerPage,currentPage)=>{return countPerPage*(currentPage-2)});
   
   render(<AlbumPaginator  handlePaginatorClick={spyhandlePaginatorClick}  currentPage='1'   currentPageHandler={() => { }} 
    start='21'  startHandler={startHandler}  countPerPage='20' countPerPageHandler={() => { }} />);
   const nextButton = screen.getByTestId('prev-button-1');
   fireEvent.click(nextButton);
    expect(spyhandlePaginatorClick).toHaveBeenCalledWith('21',41);
 });




