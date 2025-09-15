function Footer() {
  return (
    <footer className="bg-gray-500 text-white p-4 text-center">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.facebook.com/chayrober"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/nin_rober/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          Instagram
        </a>
      </div>
      <p>© 2025 My Website</p>
    </footer>
  );
}
export default Footer;
