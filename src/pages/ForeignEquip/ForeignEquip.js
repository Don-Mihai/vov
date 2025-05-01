import PodMain from '../../components/PodMain/PodMain';

const slides = [
  { id: 1, src: '/path/to/image1.jpg', title: 'Вооружение 1' },
  { id: 2, src: '/path/to/image2.jpg', title: 'Вооружение 2' },
  { id: 3, src: '/path/to/image3.jpg', title: 'Вооружение 3' },
];

const tabs = [
  { id: 'aviation', label: 'Авиация', content: 'Контент для авиации' },
  { id: 'tanks', label: 'Танки', content: 'Контент для танков' },
  { id: 'infantry', label: 'Пехота', content: 'Контент для пехоты' },
];

const ForeignEquip = () => {
  return (
    <PodMain title={'РОССИЙСКОЕ ВООРУЖЕНИЕ'} slides={slides} tabs={tabs} />
  );
};

export default ForeignEquip;
