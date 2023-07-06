"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { updateFilterParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateFilterParams= (e: {title: string, value: string}) => {    
    const newPathName = updateFilterParams(title, e.value.toLowerCase() );
    router.push(newPathName);
  }

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => {
        setSelected(e);
        handleUpdateFilterParams(e);

      }}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron up down"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-90"
            leaveTo="opacity-0"
          >
            <Listbox.Options className='custom-filter__options'>
              {options.map((optionItem) => (
                <Listbox.Option key={optionItem.title} value={optionItem} 
                  className={({active }) => `
                    relative cursor-default select-none py-2 px-4
                    ${ active ? 'bg-primary-blue text-white' : 'text-gray-900'} `
                  }
                >
                  {({selected}) => (                                        
                    <span className="flex ">{optionItem.title}</span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
