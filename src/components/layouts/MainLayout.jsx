import { BottomTabar } from "../elements/BottomNavbar";
import { Footer } from "../elements/Footer";
import { NavBar } from "components/elements/NavBar";
import { CategoriesBlock } from "components/elements/CategoriesBlock";
import { BtnToggleViewMode } from "components/elements/BtnToggleViewMode";

export function MainLayout({children}) {
  return (
    <>
        <NavBar/>
        <CategoriesBlock/>
        <main className="pb-20">
            {children}
        </main>
        <BtnToggleViewMode/>
        <Footer/>
        <BottomTabar/>
    </>
  )
}
