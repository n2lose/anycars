
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
    manufacturer: string;
    handleSetManufacturer: (manufacturer: string)=> void;
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
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}

export interface OptionsProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionsProps[];

}