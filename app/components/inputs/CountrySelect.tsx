'use client';

import Select from 'react-select'

import useCountries from '@/app/hooks/useCountries';

export type CountrySelectValue = {
    flag: string;
    label: string;
    latlng: number[],
    region: string;
    value: string
  }

const CountrySelect = () => {
    return (
        <div></div>
    )
}

export default CountrySelect;