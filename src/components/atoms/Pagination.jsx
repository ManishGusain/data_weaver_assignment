export default function Pagination({ pages, currentPage, onPageChange, setSearchQuery }) {
    const handlePageClick = (newPage) => {
        if (newPage >= 1 && newPage <= pages) {
            onPageChange(newPage);
            setSearchQuery('');
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);

        return pageNumbers.map((page, index) => (
            <a
                key={index}
                className={currentPage === page ? 'active-page' : null}
                onClick={() => handlePageClick(page)}
            >
                {page}
            </a>
        ));
    };

    return (
        <div className="pagination-container">
            <div className="pagination">
                <a onClick={() => handlePageClick(currentPage - 1)}>&laquo;</a>
                {renderPageNumbers()}
                <a onClick={() => handlePageClick(currentPage + 1)}>&raquo;</a>
            </div>
        </div>
    );
}