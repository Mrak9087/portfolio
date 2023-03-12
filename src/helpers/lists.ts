import { useTranslation } from 'react-i18next';

export const skillList = [
  'HTML, CSS, SCSS, JavaScript, Typescript',
  'React, Redux',
  'Git, GitHub',
  'REST API, Axios',
  'Visual Studio Code, WebStorm',
  'Delphi (Rad Studio)',
  'SQL',
];


export const useEdList = () => {
  const {t} = useTranslation()
  return [ t('home.ed1'),
    t('home.ed2'),
    t('home.ed3'),
    t('home.ed4')
    // 'Balashovsky Institute of Saratov State University / Applied Informatics in Economics',
    // 'Courses RS School / JS/FE PRE-SCHOOL',
    // 'Courses RS School / JAVASCRIPT/FRONT-END 2021Q3',
    // 'Courses RS School / REACT 2022 Q1',
  ];
  
} 

export const useExpList = () => {
  const {t} = useTranslation()
  return [
    t('home.exp1'),
    t('home.exp2'),
    t('home.exp3'),
    t('home.exp4'),
    t('home.exp5'),
    t('home.exp6')
    // '2008 - 2009 / Balashovsky Institute of Saratov State University / Laboratorian',
    // '2010 - 2011 / Balashovsky Institute of Saratov State University / Engineer (Developer)',
    // '2011 - 2015 / Social support / Leading Specialist (System administrator)',
    // '2015 - 2018 / Urban Heating Networks Balashov / Specialist (System administrator)',
    // '2018 - 2019 / Urban Heating Networks Balashov / Network administrator',
    // '2020 - until now / MFC / Leading Specialist (System administrator)',
  ];
}



