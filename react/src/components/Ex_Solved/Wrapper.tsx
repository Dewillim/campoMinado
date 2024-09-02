import { PropsWithChildren } from "react";

export function Wrapper ({ children }: PropsWithChildren) {
    return (
        <div style={{ 
            display: "flex",
            backgroundColor: "lightblue", 
            padding: "10px",
            margin: "1px",
        }}>
            {children}
        </div>
    );
};