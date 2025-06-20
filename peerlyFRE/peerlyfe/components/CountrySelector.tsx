import { useState, useRef, useEffect } from 'react';
import { Input } from './ui/input';
import { ChevronDown, Check } from 'lucide-react';

interface Country {
  name: string;
  code: string;
}

interface CountrySelectorProps {
  onSelect: (country: Country) => void;
  selectedCountry?: Country;
}

// Array of countries (abbreviated for brevity)
const countries: Country[] = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Albania', code: 'AL' },
  { name: 'Algeria', code: 'DZ' },
  { name: 'Andorra', code: 'AD' },
  { name: 'Angola', code: 'AO' },
  { name: 'Antigua and Barbuda', code: 'AG' },
  { name: 'Argentina', code: 'AR' },
  { name: 'Armenia', code: 'AM' },
  { name: 'Australia', code: 'AU' },
  { name: 'Austria', code: 'AT' },
  { name: 'Azerbaijan', code: 'AZ' },
  { name: 'Bahamas', code: 'BS' },
  { name: 'Bahrain', code: 'BH' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Barbados', code: 'BB' },
  { name: 'Belarus', code: 'BY' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Belize', code: 'BZ' },
  { name: 'Benin', code: 'BJ' },
  { name: 'Bhutan', code: 'BT' },
  { name: 'Bolivia', code: 'BO' },
  { name: 'Bosnia and Herzegovina', code: 'BA' },
  { name: 'Botswana', code: 'BW' },
  { name: 'Brazil', code: 'BR' },
  { name: 'Brunei', code: 'BN' },
  { name: 'Bulgaria', code: 'BG' },
  { name: 'Burkina Faso', code: 'BF' },
  { name: 'Burundi', code: 'BI' },
  { name: 'Cambodia', code: 'KH' },
  { name: 'Cameroon', code: 'CM' },
  { name: 'Canada', code: 'CA' },
  { name: 'United States', code: 'US' },
  { name: 'United Kingdom', code: 'GB' },
];

// Group countries by first letter for better organization
const groupedCountries = countries.reduce<Record<string, Country[]>>((acc, country) => {
  const firstLetter = country.name.charAt(0).toUpperCase();
  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }
  acc[firstLetter].push(country);
  return acc;
}, {});

export function CountrySelector({ onSelect, selectedCountry }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter countries based on search term
  const filteredCountries = searchTerm.length > 0
    ? countries.filter(country => 
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : countries;

  // Group filtered countries
  const filteredGroupedCountries = searchTerm.length > 0
    ? filteredCountries.reduce<Record<string, Country[]>>((acc, country) => {
        const firstLetter = country.name.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(country);
        return acc;
      }, {})
    : groupedCountries;

  // Toggle dropdown
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm('');
    }
  };

  // Handle country selection
  const handleSelectCountry = (country: Country) => {
    onSelect(country);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="relative cursor-pointer"
        onClick={handleToggleDropdown}
      >
        <Input
          value={selectedCountry ? selectedCountry.name : ''}
          placeholder="Select your country"
          className="pr-8 rounded-md border-slate-300"
          readOnly
        />
        <ChevronDown 
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 h-3 w-3 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full max-w-[492px] bg-white rounded-md border border-slate-100 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)] overflow-hidden max-h-[300px] overflow-y-auto">
          {Object.keys(filteredGroupedCountries).sort().map(letter => (
            <div key={letter} className="w-full">
              {/* Section header with letter */}
              <div className="bg-white w-full px-[5px] pt-[5px]">
                <div className="bg-white w-full pl-8 pr-2 py-1.5 text-[14px] font-medium text-slate-900">
                  {letter}
                </div>
              </div>
              
              {/* Countries in this section */}
              <div className="bg-white w-full px-[5px] pb-[5px]">
                {filteredGroupedCountries[letter].map(country => (
                  <div 
                    key={country.code}
                    className={`w-full pl-8 pr-2 py-1.5 flex items-center gap-2 hover:bg-slate-100 cursor-pointer ${selectedCountry?.code === country.code ? 'bg-slate-100' : ''}`}
                    onClick={() => handleSelectCountry(country)}
                  >
                    {selectedCountry?.code === country.code && (
                      <Check className="h-4 w-4 text-slate-900" />
                    )}
                    <span className={`text-[14px] ${selectedCountry?.code === country.code ? 'font-medium text-slate-900' : 'font-normal text-slate-700'}`}>
                      {country.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Separator line */}
              {letter !== Object.keys(filteredGroupedCountries).sort().pop() && (
                <div className="h-0 w-full border-t border-slate-50" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}