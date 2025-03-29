export interface HeaderProps {
    title: string;
    description?: string;
    // TODO: Modify type for onSearch
    onSearch: (query: string) => void;
    onSearchByTab: (tab: string) => void;
    tabs?: string[];
    currentTab?: string;
}
