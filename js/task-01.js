const categoriesListEl = document.getElementById(`categories`);

const getNumberOfCategories = category => {
    console.log(`Number of categories: ${category.children.length}`)
}

const categories = categoriesListEl.children;

getNumberOfCategories(categoriesListEl);

const getStatsOfCategories = categories => {
        for (const item of categories) {
            console.log(`Category: ${item.querySelector(`h2`).textContent}`);
            console.log(`Elements: ${item.querySelector(`ul`).children.length}`);
    }
}

getStatsOfCategories(categories)



