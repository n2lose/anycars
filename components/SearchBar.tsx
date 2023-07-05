"use client";

import { FormEvent, useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";




type Props = {};

const SearchButton = ({ addtionalClass }: {addtionalClass: string}) => (
  <button type="submit" className={`ml-3 z-10 ${addtionalClass}`} >
    <Image src="/magnifying-glass.svg"
      alt="manifying glass"
      width={40}
      height={40}
      className="object-contain"
    />    
  </button>
);


const SearchBar = (props: Props) => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(manufacturer === '' && model === '') {
      return alert('Please fill in the search bar');
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.localStorage.search);
    if(model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model')  ;
    }

    if(manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
    
    router.push(newPathName);
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
            manufacturer={manufacturer}
            handleSetManufacturer={setManufacturer}
        />
        <SearchButton addtionalClass='sm:hidden' />
      </div>
      <div className="searchbar__item">
        <Image 
          src="/model-icon.png" 
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Car model"
        />
        <input 
          type="text" 
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton addtionalClass="sm:hidden" />
      </div>
      <SearchButton addtionalClass="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
