import PodMain from '../../components/PodMain/PodMain';

const slides = [
  { id: 1, src: '/images/russian-equipment.png', title: 'Вооружение 1' },
  { id: 2, src: '/images/russian-equipment.png', title: 'Вооружение 2' },
  { id: 3, src: '/images/russian-equipment.png', title: 'Вооружение 3' },
];

const tabs = [
  { id: 'aviation', label: 'Авиация', content: 'Контент для авиации' },
  { id: 'tanks', label: 'Танки', content: 'Контент для танков' },
  { id: 'infantry', label: 'Пехота', content: 'Контент для пехоты' },
];

const RussianEquip = () => {
  return (
    <PodMain title={'ВООРУЖЕНИЕ ПРОТИВНИКА'} slides={slides} tabs={tabs} />
  );
};

export default RussianEquip;
