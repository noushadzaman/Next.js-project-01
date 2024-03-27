"use client";

import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import Image from "next/image";
import SearchResult from "./SearchResult";
import { useRouter } from "next/navigation";

const Search = ({ docs }) => {
    const [searchResult, setSearchResult] = useState([]);
    const [term, setTerm] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        const value = e.target.value;
        setTerm(value);
        doSearch(value)
    }

    const doSearch = useDebounce((term) => {
        const found = docs.filter(doc => {
            return doc.title.toLowerCase().includes(term.toLowerCase());
        })
        setSearchResult(found);
    }, 500);

    function closeSearchResults(event) {
        event.preventDefault();
        router.push(event.target.href);
        setTerm('');
    }

    return (
        <>
            <div className="lg:block lg:max-w-md lg:flex-auto">
                <button type="button"
                    className="focus:[&amp;:not(:focus-visible)]:outline-none flex h-6 w-8 items-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:flex"
                >
                    <Image
                        width={80}
                        height={80}
                        src="/search.svg"
                        alt="Search"
                        class="h-7 w-7"
                    />
                    <input
                        type="text"
                        value={term}
                        onChange={handleChange}
                        placeholder="Search..."
                        className="flex-1 focus:border-none focus:outline-none"
                    />
                </button>
            </div>

            {term && term.trim().length > 0 && (
                <SearchResult
                    results={searchResult}
                    term={term}
                    closeSearchResults={closeSearchResults}
                />
            )}

        </>
    );
};

export default Search;