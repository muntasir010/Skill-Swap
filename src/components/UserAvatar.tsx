export interface IUser {
  name: string;
  email: string;
  image?: string;
  role?: string;
}

interface UserAvatarProps {
  user: IUser | null;
  className?: string;
}

export const UserAvatar = ({ user, className = "w-7 h-7" }: UserAvatarProps) => {
  return user?.image ? (
    <img
      src={user.image}
      alt={user.name}
      className={`${className} rounded-full object-cover border border-indigo-100`}
    />
  ) : (
    <div
      className={`${className} rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm`}
    >
      {<img src="https://i.ibb.co.com/zWjwgLsH/db40c047-22e9-48cc-9f0b-3832ff87e92e.jpg" alt={user?.name} />}
    </div>
  );
};