import ProductSection from "@/data/model/pages/homepage/ProductSection"
import { ArchiveBoxArrowDownIcon, BanknotesIcon, BriefcaseIcon } from "@heroicons/react/24/solid"

/**
 * Conteúdo da seção de produtos da página inicial
 * @author Alexandre Raminelli
 */
const productSection: ProductSection = {
  introduction: {
    title: {
      normal: "Our",
      strong: "Products",
    },
    introductionText: "Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations",
  },

  cardsOptions: ["For Individuals", "For Businesses"],

  productCards: {
    individualCards: [
      { Icon: BriefcaseIcon, title: "Checking Accounts", text: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access." },
      { Icon: ArchiveBoxArrowDownIcon, title: "Savings Accounts", text: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you." },
      { Icon: BanknotesIcon, title: "Loans and Mortgages", text: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need." },
    ],
    businessCards: [{ Icon: BriefcaseIcon, title: "", text: "" }],
  },
}

export default productSection
