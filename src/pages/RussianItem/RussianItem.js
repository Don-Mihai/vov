import { useParams } from 'react-router-dom';
import ItemEquip from '../../components/ItemEquip/ItemEquip';
import { slidesRussian } from '../RussianEquip/RussianEquip';

const RussianItem = () => {
  const id = useParams()?.id;
  console.log(id);
  const item = slidesRussian.find((item) => item.id === Number(id));
  return (
    <ItemEquip
      title={item.title}
      src={item.src}
      description={item.description}
    />
  );
};

export default RussianItem;
