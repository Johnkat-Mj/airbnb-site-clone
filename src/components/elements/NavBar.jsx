import AirbnbLogo from "components/atoms/AirbnbLogo";
import { Container } from "components/atoms/Container";
import { Separator } from "components/atoms/Separator";
import { Input } from "components/atoms/input/Input";
import { Dropdown } from "components/molecules/dropdown/Dropdown";
import { Modal } from "components/molecules/modal/Modal";
import { LucideGlobe, LucideMenu, LucideSearch } from "lucide-react";

export function NavBar() {
  return (
    <header className="sticky top-0 w-full h-20 flex items-center bg-white border-b border-gray-200 z-50">
      <Container>
        <div className="flex justify-between items-center w-full gap-4 py-3 relative z-30">
          {/* logo here  */}
          <div className="flex w-full flex-1">
            <AirbnbLogo />
          </div>
          {/* filter on large screen here  */}
          <div className="min-w-max">
            <div className=" flex rounded-full border border-gray-200 shadow-md px-2 py-1.5 max-w-sm mx-auto">
              <div className="w-full grid grid-cols-3 items-center divide-x divide-gray-200 pl-4 py-0.5">
                <div className="col-span-1 text-gray-700 font-medium">
                  <Input
                    className="px-3 py-0.5 bg-transparent"
                    type="text" placeholder="Anywhere"
                    readOnly
                  />
                </div>
                <div className="col-span-1 text-gray-700 font-medium">
                  <Input className="px-3 py-0.5 bg-transparent"
                    type="text"
                    placeholder="Annyweek"
                    readOnly
                  />
                </div>
                <div className="col-span-1">
                  <Input
                    className="px-3 py-0.5 bg-transparent"
                    type="text"
                    placeholder="Add guests"
                    readOnly
                  />
                </div>
              </div>
              <div className="min-w-max bg-transparent">
                <button className="p-2.5 rounded-full border-none outline-none bg-primary text-white transition hover:bg-opacity-900">
                  <LucideSearch size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* right part of nav */}
          <div className="flex items-center gap-4 w-full justify-end flex-1 relative z-80">
            <div className="flex items-center gap-4 text-gray-600">
              <button className="outline-none px-3 py-1.5 transition hover:bg-gray-100 rounded-3xl">
                Airbnb your home
              </button>

              <Modal>
                <Modal.Trigger>
                  <div className='flex items-center gap-2'>
                    <LucideGlobe size={20} />
                  </div>
                </Modal.Trigger>
                <Modal.Content>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laudantium amet hic atque, nisi officiis excepturi sapiente dolorum cumque, reiciendis vero nihil neque qui soluta consequatur, at libero ad sit.
                </Modal.Content>
              </Modal>

              <Dropdown>
                <Dropdown.Trigger>
                  <div className="flex gap-3 border  items-center rounded-3xl p-0.5 pl-3">
                    <span>
                      <LucideMenu size={20} />
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-9 h-9"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <ul className="text-gray-600">
                    <Dropdown.DropdownItem text="Sign up" />
                    <Dropdown.DropdownItem text="Login" />
                    <Separator />
                    <Dropdown.DropdownItem text="Airbnb your homen" />
                    <Dropdown.DropdownItem text="Help" />
                  </ul>
                </Dropdown.Content>
              </Dropdown>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
