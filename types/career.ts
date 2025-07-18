export type CareerFormProps = {
    roleName: string;
    description: string;
    responsibilities: string[];
    skills: string[];
    id: any;
    closeTab: (id: number) => void;
};