export class Income {
    public constructor(
        public incomeId?: number,
        public clientId?: number,
        public clientName?: string,
        public operationDate?: string,
        public description?: string,
        public amount?: number,
        public totalAmount?: number) {}
}