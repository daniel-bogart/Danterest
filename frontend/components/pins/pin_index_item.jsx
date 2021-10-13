import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';

function PinIndexItem(props) {

  const supportsLazyLoading = useNativeLazyLoading()

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
    skip: supportsLazyLoading === true
  })


  return (
    <div
      ref={ref}
      data-inview={inView}
    > {inView || supportsLazyLoading ? (
        <Link to={`/pins/${props.pin.id}`}>
          <img 
            alt="pin-image"
            className="pin-image" 
            src={props.pin.photoUrl}
          />
        </Link>
    ) : null}
    </div>
  )
}

export default PinIndexItem;