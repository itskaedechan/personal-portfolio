export default function AboutMe() {
  return (
    <div className="grid auto-rows-5 off-white w-[240px] h-[649px] bg-cream justify-center shadow aboutMe">
      <img
        src="/images/profile-photo.jpg"
        alt="profile-photo"
        className="w-[140px] h-[140px] rounded-full object-cover border-2 border-white mx-auto"
      />
      <div>
        <img
          src="/icons/clover.svg"
          alt="clover-icon"
          className="w-[50px] h-[50px]"
        />
        <h1 className="lora-bold charcoal-text leading-snug">
          About <br /> Me
        </h1>
      </div>

      <p className="charcoal-text">Hi, I’m Anne.</p>
      <p className="charcoal-text">
        Combining my tech experience with modern web tools, I build responsive,
        user-friendly websites using HTML, CSS, JavaScript, and React. I enjoy
        turning ideas into functional and accessible web applications.
      </p>
    </div>
  );
}
