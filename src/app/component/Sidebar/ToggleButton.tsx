import ChevronDownIcon from '../../../assets/chevron-down.svg';
import ChevronUpIcon from '../../../assets/chevron-up.svg';

type ToggleButtonProps = {
  isOpened: boolean;
};

function ToggleButton({ isOpened }: ToggleButtonProps) {
  return (
    <button
      role="button"
      className="d-flex items-center justify-center p-3 rounded-xl cursor-pointer"
      style={{ backgroundColor: '#F6F6F3' }}
    >
      {isOpened ? (
        <div className="rotate-90">
          <ChevronDownIcon />
        </div>
      ) : (
        <div className="rotate-90">
          <ChevronUpIcon />
        </div>
      )}
    </button>
  );
}

export default ToggleButton;
