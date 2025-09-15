function Header() {
  return (
    <header className="bg-indigo-200 text-black p-4 flex items-center space-x-4">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-20 h-20 rounded-full border-2 border-white object-cover"
      />
      <div className="flex flex-col items-center text-center">
        <p className="font-bold">Kilumco, Tubod, Iligan City.</p>
        <p className="text-sm">ninamaerober.202300768@gmail.com</p>
      </div>
    </header>
  );
}
export default Header;
