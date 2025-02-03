import PropTypes from 'prop-types';
import ItemModel from '../models/ItemModel.js';

export default function ShopItemFunc(props) {
  const {item} = props;

  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">{item.descriptionFull}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">
          <span>{item.currency}</span>
          <span>{item.price}</span>
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(ItemModel).isRequired
};
