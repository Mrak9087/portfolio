import { useTranslation } from 'react-i18next';

export const skillList = [
  'HTML, CSS, SCSS, JavaScript, Typescript, Tailwind CSS',
  'React, Redux, NextJS',
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
  ];
}



