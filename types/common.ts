import { ReactNode } from "react";

export interface InterestFormData {
    fullName: string;
    email: string;
    phone: string;
    message: string;
}

export interface NavLinkProps {
    href: string;
    className?: string;
    children: ReactNode;
}

export type StarRatingProps = {
    rating: number;
}