import { ImAccessibility, ImAddressBook } from "react-icons/im";
import { MdOutlineSecurity } from "react-icons/md";
import { FaBaby, FaStar, FaMicroscope } from "react-icons/fa";
import { TbClockHour4, TbDental } from "react-icons/tb";
import { GiHeartOrgan, GiStickingPlaster } from "react-icons/gi";
import { IoWoman } from "react-icons/io5";
import { FaPersonRays } from "react-icons/fa6";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Customer Service", href: "/#support" },
  { name: "Login", href: "/login" },
];
export const aboutfeatures = [
  {
    title: "Appointments",
    description:
      "Book your medical appointments easily through our platform — no waiting, no hassle. Choose the right time for you, and get reminders so you never miss a visit.",
    icon: <ImAddressBook />,
  },
  {
    title: "Video Consultations",
    description:
      "Access professional healthcare from the comfort of your home. Our licensed doctors are available for online consultations to help you save time and get answers fast.",
    icon: <ImAccessibility />,
  },
  {
    title: "Secure Patient Data",
    description:
      "We take data privacy seriously. All your medical records and personal information are encrypted and stored securely, following international healthcare standards.",
    icon: <MdOutlineSecurity />,
  },
  {
    title: "Fast Services",
    description:
      "Whether it's a routine check-up, a second opinion, or a quick prescription — our system ensures that you get everything you need quickly and with care.",
    icon: <FaStar />,
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist with your medical needs, answer questions, and provide peace of mind anytime you need help.",
    icon: <TbClockHour4 />,
  },
];
export const medicalServices = [
  {
    title: "General Checkups",
    description:
      "Routine health assessments to monitor and maintain your overall well-being.",
    icon: <ImAccessibility />,
  },
  {
    title: "Pediatrics",
    description:
      "Specialized care for infants, children, and adolescents focused on healthy growth.",
    icon: <FaBaby />,
  },
  {
    title: "Internal Medicine",
    description:
      "Diagnosis and treatment of chronic and acute conditions for adult patients.",
    icon: <GiHeartOrgan />,
  },
  {
    title: "Dermatology",
    description:
      "Skin care services including acne treatment, eczema management, and cosmetic care.",
    icon: <GiStickingPlaster />,
  },
  {
    title: "Dental Care",
    description:
      "Preventive and cosmetic dental treatments such as cleanings, fillings, and whitening.",
    icon: <TbDental />,
  },
  {
    title: "Gynecology",
    description:
      "Personalized care for women through all life stages with attention and privacy.",
    icon: <IoWoman />,
  },
  {
    title: "Laboratory Services",
    description:
      "Accurate and fast diagnostic testing to support clinical decision-making.",
    icon: <FaMicroscope />,
  },
  {
    title: "Radiology",
    description:
      "Advanced imaging services including X-rays, ultrasounds, and more.",
    icon: <FaPersonRays />,
  },
];
