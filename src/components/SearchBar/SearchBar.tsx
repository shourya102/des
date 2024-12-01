import {BiSearch} from "react-icons/bi";

const SearchBar = () => {
    return (
        <div className="inline-flex rounded-md text-primary-1 overflow-clip border border-secondary-2">
            <input className="bg-secondary-1 p-4" placeholder="Search something!"/>
            <button className="p-4"><BiSearch/></button>
        </div>
    );
};

export default SearchBar;