
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks = [
    {
      name: "About",
      path: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Mission", path: "/about" },
        { name: "Founder's Story", path: "/founders-story" },
        { name: "Our Team", path: "/team" },
      ],
    },
    {
      name: "Learn",
      path: "/courses",
      hasDropdown: true,
      dropdownItems: [
        { name: "All Courses", path: "/courses" },
        { name: "Learning Paths", path: "/learning-paths" },
        { name: "Student Projects", path: "/projects" },
        { name: "Free Resources", path: "/resources" },
      ],
    },
    {
      name: "Events",
      path: "/events",
      hasDropdown: false,
    },
    {
      name: "Community",
      path: "/community",
      hasDropdown: false,
    },
    {
      name: "Blog",
      path: "/blog",
      hasDropdown: false,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Stuap</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="px-3 py-2 text-rich-charcoal hover:text-primary flex items-center"
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className="px-3 py-2 text-rich-charcoal hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )}

                {link.hasDropdown && (
                  <div
                    className={`absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 z-10 transition-all transform origin-top-left ${
                      activeDropdown === link.name
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0 pointer-events-none"
                    }`}
                  >
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-rich-charcoal hover:bg-gray-100"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="ml-4 flex items-center space-x-3">
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/join">
                <Button className="bg-primary hover:bg-primary/90" size="sm">
                  Join Stuap
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-rich-charcoal p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <div key={link.name} className="py-1">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="w-full text-left px-3 py-2 flex justify-between items-center"
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 py-2 space-y-2">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block py-1 text-rich-charcoal/80 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="block px-3 py-2 text-rich-charcoal hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col space-y-3 px-3">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/join" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Join Stuap</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
