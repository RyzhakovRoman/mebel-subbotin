export enum R {
    HOME = '/',
    ABOUT = '/about',
    CATALOG = '/catalog', // todo - Сделать красивую разводящую на категории страницу
    CATALOG_CATEGORY_SUBCATEGORY = '/catalog/:category/:subcategory',
    CATALOG_CATEGORY = '/catalog/:category',
    DELIVERY = '/delivery',
    PRODUCT = '/catalog/product-:id',
}
