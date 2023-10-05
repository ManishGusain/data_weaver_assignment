import { useEffect, useState } from 'react';
import Header from '../components/atoms/Header';
import Result from './Result';
import Loader from '../components/atoms/Loader';
import Pagination from '../components/atoms/Pagination';
import { fetch_books } from '../api';

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [booksList, setBooksList] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchBooksList = async () => {
        try {
            setIsLoading(true);
            const { data } = await fetch_books();

            const totalItems = data?.data?.length || 0;
            const itemsPerPage = 10;
            const totalPages = Math.ceil(totalItems / itemsPerPage);
            setTotalPages(totalPages);
            setBooksList(data?.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Error fetching books:', error);
        }
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        fetchBooksList();
    }, [])

    return (
        <>

            <>
                <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                {
                    isLoading ?
                        <Loader />
                        :
                        <>
                            <p className='title'>Books</p>
                            <Result booksList={booksList} currentPage={currentPage} searchQuery={searchQuery} itemsPerPage={10} />
                            <Pagination pages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} setSearchQuery={setSearchQuery} />
                        </>
                }
            </>


        </>
    );
}

export default App;
