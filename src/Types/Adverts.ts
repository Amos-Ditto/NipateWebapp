export interface Advert {
	id: number;
	ADTitle: string;
	User: User;
	Service?: ServiceEntityOrLocation[] | null;
	Location: ServiceEntityOrLocation;
	AdDescription: string;
	StartDate: string;
	ExpiryDate: string;
	NoOfMessages: number;
}
export interface User {
	id: number;
	MobileNumber: string;
	IDNumber: string;
	FirstName: string;
	SurName: string;
}
export interface ServiceEntityOrLocation {
	id: number;
	Name: string;
}
