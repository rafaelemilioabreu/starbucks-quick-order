
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee, ShoppingBag, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Pedir Ahora', path: '/mobile-order' },
    { name: 'Mesa con QR', path: '/qr-order' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    // Close menu when location changes
    closeMenu();
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-2 bg-white/80 backdrop-blur-lg shadow-subtle" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 z-10"
          onClick={closeMenu}
        >
          <div className="w-10 h-10 rounded-full bg-starbucks-green flex items-center justify-center">
            <Coffee className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-xl tracking-tight">Starbucks</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-starbucks-green relative py-2",
                location.pathname === link.path
                  ? "text-starbucks-green after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-starbucks-green after:content-[''] after:rounded-full"
                  : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/mobile-order" 
            className="rounded-full p-2 hover:bg-muted transition-colors"
            aria-label="Order"
          >
            <ShoppingBag className="h-5 w-5" />
          </Link>
          <Link 
            to="/profile" 
            className="rounded-full p-2 hover:bg-muted transition-colors"
            aria-label="Profile"
          >
            <User className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col p-6 pb-20 transition-transform duration-300 ease-spring md:hidden pt-24",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg font-medium py-2 border-b border-border",
                  location.pathname === link.path
                    ? "text-starbucks-green"
                    : "text-foreground/80"
                )}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto">
            <div className="flex items-center justify-around pt-6">
              <Link 
                to="/mobile-order" 
                className="flex flex-col items-center space-y-1"
                onClick={closeMenu}
                aria-label="Order"
              >
                <div className="rounded-full p-3 bg-muted">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <span className="text-xs">Ordenar</span>
              </Link>
              <Link 
                to="/profile" 
                className="flex flex-col items-center space-y-1"
                onClick={closeMenu}
                aria-label="Profile"
              >
                <div className="rounded-full p-3 bg-muted">
                  <User className="h-6 w-6" />
                </div>
                <span className="text-xs">Perfil</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
