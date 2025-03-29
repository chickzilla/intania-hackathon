"use client";
import Header from "@/components/shared/common/header";
import { CoursesHeader } from "@/constants/header";

// TODO: This Page
export default function CoursesPage() {
    // TODO: Modify Onsearch
    const searchHandler = (e: string) => {
        console.log(e);
    };
    return (
        <Header
            title={CoursesHeader.title}
            description={CoursesHeader.description}
            tabs={CoursesHeader.tabs}
            onSearch={searchHandler}
        ></Header>
    );
}
