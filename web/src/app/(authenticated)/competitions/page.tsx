"use client";
import Header from "@/components/shared/common/header";
import { CompetitionsHeader } from "@/constants/header";

// TODO: This Page
export default function CompetitionsPage() {
    //TODO: Modify Onsearch
    const searchHandler = (e: string) => {
        console.log(e);
    };
    return (
        <Header
            title={CompetitionsHeader.title}
            description={CompetitionsHeader.description}
            tabs={CompetitionsHeader.tabs}
            onSearch={searchHandler}
        ></Header>
    );
}
