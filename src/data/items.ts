export type ItemType = {
    id: string;
    name: string;
    description: string;
    price: number;
    img: string;
};

export const getItems = (): ItemType[] => [
    {
        id: "1",
        name: "Red hoodie",
        description: "This is a very cool hoodie",
        price: 22.99,
        img: "./hoodie-1.jpg",
    },
    {
        id: "2",
        name: "Green hoodie 3 laces",
        description: "Nice green hoodie",
        price: 22.99,
        img: "./hoodie-2.jpg",
    },
    {
        id: "3",
        name: "Normal green hoodie",
        description: "Normal green hoodie",
        price: 30.99,
        img: "./hoodie-3.jpg",
    },
    {
        id: "4",
        name: "Light green hoodie",
        description: "Comfy light green hoodie",
        price: 50.99,
        img: "./hoodie-4.jpg",
    },
];
