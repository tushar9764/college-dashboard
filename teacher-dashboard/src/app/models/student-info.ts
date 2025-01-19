export interface StudentInfo {
    id: string;
    name: string;
    class: string;
    branch: string;
    latest_cpi: number;
    email: string;
    phone: string;
    address: {
        city: string;
        state: string;
        country: string;
    }
}
