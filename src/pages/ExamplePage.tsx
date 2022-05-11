 import React, {ReactNode, FunctionComponent} from "react";

interface BaseLayoutProps {
    children?: ReactNode;
}

export const ExamplePage: FunctionComponent<BaseLayoutProps> = ({children}) => {
    return <div>{children}</div>
}