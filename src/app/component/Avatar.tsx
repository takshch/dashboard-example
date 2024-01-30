import Image from 'next/image';
import { UserType } from '../../types/UserType';

type AvatarProps = UserType & {
  [x: string]: any;
};

function Avatar({ src, text, ...args }: AvatarProps) {
  return (
    <div className="avatar">
      <Image src={src} alt={text} {...args} />
    </div>
  );
}

export default Avatar;
