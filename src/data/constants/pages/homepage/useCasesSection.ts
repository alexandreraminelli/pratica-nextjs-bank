import UseCasesSection from "@/data/model/pages/homepage/UseCasesSection"

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
    },
    // Business
    {
      type: "For Business",
      description: "For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them",
    },
  ],
}

export default useCasesSection
