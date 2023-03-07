import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal';

const booksData = [
    { id: uuidv4(), name: 'pather Panchali' },
    { id: uuidv4(), name: 'padma Nadir Majhi' },
    { id: uuidv4(), name: 'Srikanta' }
];

const UseReducer = () => {
    const [books, setBooks] = useState(booksData);
    const [bookName, setBookName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalText, setModaltext] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setBooks((prevState) => {
            const newBook = { id: uuidv4(), name: bookName };
            return [...prevState, newBook];
        });
        setIsModalOpen(true);
        setModaltext('Book is added');
    };
    return (
        <div>
            <h3>Book List</h3>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={bookName}
                    name="bookName"
                    onChange={(e) => {
                        setBookName(e.target.value);
                    }}
                />
                <button type="submit">Add Book</button>
            </form>
            {isModalOpen && <Modal modalText={modalText} />}
            {books.map((book) => {
                const { id, name } = book;
                return <li key={id}>{name}</li>;
            })}
        </div>
    );
};

export default UseReducer;
