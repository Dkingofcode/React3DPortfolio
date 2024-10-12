import Proptypes from 'prop-types';

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className='relative flex h-3 w-3'>
            <span className='btn-ping'  />
            <span className='btn-ping_dot'  />
        </span>
      )}  
      {name}
    </button>
  )
};


Button.propTypes = {
    name: Proptypes.string,
    isBeam:  Proptypes.bool,
    containerClass:  Proptypes.string
}


export default Button;
