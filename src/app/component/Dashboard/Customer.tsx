import MessageCircleIcon from '../../../assets/message-circle.svg';
import StarIcon from '../../../assets/star.svg';
import PencilIcon from '../../../assets/pencil.svg';
import DotsVerticalIcon from '../../../assets/dots-vertical.svg';
import Avatar from '../Avatar';
import { CustomerType } from '../../../types/CustomerType';

const ACTIONS = [MessageCircleIcon, StarIcon, PencilIcon];

type CustomerProps = CustomerType & {
  isHighlighted?: boolean;
};

export const Customer = ({
  text,
  src,
  company,
  isHighlighted,
}: CustomerProps) => (
  <div
    className="flex justify-between items-center gap-3 p-4 rounded-2xl cursor-pointer"
    style={isHighlighted ? { backgroundColor: '#FFF7E8' } : {}}
  >
    <div className="flex items-center gap-3">
      <div>
        <Avatar src={src} text={text} width="32" height="32" />
      </div>
      <div className="flex flex-col">
        <div className="font-medium text-sm" style={{ color: '#131313' }}>
          {text}
        </div>
        <div className="text-xs" style={{ color: '#454545' }}>
          {company}
        </div>
      </div>
    </div>
    {isHighlighted && (
      <div className="flex items-center">
        <div className="flex gap-1" style={{ color: '#734A00' }}>
          {ACTIONS.map((Icon, index) => (
            <div key={index} className="p-3 cursor-pointer">
              <Icon />
            </div>
          ))}
        </div>
        <div
          className="mx-3 w-px h-6 opacity-20"
          style={{ backgroundColor: '#734A00' }}
        ></div>
        <div className="flex" style={{ color: '#131313' }}>
          <DotsVerticalIcon />
        </div>
      </div>
    )}
  </div>
);
