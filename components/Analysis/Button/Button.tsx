import { Singlebutton } from "./Singlebutton"


export const Button = () => {
    return (
        <div className="flex gap-3 justify-center my-5 overflow-x-scroll scrollbar-hide md:overflow-x-hidden ">
            <Singlebutton title="Transaction speed"/>
            <Singlebutton title="Gas Price"/>
            <Singlebutton title="Hash Rate"/>
            <Singlebutton title="Users"/>
            <Singlebutton title="Activity"/>
            <Singlebutton title="Market"/>
        </div>
    )
}
