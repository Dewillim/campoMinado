import { PropsWithChildren } from "react";

type toBuy = {
    item: string;
    price: number;
}

const items : toBuy[] = [{item: "Maçã", price: 3}, 
    {item: "Morango", price: 5}, 
    {item: "Melancia", price: 4}, 
    {item: "Melão", price: 2}, 
    {item: "Mexerica", price: 1}]

    function ListItem({ children }: PropsWithChildren) {
        return (
            <div>{children}</div>
        );
    }

    export const ListContainer = () => {

        return (
            <div className="text-white justify-center items-center bg-blue-500">
                {
                    items.map((item, index) => (
                        <ListItem key={index}>{index + 1} - {item.item} - R${item.price}</ListItem>
                    ))
                }
            </div>
        );
    };


/*
const items = ["Maçã", "Morango", "Melancia", "Melão", "Mexerica"];

export const ListContainer = () => {

    return (
        <div className="text-white justify-center items-center h-screen bg-blue-500">
            {
                items.map((item, index) => (
                    <ListItem key={index}>{index + 1} - {item}</ListItem>
                ))
            }
        </div>
    );
};
*/