export interface Category {
    name: string;
}

interface Data {
    main: Category[],
    others: Category[]
}


export const categoryData: Data = {
    main: [
        {
            name: "smartphones",
        },
        {
            name: "laptops",
        },
        {
            name: "fragrances",
        },
        {
            name: "skincare",
        },
        {
            name: "groceries",
        },
    ],
    others: [
        {
            name: "home-decoration"
        },
        {
            name: "furniture"
        },
        {
            name: "tops"
        },
        {
            name: "womens-dresses"
        },
        {
            name: "womens-shoes"
        },
        {
            name: "mens-shirts"
        },
        {
            name: "mens-shoes"
        },
        {
            name: "mens-watches"
        },
        {
            name: "womens-watches"
        },
        {
            name: "womens-bags"
        },
        {
            name: "womens-jewellery"
        },
        {
            name: "sunglasses"
        },
        {
            name: "automotive"
        },
        {
            name: "motorcycle"
        },
        {
            name: "lighting"
        },
    ]
};

