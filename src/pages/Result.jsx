import { createRef, useState } from "react";


export default function Result({ booksList, currentPage, searchQuery, itemsPerPage }) {
    const modalRef = createRef();
    const [modalVisible, setModalVisible] = useState(false);
    const [editBook, setEditBook] = useState({
        title: "",
        year: "",
        author: "",
    })

    const handleAddToBooksList = (book) => {
        alert("Book Added")
    };

    const handleModal = () => {
        setModalVisible(prev => !prev);
    };

    const handleOutsideClick = (event) => {
        if (event.target === modalRef.current) {
            handleModal();
        }
    };

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setEditBook(prev => ({ ...prev, [name]: value }))
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginatedBooks = booksList?.slice(indexOfFirstItem, indexOfLastItem);

    const filteredBooks = paginatedBooks?.filter((book) =>
        book?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    );


    return (
        <div className='book-card-container'>
            {
                filteredBooks?.map((book, index) => {
                    return (
                        <div className='book-card' key={index}>
                            <p>{book?.title}</p>
                            <p>{book?.year}</p>
                            <p>{book?.author}</p>
                            <div className='book-card-btn'>
                                <button onClick={() => handleAddToBooksList(book)}>Add to Books List</button>
                                <button onClick={() => {
                                    handleModal();
                                    setEditBook({
                                        title: book?.title,
                                        year: book?.year,
                                        author: book?.author,
                                    })
                                }
                                }>Edit</button>
                            </div>
                        </div>
                    );
                })
            }

            {modalVisible && (
                <div className="modal" ref={modalRef} onClick={handleOutsideClick}>
                    <div className="modal-content">
                        <span className="close" onClick={handleModal}>&times;</span><br />
                        <p>Title : <input value={editBook?.title} name='title' onChange={(e) => handleEdit(e)} /></p>
                        <p>Year : <input value={editBook?.year} name='year' onChange={(e) => handleEdit(e)} /></p>
                        <p>Author : <input value={editBook?.author} name='author' onChange={(e) => handleEdit(e)} /></p>
                        <button className="edit-submit-btn" onClick={handleModal}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
}