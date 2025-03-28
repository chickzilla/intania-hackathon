export interface HeaderProps {
    title: string;
    description?: string;
    onSearch: (query: string) => void;
    tabs?: string[];
}
