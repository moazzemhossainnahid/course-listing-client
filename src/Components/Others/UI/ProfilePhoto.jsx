
const ProfilePhoto = ({ image }) => {
  return (
    <img
      className="rounded-full bg-purple-950 w-[100px] h-[100px] border-4 border-white"
      src={image}

      width={100}
      height={100}
      alt={"profile photo"}
    />
  );
};

export default ProfilePhoto;