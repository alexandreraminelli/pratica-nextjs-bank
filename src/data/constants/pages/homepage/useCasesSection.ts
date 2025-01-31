import UseCasesSection from "@/data/model/pages/homepage/UseCasesSection"
import { BanknotesIcon, BookOpenIcon, BuildingLibraryIcon, BuildingOffice2Icon, CurrencyDollarIcon, PresentationChartBarIcon } from "@heroicons/react/24/solid"

/**
 * Conteúdo da seção de casos de uso.
 * @author Alexandre Raminelli
 */
const useCasesSection: UseCasesSection = {
  introduction: {
    title: {
      normal: "",
      strong: "Use Cases",
    },
    introductionText: "At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions",
  },

  useCaseTypes: [
    // Individuals
    {
      type: "For Individuals",
      description: "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers",

      mainTopics: [
        { text: "Managing Personal Finances", Icon: BookOpenIcon }, // ícone provisório
        { text: "Saving for the Future", Icon: BookOpenIcon }, // ícone provisório
        { text: "Homeownership", Icon: BuildingLibraryIcon },
        { text: "Education Funding", Icon: BookOpenIcon },
      ],

      numericalData: [
        { value: 78, suffix: "%", description: "Secure Retirement Planning" },
        { value: 63, suffix: "%", description: "Manageable Debt Consolidation" },
        { value: 91, suffix: "%", description: "Reducing financial burdens" },
      ],
    },
    // Business
    {
      type: "For Business",
      description: "For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them",

      mainTopics: [
        { text: "Startups and Entrepreneurs", Icon: BuildingOffice2Icon },
        { text: "Cash Flow Management", Icon: BanknotesIcon },
        { text: "Business Expansion", Icon: PresentationChartBarIcon },
        { text: "Payment Solutions", Icon: CurrencyDollarIcon },
      ],

      numericalData: [
        { value: 65, suffix: "%", description: "Cash Flow Management" },
        { value: 70, suffix: "%", description: "Drive Business Expansion" },
        { value: 45, suffix: "%", description: "Streamline payroll processing" },
      ],
    },
  ],
}

export default useCasesSection
