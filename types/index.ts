
export interface CustomButtonProps {
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    mainClass?: string;
    additionalClass?: string;
    handleOnClicked?: ()=> any;
    label?: string;
    textStyles?: string;
    rightIconPath?: string;    
    leftIconPath?: string;
}

export interface SVGIcon {
    path: string;
    width?: string;
    height?: string;
    viewBoxWidth: number;
    viewBoxHeight: number;
    mainClass?: string;
}

export interface SearchManufacturerProps {
    selected: string;
    setSelected: (manufacturer: string)=> void;
}

export interface CarProps {
    city_mpg: number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number
    make:string;
    model:string;
    transmission:string;
    year:number;
}

export interface CarDetailsProps {
    isOpen: boolean;
    closeModal: ()=> void;
    carDetails: CarProps;
}

export interface FilterProps {
    manufacturer?: string,
    year?: string,
    fuel?: string,
    limit?: number,
    model?: string,
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface OptionsProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionsProps[];
    setFilter: (value: string) => void;
}

export interface ShowMoreProps {
    pageNumber: number,
    isNext: boolean;
    setLimit: (pageNumber: number)=> void;
}