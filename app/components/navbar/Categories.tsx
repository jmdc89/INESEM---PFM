// 'use client';

// import { usePathname, useSearchParams } from 'next/navigation';
// import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
// import {
//     GiBarn,
//     GiBoatFishing,
//     GiCactus,
//     GiCastle,
//     GiCaveEntrance,
//     GiForestCamp,
//     GiIsland,
//     GiWindmill
// } from 'react-icons/gi';
// import { FaSkiing } from 'react-icons/fa';
// import { BsSnow } from 'react-icons/bs';
// import { IoDiamond } from 'react-icons/io5';
// import { MdOutlineVilla } from 'react-icons/md';

// import Container from '../Container';
// import CategoryBox from '../CategoryBox';

// export const categories = [
//     {
//         label: 'Playa',
//         icon: TbBeach,
//         description: '¡Esta propiedad está cerca de la playa!',
//     },
//     {
//         label: 'Molinos de viento',
//         icon: GiWindmill,
//         description: '¡Esta propiedad tiene molinos de viento!',
//     },
//     {
//         label: 'Moderno',
//         icon: MdOutlineVilla,
//         description: '¡Esta propiedad es moderna!'
//     },
//     {
//         label: 'Campo',
//         icon: TbMountain,
//         description: '¡Esta propiedad está en el campo!'
//     },
//     {
//         label: 'Piscinas',
//         icon: TbPool,
//         description: '¡Esta propiedad tiene una hermosa piscina!'
//     },
//     {
//         label: 'Islas',
//         icon: GiIsland,
//         description: '¡Esta propiedad está en una isla!'
//     },
//     {
//         label: 'Lago',
//         icon: GiBoatFishing,
//         description: '¡Esta propiedad está cerca de un lago!'
//     },
//     {
//         label: 'Esquí',
//         icon: FaSkiing,
//         description: '¡Esta propiedad tiene actividades de esquí!'
//     },
//     {
//         label: 'Castillos',
//         icon: GiCastle,
//         description: '¡Esta propiedad es un antiguo castillo!'
//     },
//     {
//         label: 'Cuevas',
//         icon: GiCaveEntrance,
//         description: '¡Esta propiedad está en una cueva espeluznante!'
//     },
//     {
//         label: 'Camping',
//         icon: GiForestCamp,
//         description: '¡Esta propiedad ofrece actividades de camping!'
//     },
//     {
//         label: 'Ártico',
//         icon: BsSnow,
//         description: '¡Esta propiedad está en un ambiente ártico!'
//     },
//     {
//         label: 'Desierto',
//         icon: GiCactus,
//         description: '¡Esta propiedad está en el desierto!'
//     },
//     {
//         label: 'Granja',
//         icon: GiBarn,
//         description: '¡Esta propiedad está en una granja!'
//     },
//     {
//         label: 'Lujo',
//         icon: IoDiamond,
//         description: '¡Esta propiedad es nueva y lujosa!'
//     }
// ]


// const Categories = () => {
//     return (
//         <Container>
//             <div
//                 className="
//                 pt-4
//                 flex 
//                 flex-row 
//                 items-center 
//                 justify-between
//                 overflow-x-auto
//               "
//             >
//                 {/* {categories.map((item) => (
//                     <CategoryBox
//                         key={item.label}
//                         label={item.label}
//                         icon={item.icon}
//                         selected={category === item.label}
//                     />
//                 ))} */}
//             </div>
//         </Container>
//     )
// }

// export default Categories;