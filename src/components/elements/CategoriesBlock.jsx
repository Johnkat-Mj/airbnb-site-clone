
import { Container } from "components/atoms/Container";
import { ScrollableBox } from "components/molecules/ScrollableBox";
import { CardBtncategory } from "components/molecules/cards/CardBtncategory";
import { cathegories } from "datas/categories";
import { LucideSlidersHorizontal } from "lucide-react";
import { useState, useEffect } from "react";

export function CategoriesBlock() {
  const [currentpage, setcurrentpage] = useState("Surfing")

  const categories = cathegories;

  const [canApplyShadow, setCanApplyShadow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', applyStyles);
    return () => window.removeEventListener('scroll', applyStyles);
  }, []);

  const applyStyles = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 40 ? setCanApplyShadow(true) : setCanApplyShadow(false);
    }
  };
  return (
    <div className={`sticky top-20 w-full overflow-hidden bg-white mt-5 z-20 
        ${canApplyShadow ? "border-b border-b-gray-200 shadow-lg shadow-gray-200/30" : "border-b-transparent shadow-transparent"}
        `}>
      <Container className="relative flex justify-between items-center gap-4">
        <ScrollableBox>
          {categories.map((category) => (
            <CardBtncategory
              key={category.id}
              icon={category.icon}
              text={category.text}
              isActive={category.text === currentpage}
            />
          ))}
        </ScrollableBox>
        <div className="min-w-max flex">
          <button className="text-gray-600 outline-none px-4 py-3 shadow-lg shadow-gray-200/30 flex items-center gap-3 rounded-md border border-gray-200 text-sm">
            <LucideSlidersHorizontal size={15} />
            <span className="md:flex hidden">Filter</span>
          </button>
        </div>
      </Container>
    </div>
  );
}
