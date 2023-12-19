import {memo} from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
// import numberFormat from '../../utils/number-format';
import './style.css';

function Comment(props) {
  console.log('props', props);
  const cn = bem('Comment');
  return (
    <div className={cn()}>
        <span>{props.username}</span>
        <span>Date</span>
        <p>text text text</p>
        <button>ответить</button>
    </div>
  );
}

// Comment.propTypes = {
//   sum: PropTypes.number,
//   t: PropTypes.func
// };

// Comment.defaultProps = {
//   sum: 0,
//   t: (text) => text
// }

export default memo(Comment);