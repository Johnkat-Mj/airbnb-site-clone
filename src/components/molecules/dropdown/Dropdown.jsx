import { createContext, useContext, useEffect, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"


const DropDownContext = createContext()

const useDropDownContext = () => {
  return useContext(DropDownContext)
}

function Dropdown({ children }) {
  const [showDropDown, setshowDropDown] = useState(false)

  const toggleDropdown = () => {
    setshowDropDown(prev => !prev)
  }

  const hideDropDown = () => {
    setshowDropDown(() => false)
  }
  return (
    <DropDownContext.Provider value={{ showDropDown, toggleDropdown, hideDropDown }}>
      <div className="relative">
        {children}
      </div>
    </DropDownContext.Provider>
  )
}

function Trigger({ children }) {
  const { toggleDropdown, hideDropDown } = useDropDownContext()
  const triggerRef = useRef(null)


  function handleClickOutside(e) {
    const target = e.target
    if (triggerRef.current && !triggerRef.current.contains(target)) {
      hideDropDown()
    }
  }

  useEffect(() => {
    document.body.addEventListener("mousedown", e => handleClickOutside(e))

    return () => {
      document.body.removeEventListener("mousedown", e => handleClickOutside(e))
    }
  })

  return <button ref={triggerRef} onClick={() => {
    toggleDropdown()
  }} className="outline-none">
    {children}
  </button>
}

function Content({ className, children }) {
  const { showDropDown, hideDropDown } = useDropDownContext()
  const dropDownRef = useRef(null)
  return <CSSTransition in={showDropDown}
    nodeRef={dropDownRef}
    timeout={300}
    classNames={`mydropdown`}
    unmountOnExit>
    <div ref={dropDownRef} className={`absolute top-[calc(100%+10px)] right-0 py-4 bg-white shadow-xl shadow-gray-200/40 rounded-lg w-60 border border-gray-100 ${className !== "" ? className : "right-0"}`}>
      {children}
    </div>
  </CSSTransition>
}

function DropdownItem({ text }) {
  return <li className="flex hover:bg-gray-200 duration-300 ease-linear">
    <span className="py-2 px-4">
      {text}
    </span>
  </li>
}


Dropdown.Trigger = Trigger
Dropdown.Content = Content
Dropdown.DropdownItem = DropdownItem
export { Dropdown }