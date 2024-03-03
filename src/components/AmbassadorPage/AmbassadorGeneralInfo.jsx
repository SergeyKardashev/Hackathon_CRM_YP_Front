import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsAmbassadorDataEditing } from '../../services/selectors/ambassadorSelector';
import AmbassadorSectionTitle from './AmbassadorSectionTitle';
import DropdownStatusSelect from '../../UI/Buttons/DropdownButtons/DropdownStatusSelect/DropdownStatusSelect';
import AmbassadorInfoTable from './AmbassadorInfoTable';
import InputText from '../../Inputs/InputText';
import DropdownField from '../../Inputs/DropdownField';
import { countries } from '../../utils/countries'; // будет подгружаться из АПИ
import './AmbassadorGeneralInfo.scss';

export default function AmbassadorGeneralInfo() {
  const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);
  const [, setAmbassadorStatus] = useState(''); // ambassadorStatus
  const handleStatusSelect = (status) => {
    setAmbassadorStatus(status);
  };

  const generalData = [
    { label: 'Промокод', value: 'VASYAPUPKIN' },
    { label: 'Цель обучения', value: 'Смена профессии' },
    { label: 'Куратор', value: 'Анастасия Борисова' },
    { label: 'Что хочет делать', value: 'Вести блог, Писать статьи, Снимать видео или сниматься в них, если продакшн будет на нашей стороне' },
    { label: 'Образование', value: 'СПБГУПТД' },
    { label: 'Место работы ', value: 'Безработный дизайнер ' },
  ];

  const adresses = [
    { label: 'Страна', value: 'Россия' },
    { label: 'Город', value: 'Санкт-Петербург' },
    { label: 'Индекс', value: '190000' },
    { label: 'Адрес', value: 'Университетская наб., 3' },
  ];

  const merch = [
    { label: 'Пол', value: 'Мужской' },
    { label: 'Размер одежды', value: 'M' },
    { label: 'Размер ноги', value: '40' },
  ];

  const cities = [
    'Москва',
    'Санкт-Петербург',
    'Новосибирск',
    'Екатеринбург',
    'Нижний Новгород',
    'Казань',
    'Челябинск',
    'Омск',
    'Самара',
    'Ростов-на-Дону',
    'Уфа',
    'Красноярск',
    'Пермь',
    'Воронеж',
    'Волгоград',
    'Краснодар',
    'Саратов',
    'Тольятти',
    'Ставрополь',
    'Тюмень',
    'Ярославль',
  ];

  const clothingSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  return (
    <section className="ambassador__info-container">
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Статус" />
        <DropdownStatusSelect onSelect={handleStatusSelect} />
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Общие данные" />
        <AmbassadorInfoTable data={generalData}>
          {isAmbassadorDataEditing && (
            <>
              <InputText label="Промокод" name="promocode" />
              {/* выпадалка Цель обучения */}
              <InputText label="Куратор" name="curator" />
              {/* выпадалка Что хочет делать */}
              <InputText label="Образование" name="education" />
              <InputText label="Место работы" name="placeOfWork" />
            </>
          )}
        </AmbassadorInfoTable>
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Адрес" />
        <AmbassadorInfoTable data={adresses}>
          {isAmbassadorDataEditing && (
            <>
              <DropdownField htmlFor="country" labelText="Страна" options={countries} selectedValue="Россия" />
              <DropdownField htmlFor="city" labelText="Город" options={cities} selectedValue="Санкт-Петербург" />
              <InputText label="Индекс" name="index" />
              <InputText label="Адрес" name="address" />
            </>
          )}
        </AmbassadorInfoTable>
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Мерч" />
        <AmbassadorInfoTable data={merch}>
          {isAmbassadorDataEditing && (
            <>
              {/* радиокнопки Пол */}
              <DropdownField htmlFor="clothingSize" labelText="Размер одежды" options={clothingSizes} selectedValue="M" />
              <InputText label="Размер ноги" name="shoeSize" />
            </>
          )}
        </AmbassadorInfoTable>
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Комментарий" />
        {isAmbassadorDataEditing ? (
          <AmbassadorInfoTable data={null}>
            <InputText label="" name="comment" />
          </AmbassadorInfoTable>
        ) : (
          <p className="ambassador__comment">Я готов на все ради мерча </p>
        )}
      </article>
    </section>
  );
}
