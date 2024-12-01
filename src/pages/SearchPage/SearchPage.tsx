import SearchBar from "../../components/SearchBar/SearchBar.tsx";

const SearchPage = () => {
    return (
        <div className="bg-primary-1 flex justify-center items-center min-h-svh gap-md w-svw">
            <div className="absolute w-full h-full bg-colourful-background bg-cover bg-no-repeat opacity-5 z-10"></div>
            <div className="z-20">
                <SearchBar/>
            </div>

        </div>
    );
};

export default SearchPage;