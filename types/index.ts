
export interface CustomButtonProps {
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    mainClass?: string;
    additionalClass?: string;
    handleOnClicked?: ()=> any;
    label?: string;
    icon?: SVGIcon;
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