export default function Header({ searchQuery, setSearchQuery }) {

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchQuery(value);
    };

    return (
        <header className="header">
            <div className="logo" />
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="search-bar"
            />
            <div className="avatar" />
        </header>
    );
};