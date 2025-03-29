export interface HeaderProps {
    title: string;
    description?: string;
    // TODO: Modify type for onSearch
    onSearch: (query: string) => void;
    tabs?: string[];
}
