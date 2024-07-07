import { ChangeEvent } from "react";
import Wrapper from "../Wrappers";
import { Button } from "../Button";

interface SearchProps {
    searchTerm?: string;
    setSearchTerm: (term: string) => void;
  }

export function Search({ searchTerm, setSearchTerm }: SearchProps) {
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
      setSearchTerm(event.target.value || "");
    }
  
    function handleSubmit() {
      // console.log(searchTerm);
      // Add submit logic here
    }
  
    return (
      <Wrapper
        as="div"
        bgColor="bg-transparent"
        containerClassName="px-10 py-10"
        className="!md:pr-2 text-primary-text focus-within:border-secondary-text flex h-12 items-center gap-4 rounded-xl bg-white py-2 !pr-2 shadow-md max-md:mt-5"
      >
        <input
          className="w-full pl-5 focus:outline-none max-md:p-3"
          type="text"
          placeholder="Search for colleges, courses etc."
          value={searchTerm}
          onChange={handleInputChange}
          min={3}
        />
        <Button variant="black" className="text-sm" onClick={handleSubmit}>
          Submit
        </Button>
      </Wrapper>
    );
  }