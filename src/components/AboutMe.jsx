export default function AboutMe() {
  return (
    <div className="auto-rows-5 off-white bg-cream aboutMe sticky top-0 grid h-[649px] w-[240px] justify-center shadow">
      <img
        src="/images/profile-photo.jpg"
        alt="profile-photo"
        className="mx-auto h-[140px] w-[140px] rounded-full border-2 border-white object-cover"
      />
      <div>
        <img
          src="/icons/clover.svg"
          alt="clover-icon"
          className="h-[50px] w-[50px]"
        />
        <h1 className="charcoal-text font-cg font-medium leading-snug">
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
