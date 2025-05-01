import PodMain from '../../components/PodMain/PodMain';

export const slidesRussian = [
  {
    id: 1,
    src: '/images/russian-equipment.png',
    title: 'Вооружение 1',
    link: '/russian-item/1',
    description:
      'Описание подробное Описание подробное Описание подробное Описание подробное Описание подробное  Описание подробное Описание подробное Описание подробное Описание подробное',
  },
  {
    id: 2,
    src: '/images/russian-equipment.png',
    title: 'Вооружение 2',
    link: '/russian-item/2',
    description:
      'Описание подробное Описание подробное Описание подробное Описание подробное Описание подробное  Описание подробное Описание подробное Описание подробное Описание подробное',
  },
  {
    id: 3,
    src: '/images/russian-equipment.png',
    title: 'Вооружение 3',
    link: '/russian-item/3',
    description:
      'Описание подробное Описание подробное Описание подробное Описание подробное Описание подробное  Описание подробное Описание подробное Описание подробное Описание подробное',
  },
];

const tabs = [
  { id: 'aviation', label: 'Авиация', content: 'Контент для авиации' },
  { id: 'tanks', label: 'Танки', content: 'Контент для танков' },
  { id: 'infantry', label: 'Пехота', content: 'Контент для пехоты' },
];

const RussianEquip = () => {
  return (
    <PodMain
      title={'ВООРУЖЕНИЕ ПРОТИВНИКА'}
      slides={slidesRussian}
      tabs={tabs}
    />
  );
};

export default RussianEquip;
