import HeroSection from "@/data/model/pages/homepage/HeroSection" // modelo do Hero Section
import { CheckBadgeIcon } from "@heroicons/react/24/solid" // ícone do badge

/**
 * Conteúdo do Hero Section da página inicial.
 * @author Alexandre Raminelli
 */
const heroSectionContent: HeroSection = {
  badge: {
    Icon: CheckBadgeIcon,
    text: "No LLC Required, No Credit Check.",
  },

  title: {
    normal: "Welcome to YourBank Empowering Your",
    strong: "Financial Journey",
  },
  paragraph: "At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.",

  button: {
    href: "/signup",
    text: "Open Account",
  },
}

export default heroSectionContent
