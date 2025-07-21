export default function AboutMe() {
  return (
    <div className="grid auto-rows-5 off-white w-[240px] h-[649px] bg-cream justify-center">
      <img
        src="/images/profile-photo.jpg"
        alt="profile-photo"
        className="w-[140px] h-[140px] rounded-full object-cover border-2 border-[d9d9d9]"
      />
      <img
        src="/icons/clover.svg"
        alt="clover-icon"
        className="w-[40px] h-[40px]"
      />
      <h1>
        About <br /> Me
      </h1>
      <p>
        Hi, I’m Anne. Combining my tech experience with modern web tools, I
        build responsive, user-friendly websites using HTML, CSS, JavaScript,
        and React. I enjoy turning ideas into functional and accessible web
        applications.
      </p>
    </div>
  );
}
