"use client";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

import Image from "next/image";
import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/types";

const SearchManufacturer = ({
  manufacturer,
  handleSetManufacturer,
}: SearchManufacturerProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredManufacturers =
    searchQuery === ""
      ? manufacturers
      : manufacturers.filter((manufacturerItem) =>
          manufacturerItem
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(searchQuery.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={handleSetManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="AnyCar logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setSearchQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.map((manufacturerItem) => (
                <Combobox.Option
                  key={manufacturerItem}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={manufacturerItem}
                >
                  {manufacturerItem}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
