import { faq } from "./nri";

export interface FaqDropdownProps {
    data: faq[],
    children: React.ReactNode,
    headingSize: string
}