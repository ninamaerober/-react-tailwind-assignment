function SideBar() {
  return (
    <aside className="w-1/4 bg-pink-300 p-4">
      <h3 className="font-semibold">Sidebar</h3>
      <ul className="list-disc list-inside mt-2 cursor-pointer space-y-1">
        <li className="text-blue-600  hover:text-pink-500 text-lg">Header</li>
        <li className="text-blue-600  hover:text-pink-500 text-lg">Content</li>
        <li className="text-blue-600 hover:text-pink-500 text-lg">Footer</li>
      </ul>
    </aside>
  );
}
export default SideBar;
