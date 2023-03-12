
import { useTranslation } from 'react-i18next';
import './switcherLang.css'

const SwitcherLang = () => {
    const {t, i18n} = useTranslation()

    const handleClick = () => {
        if (i18n.language === 'en') {
          i18n.changeLanguage('ru');
        } else {
          i18n.changeLanguage('en');
        }
    }

    return (
      <div className="switcherLang" onClick={handleClick}>
        {t('lang')}
      </div>
    );
  };
  
  export default SwitcherLang;