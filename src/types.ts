// Root API Response Interface
export interface ProductsApiResponse {
	products: Product[];
}

// Individual Product Interface
export interface Product {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: Dimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: Review[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: MetaData;
	images: string[];
	thumbnail: string;
}

// Dimensions Interface
export interface Dimensions {
	width: number;
	height: number;
	depth: number;
}

// Review Interface
export interface Review {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
}

// MetaData Interface
export interface MetaData {
	createdAt: string;
	updatedAt: string;
	barcode: string;
	qrCode: string;
}
