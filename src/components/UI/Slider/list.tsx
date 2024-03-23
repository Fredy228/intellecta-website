import slideImg from 'assets/img/laptop-slider-1.png'
// import homeFirstImg from '../../../assets/img/macbook-right-side.png'
// import homeSecondImg from '../../../assets/img/macbook-front-side.png'
// import homeThirdImg from '../../../assets/img/macbook-left-side.png'

import { ReactElement } from 'react';
import { ForStudents } from './Slider/Sliders/ForStudents';
import { ForTeachers } from './Slider/Sliders/ForTeachers';
import { ForAdmins } from './Slider/Sliders/ForAdmins';
export type TSlideProps = {
    id: number,
    image: string,
    reverse?: boolean
    textElement?: ReactElement
}

export const slideHome: TSlideProps[] = [
    {
        id: 1,
        image: slideImg,
        textElement: <ForStudents />
    },
    {
        id: 2,
        image: slideImg,
        textElement: <ForTeachers />
    },
    {
        id: 3,
        image: slideImg,
        reverse: true,
        textElement: <ForAdmins />
    },
]

export const slideApp: TSlideProps[] = [
    {
        id: 1,
        image: slideImg,
    },
    {
        id: 2,
        image: slideImg,
    },
    {
        id: 3,
        image: slideImg,
    },
    {
        id: 4,
        image: slideImg,
    },
    {
        id: 5,
        image: slideImg,
    },
    {
        id: 6,
        image: slideImg,
    },
]

export const slideContact: TSlideProps[] = [
    {
        id: 1,
        image: slideImg,
    },
    {
        id: 2,
        image: slideImg,
    },
    {
        id: 3,
        image: slideImg,
    },
]