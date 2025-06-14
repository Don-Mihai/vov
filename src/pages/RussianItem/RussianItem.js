import { useParams } from 'react-router-dom';
import ItemEquip from '../../components/ItemEquip/ItemEquip';
import { slidesRussian } from '../RussianEquip/RussianEquip';

const RussianItem = () => {
  const { id, tab } = useParams();
  const item = slidesRussian[tab].find((item) => item.id === Number(id)) || {};
  return <ItemEquip titleColor={'#782122'} title={item?.title} src={item?.src} description={item?.description} />;
};

export default RussianItem;
