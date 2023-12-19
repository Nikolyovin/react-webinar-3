import {memo} from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
// import numberFormat from '../../utils/number-format';
import './style.css';
import Comment from '../comment';

function CommentsSection({comments=[], count}) {
    // console.log('comments', comments);
    // console.log('comments.length', comments.length);
    // console.log('count', count);
  const cn = bem('CommentsSection');
  return (
    <div className={cn()}>
        <h3 className={cn('title')}>Комментарии ({count})</h3>
        {comments.length && comments.map(item => {
            const {name} = item.author.profile
            return <Comment key={item._id} username={name}/>
        })}
        
    </div>
  );
}

// CommentsSection.propTypes = {
//   sum: PropTypes.number,
//   t: PropTypes.func
// };

// CommentsSection.defaultProps = {
//   sum: 0,
//   t: (text) => text
// }

export default memo(CommentsSection);