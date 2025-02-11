export default function Button() {
    return <header className="bg-white shadow-md p-4 flex justify-between items-center">
    <div className="text-xl font-bold">Mon Site</div>
    <nav className="hidden md:flex space-x-4">
      <a href="#" className="text-gray-700 hover:text-black">Accueil</a>
      <a href="#" className="text-gray-700 hover:text-black">Services</a>
      <a href="#" className="text-gray-700 hover:text-black">Contact</a>
    </nav>
  </header>;
  }