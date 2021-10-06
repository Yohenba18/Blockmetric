import { Singlebutton } from "./singlebutton"


export const Button = () => {
    return (
        <div className="flex gap-3 justify-center my-5">
            <Singlebutton title="Transaction speed"/>
            <Singlebutton title="Gas Price"/>
            <Singlebutton title="Hash Rate"/>
            <Singlebutton title="Users"/>
            <Singlebutton title="Activity"/>
            <Singlebutton title="Market"/>
        </div>
    )
}
