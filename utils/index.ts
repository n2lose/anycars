import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || ' ',
		'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST || ''
	}
    const url = process.env.NEXT_PUBLIC_RAPID_API_URL || '';
    console.log('url ==== ', url);
    const response = await fetch(url, {
        headers: headers
    });
    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerday = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerday + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL(process.env.NEXT_PUBLIC_IMAGIN_URL || ' ');
    const { make, year, model} = car;
    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_KEY || ' ');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);    
    angle && url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}
