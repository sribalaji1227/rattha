"use client";

import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { ChevronDown, X } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

// Project type definition
export interface Project {
  id: string;
  image: string;
  location: string;
  title: string;
  status: "New Launch" | "Under Construction" | "Completed" | "Ready to Move" | "Possession Ready";
  price: string;
  possessionDate: string;
}

// Filter state type
export interface FilterState {
  residential: string[];
  cities: string[];
  types: string[];
  status: string[];
  budget: string[];
  newLaunches: boolean;
  area: [number, number];
  amenities: string[];
}

// Props for the filter bar
interface ExploreFilterBarProps {
  projects: Project[];
  onFilterChange: (filteredProjects: Project[]) => void;
}

interface DropdownProps {
  label: string;
  selected: string[];
  options: string[];
  isOpen: boolean;
  onOpen: () => void;
  onSelect: (value: string) => void;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ label, selected, options, isOpen, onOpen, onSelect }, ref) => {
    return (
      <div
        ref={ref}
        className="relative min-w-[160px] w-fit cursor-pointer mr-1.5"
      >
        <div
          className="flex items-center justify-between px-2 py-2"
          onClick={onOpen}
        >
          <div className="flex flex-col leading-tight text-left gap-2">
            <span className="text-[14px] uppercase font-[500] font-inter text-[#107BC0] leading-[16px]">
              {label}
            </span>
            <span className="text-[14px] uppercase font-[500] font-inter text-[#AAAAAA] flex items-center gap-1">
              {selected.length > 0 ? `${selected.length} Selected` : "Select"}
            </span>
          </div>
          <ChevronDown className="w-4 h-4 ml-2 text-[#4A4A4A]" />
        </div>

        {isOpen && (
          <div className="absolute z-20 mt-2 w-full min-w-[180px] bg-white max-h-64 overflow-y-auto">
            {options.map((opt) => (
              <div
                key={opt}
                onClick={() => onSelect(opt)}
                className="flex items-center gap-3 border-b border-black px-4 py-3 hover:bg-[#F3F8FC] cursor-pointer text-sm text-[#333]"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(opt)}
                  onChange={() => { }}
                  className="w-4 h-4 accent-[#107BC0]"
                />
                <span className="text-[13px] font-[800] text-black font-inter">{opt}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

// Helper function to extract city from location
const extractCity = (location: string): string => {
  const parts = location.split(', ');
  return parts[parts.length - 1].trim();
};

// Helper function to extract price value for comparison
const extractPriceValue = (price: string): number => {
  const cleanPrice = price.replace(/[^\d.]/g, '');
  let numPrice = parseFloat(cleanPrice);

  if (price.toLowerCase().includes('cr')) {
    numPrice = numPrice * 100;
  }

  return numPrice || 0;
};

// Helper function to check if price falls in budget range
const isPriceInRange = (price: string, budgetRange: string): boolean => {
  const priceValue = extractPriceValue(price);

  switch (budgetRange) {
    case "25 L - 30L":
      return priceValue >= 25 && priceValue <= 30;
    case "31 L - 40L":
      return priceValue >= 31 && priceValue <= 40;
    case "41 L - 55L":
      return priceValue >= 41 && priceValue <= 55;
    case "55 L Above":
      return priceValue > 55;
    default:
      return false;
  }
};

// Helper function to extract area from title
const extractArea = (title: string): number => {
  const hash = title.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  return Math.abs(hash % 800) + 200;
};

const ExploreFilterBar = forwardRef<{ resetFilters: () => void }, ExploreFilterBarProps>(
  ({ projects, onFilterChange }, ref) => {
    const defaultValues: FilterState = {
      residential: [],
      cities: [],
      types: [],
      status: [],
      budget: [],
      newLaunches: false,
      area: [0, 1000],
      amenities: [],
    };

    const filterOptions = {
      residential: ["Residential"],
      cities: Array.from(new Set(projects.map(p => extractCity(p.location)))).sort(),
      types: ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Plots"],
      status: Array.from(new Set(projects.map(p => p.status))).sort(),
      budget: ["25 L - 30L", "31 L - 40L", "41 L - 55L", "55 L Above"],
    };

    const amenitiesList = [
      "Swimming Pool", "Clubhouse", "Kids Play Area", "Gymnasium",
      "Amphitheatre", "Jogging Track", "Squash Court", "Concierge Service",
      "Creche", "Sky Deck", "Banquet Hall", "Games Room"
    ];

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [selectedValues, setSelectedValues] = useState<FilterState>(defaultValues);
    const [moreFiltersOpen, setMoreFiltersOpen] = useState(false);

    const dropdownRefs = {
      residential: useRef<HTMLDivElement>(null),
      cities: useRef<HTMLDivElement>(null),
      types: useRef<HTMLDivElement>(null),
      status: useRef<HTMLDivElement>(null),
      budget: useRef<HTMLDivElement>(null),
    };

    const handleAreaChange = (value: number | number[]) => {
      if (Array.isArray(value)) {
        setSelectedValues(prev => ({
          ...prev,
          area: [value[0], value[1]]
        }));
      }
    };

    const resetFilters = () => {
      setSelectedValues(defaultValues);
      setMoreFiltersOpen(false);
      setOpenDropdown(null);
      onFilterChange(projects);
    };

    useImperativeHandle(ref, () => ({
      resetFilters
    }));

    const applyFilters = (filters: FilterState) => {
      let filtered = [...projects];

      if (filters.cities.length > 0) {
        filtered = filtered.filter(project => {
          const projectCity = extractCity(project.location);
          return filters.cities.includes(projectCity);
        });
      }

      if (filters.status.length > 0) {
        filtered = filtered.filter(project =>
          filters.status.includes(project.status)
        );
      }

      if (filters.budget.length > 0) {
        filtered = filtered.filter(project => {
          return filters.budget.some(budgetRange =>
            isPriceInRange(project.price, budgetRange)
          );
        });
      }

      if (filters.newLaunches) {
        filtered = filtered.filter(project =>
          project.status === "New Launch"
        );
      }

      if (filters.area[0] > 0 || filters.area[1] < 1000) {
        filtered = filtered.filter(project => {
          const projectArea = extractArea(project.title);
          return projectArea >= filters.area[0] && projectArea <= filters.area[1];
        });
      }

      if (filters.amenities.length > 0) {
        // Implementation would go here if amenities were in project data
      }

      onFilterChange(filtered);
    };

    useEffect(() => {
      applyFilters(selectedValues);
    }, [selectedValues, projects]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const isOutsideAll = Object.values(dropdownRefs).every(
          (ref) => ref.current && !ref.current.contains(event.target as Node)
        );
        if (isOutsideAll) {
          setOpenDropdown(null);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleDropdownSelect = (
      key: keyof Omit<FilterState, 'newLaunches' | 'area' | 'amenities'>,
      value: string
    ) => {
      const currentValues = selectedValues[key] as string[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];

      setSelectedValues(prev => ({ ...prev, [key]: newValues }));
    };

    const handleReset = () => {
      resetFilters();
    };

    const handleNewLaunchesToggle = () => {
      setSelectedValues(prev => ({ ...prev, newLaunches: !prev.newLaunches }));
    };

    const handleAmenityToggle = (amenity: string) => {
      const newAmenities = selectedValues.amenities.includes(amenity)
        ? selectedValues.amenities.filter(a => a !== amenity)
        : [...selectedValues.amenities, amenity];

      setSelectedValues(prev => ({ ...prev, amenities: newAmenities }));
    };

    const applyMoreFilters = () => {
      applyFilters(selectedValues);
      setMoreFiltersOpen(false);
    };

    const resetMoreFilters = () => {
      setSelectedValues(prev => ({
        ...prev,
        area: [0, 1000],
        amenities: []
      }));
    };

    return (
      <div className="max-w-[1190px] mx-auto px-4">
        {/* Top Filter Bar */}
        <div className="bg-[#FCFCFC] border border-[#E5E5E5] rounded-sm lg:px-6 sm:px-4 md:px-4 px-[11px] py-3 flex flex-wrap items-center justify-between gap-y-3">
          <div className="flex flex-wrap lg:gap-8 gap-5 items-center w-[100%]">
            <Dropdown
              ref={dropdownRefs.residential}
              label="Residential"
              selected={selectedValues.residential}
              options={filterOptions.residential}
              isOpen={openDropdown === "residential"}
              onOpen={() =>
                setOpenDropdown(
                  openDropdown === "residential" ? null : "residential"
                )
              }
              onSelect={(val) => handleDropdownSelect("residential", val)}
            />
            <Dropdown
              ref={dropdownRefs.cities}
              label="Cities"
              selected={selectedValues.cities}
              options={filterOptions.cities}
              isOpen={openDropdown === "cities"}
              onOpen={() =>
                setOpenDropdown(openDropdown === "cities" ? null : "cities")
              }
              onSelect={(val) => handleDropdownSelect("cities", val)}
            />
            <Dropdown
              ref={dropdownRefs.types}
              label="Types"
              selected={selectedValues.types}
              options={filterOptions.types}
              isOpen={openDropdown === "types"}
              onOpen={() =>
                setOpenDropdown(openDropdown === "types" ? null : "types")
              }
              onSelect={(val) => handleDropdownSelect("types", val)}
            />
            <Dropdown
              ref={dropdownRefs.status}
              label="Status"
              selected={selectedValues.status}
              options={filterOptions.status}
              isOpen={openDropdown === "status"}
              onOpen={() =>
                setOpenDropdown(openDropdown === "status" ? null : "status")
              }
              onSelect={(val) => handleDropdownSelect("status", val)}
            />
            <Dropdown
              ref={dropdownRefs.budget}
              label="Budget"
              selected={selectedValues.budget}
              options={filterOptions.budget}
              isOpen={openDropdown === "budget"}
              onOpen={() =>
                setOpenDropdown(openDropdown === "budget" ? null : "budget")
              }
              onSelect={(val) => handleDropdownSelect("budget", val)}
            />

            <button
              className="bg-[#107BC0] h-[48px] lg:w-[110px] w-[150px] text-white text-sm font-[600] font-inter py-2 rounded-full hover:bg-[#0e6aa3] transition-colors"
              onClick={handleReset}
            >
              RESET
            </button>
          </div>
        </div>

        {/* Bottom Toggle + More Filters */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            <span className="text-[14px] font-inter font-[500] text-black uppercase">
              NEW LAUNCHES
            </span>
            <div
              onClick={handleNewLaunchesToggle}
              className={`w-11 h-5 rounded-full cursor-pointer relative transition-colors duration-300 
      ${selectedValues.newLaunches ? "bg-[#107BC0]" : "bg-[#D1D1DB]"}`}
            >
              <div
                className={`absolute top-[-2.5px] left-[0px] h-6 w-6 rounded-full bg-white transition-transform duration-300 
        shadow-[0_2px_4px_rgba(0,0,0,0.2)] flex items-center justify-center
        ${selectedValues.newLaunches ? "translate-x-[21px]" : "translate-x-0"}`}
              >
                <div className="h-2 w-2 rounded-full bg-[#C6C5D1]" />
              </div>
            </div>
          </div>

          <div
            className="text-[14px] font-[500] font-inter text-black uppercase cursor-pointer flex items-center gap-1"
            onClick={() => setMoreFiltersOpen(!moreFiltersOpen)}
          >
            <span className="pr-10">MORE FILTERS</span>
            <ChevronDown
              className={`w-4 h-4 text-[#646464] transition-transform duration-200 ${moreFiltersOpen ? 'rotate-180' : ''
                }`}
            />
          </div>
        </div>

        {/* More Filters Popup */}
        {moreFiltersOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-12 max-w-3xl w-full mx-4 max-h-[93vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-inter font-bold text-[#107BC0] uppercase">MORE FILTERS</h2>
                <button
                  onClick={() => {
                    setMoreFiltersOpen(false)
                    resetMoreFilters()
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-8">
                <div className="text-center mb-2">
                  <span className="text-lg font-medium">
                    {selectedValues.area[0]} Sq. Mt - {selectedValues.area[1]} Sq. Mt
                  </span>
                </div>
                <div className="flex min-w-[100%] justify-between items-center">
                  <h3 className="text-lg font-inter w-[25%] font-semibold">Area</h3>
                  <div className="w-[75%]">
                    <Slider
                      range
                      min={0}
                      max={1000}
                      value={selectedValues.area}
                      onChange={handleAreaChange}
                      trackStyle={[{
                        backgroundColor: '#107BC0',
                        height: 4,
                        borderRadius: 2
                      }]}
                      handleStyle={[
                        {
                          backgroundColor: 'white',
                          borderColor: 'white',
                          borderWidth: 2,
                          width: '25px',
                          height: '25px',
                          marginTop: -11,
                          opacity: 1,
                          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        },
                        {
                          backgroundColor: 'white',
                          borderColor: 'white',
                          borderWidth: 2,
                          width: '25px',
                          height: '25px',
                          marginTop: -11,
                          opacity: 1,
                          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }
                      ]}
                      railStyle={{
                        backgroundColor: '#E5E5E5',
                        height: 4,
                        borderRadius: 2
                      }}
                    />
                  </div>
                </div>
              </div>

              <hr className="my-6" />

              <div className="mb-8">
                <h3 className="text-lg font-semibold font-inter mb-4">Amenities</h3>
                <div className="flex flex-wrap gap-[10px]">
                  {amenitiesList.map((amenity) => (
                    <button
                      key={amenity}
                      onClick={() => handleAmenityToggle(amenity)}
                      className={`px-4 py-2 rounded-full h-[48px] border text-sm font-medium transition-colors ${selectedValues.amenities.includes(amenity)
                        ? 'bg-[#107BC0] text-white border-[#107BC0]'
                        : 'bg-white text-[#107BC0] border-[#107BC0] hover:bg-[#107BC0] hover:text-white'
                        }`}
                    >
                      {amenity}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="my-6" />

              <div className="flex justify-end gap-4">
                <button
                  onClick={applyMoreFilters}
                  className="px-8 py-3 bg-[#107BC0] text-white rounded-full font-semibold hover:bg-[#0e6aa3] transition-colors"
                >
                  APPLY
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

ExploreFilterBar.displayName = "ExploreFilterBar";

export default ExploreFilterBar;